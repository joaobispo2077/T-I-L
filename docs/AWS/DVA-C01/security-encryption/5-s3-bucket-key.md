# S3 Bucket Key for SSE-KMS encryption
- New settings to decrease
  - Number of API calls made to KMS from S3 by 99%
  - Costs of overall KMS encryption with S3 by 99%
- This leverages data keys
  - a "S3 Bucket Key" is generated
  - That key is used to encrypt KMS objects with new data keys
- You will see less KMS CloudTrail events in CloudTrail
