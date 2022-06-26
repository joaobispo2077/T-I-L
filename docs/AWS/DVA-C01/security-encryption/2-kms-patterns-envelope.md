# How does KMS work?

## API - Encrypt and Decrypt
## Envelope Encryption
- KMS Encrypt API calls has a limit of 4KB
- If you want to encrypt over 4Kb, we need to use Envelope Encryption
- The main API that will help us is the GenerateDataKey API

- *FOR THE EXAM*: anything over 4KB of data that needs to be encrypted must use the Envelope Encryption, that means use `GenerateDataKey` API

## KMS Symmetric - API Summary

- *Encrypt* - encrypt up to 4Kb of data through KMS
- *GenerateDataKey* - generates a unique symmetric data key (DEK)
  - retuns a plain text copy of the data key
  - AND a copy that is encrypted under the CMK that you specify
- *GenerateDataKeyWithoutPlainText*
  - Generate a DEK to use at some point (not immediately)
  - DEK that is encrypted under the CMK that you specifty (Must use decrypt later), extra step
- *Decrypt* - decrypt up to 4kb of data (including Data Encryption Keys, DEK)
- *GenerateRandom* - returns a random byte string
