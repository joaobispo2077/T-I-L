# S3 Encryption for objects

- There are 4 methods of encrypting objects in S3
  - SSE-S3: encrypts S3 objects using keys handled & managed by AWS
  - SSE-KMS: leverage AWS Key Mnanagement Service to manage encryption keys
  - SSE-C: when you want to manage your own encryption keys
  - Client Side Encryption
- It is important to understand wich ones are adapted to wich situation for the exam

## SSE-KMS
- SSE-KMS: encryption using keys handled & managed by KMS
- KMS advantages: user control + audit trail
- Object is encrypted server side
- Must set header: `x-amz-server-side-encryption` to `aws:kms`

## SSE-KMS Deep Dive
- SSE-KMS leverages the GenerateDataKey & Decrypt KMS API calls
- These KMS API calls will show up in CloudTrail, helpful for logging
- To performn SSE-KMS, you need:
  - A KMS Key Policy that authorizes the user/role
  - An IAM policy that authorizes access to KMS
  - Otherwise you will get an access denied error
- S3 calls to KMS for SSE-KMS count agains your KMS limits
  - If throttling, try exponential backoff
  - If throttling, you can request an increase in KMS limits
  - The service throttling is KMS, not Amazon S3

## S3 Bucket Policies - Force SSL
- To force SSL, create an S3 bucket policy with a DENY on the condition `aws:SecureTranporte=false`

## S3 Bucket Policies - Force Encryption
1. DENY incorrect encryption header - make surte it includes `aws:kms=SSE-KMS`
2/ DENY no encryption header to ensure objects are not uploaded un-encrypted
