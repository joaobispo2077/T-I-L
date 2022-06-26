# SSM Parameter Store vs Secrets Manager
- Secrets Manager:
  - More expensive
  - Automatic toration of secrets with AWS Lambda
  - Lambda function is provided for tight integration with RDS, Redshift, DocumentDB
  - KMS encryption is mandatory
  - Can integration with CLoudFormation

- SSM Paramter Store:
  - cheaper
  - simple API
  - No secret rotation (can enable rotation using Lambda triggered by CloudWatch Events)
  - KMS encryption is optional
  - Can integration with CloudFormation
  - Can pull Secrets Manager secret using the SSM Parameter Store API
