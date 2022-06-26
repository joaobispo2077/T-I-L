# AWS KMS (Key Management Service)

## Overview
- Anytime you hear "encryption" for an AWS service, it's most likely KMS
- Easy way to control access to your data, AWS manages keys for us
- Fully integrated with IAM for authorization
- Seamlesssly integrated into:
  - Amazon EBS: encrypt volumes
  - Amazon S3: Server side encryption of objects
  - Amazon Redshift:  encryption of data
  - Amazon RDS: encryption of data
  - Amazon SSM: Parameter store
  - Etc...
- You can use with CLI and SDK

## KMS - Customer Master Key (CMK) Types

 - *Symmetric (AES-256 Keys)*
  - Frist offering of KMS, single encryption key that is used to Encryhpt and Decrypt
  - AWS services that are integrated with KMS use Symmetric CMKs
  - Necessary for envelope encryption
  - You never get access to the key unencrypted (must call KMS API to use)
- *Asymmetric (RSA & ECC Key pairs)*
  - Public (Encrypt) and Private Key (Decrypt) pair
  - Used for Encrypt/Decrypt, or Sign/Verify operations
  - The public key is downloadable, but you can't access the Private Key unencrypted
  - Use case: encryption outside of AWS by users who can't call the KMS API

## KMS DETAILS
- Able to fully manage the keys & policies:
  - Create
  - Rotation policies
  - Disable
  - Enable
- Able to audit key usage (using Cloudtrail)
- Three types of Customer Master key:
  - AWS Managed Service Default CMK: free
  - User keys created in KMS: $1/month
  - User keys imported (must be 256-bit summetric key): $1/month
- pay for API call to KMS ($0.03/10,000 calls)
- Keys are bound to a single region, but is allowed to copy snapshot across regions

## Why KMS?

- Anytime you need to share sensitive information use KMS
  - Database passwords
  - Credentials to external service
  - Private Key of SSL certificates
- The value in KMS ios that the CMK used to encrypt data can never be retrieved by the user, and the CMK can be rotated for extra security.
- Never ever stire your secrets in plaintext, especially in your code!
- Encrypted secrets can be stored in the code/ environment variables
- KMS can only help in encryption up to 4KB of data per call
- if data is greater than 4KB, use envelope encryption
- To give access to KMS to someone:
  - Make sure the Key Policy allows the user
  - Make sure the IAM Policy allows the API calls

## KMS Key Policies
- Control access to KMS keys, "similar" to S3 bucket policies
- Difference, you cannot control access without them
- Default KMS Key Policy:
  - Created if you don't provide a specific KMS Key Policy
  - Complete access to the key to the root user = entire AWS account
  - Gives access to the IAM policies to the KMS key
- Custom KMS Key Policy
  - Define users, roles that can access the KMS key
  - Define who can administer the key
  - Useful for cross-account access of your

  ## Copyng Snapshots across accounts
  1. Create a snapshot, encrypted with your own CMK
  2. Attach a KMS Key Policy to authorize cross-acount access
  3. Share the encrupted snapshot
  4. (in target) Create a copy of the Snapshot, encrypt it with a KMS Key in your accounts
  5. Create a volume from the snapshot
