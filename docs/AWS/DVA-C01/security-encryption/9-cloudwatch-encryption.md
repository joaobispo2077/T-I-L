# CloudWatch Logs - Encryption
- You can encrypt CloudWatch Logs with KMS Keys
- Encryption is enabled *at the log group level*, by associating a CMK with a log group, either when you create the log group or after it exists
- You cannot associate a CMK with a log group using the CloudWatch console
- You must use the CloudWatch Logs API:
  - `associate-kms-key`: If the log group already exists
  - `create-log-group`: If log group doesn't exist yet
