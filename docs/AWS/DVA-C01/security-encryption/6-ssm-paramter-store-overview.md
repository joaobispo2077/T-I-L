# SSM Parameter Store
- Secure storage for configuration and secrets
- Optional Seamless Encryption using KMS
- Serverless, scalable, durable, easy SDK
- Version tracking of configurations / secrets
- Configuration management using path & IAM
- Notifications with CloudWatch Events
- Integration with CloudFormation

## SSM Parameter Store Hierarchy

- /my-department
  - /my-app
    - /dev
      - db-url
      - db-password
    - /prod
      - db-url
      - db-password
  - /other-app
    - /test
      - db-url
      - db-password
- /other-departmanet
  - ...

## Parameters Policies (for advanced paramters, paid tier)
- Allow to assign a TTL (Time to live) to a parameter (expration date) to force updating or deleting sensitive data such as passwords
- Can assign multiple policies at a time
- Types:
  - Expiration to delete a parameter
  - ExpirationNotification - CloudWatch Events before or after time unit
  - NoChangeNotification - CloudWatch Events before or after time unit

Examples:

Expiration

```json
{
  "Type": "Expiration",
  "Version": "1.0",
  "Attributes": {
    "Timestamp": "2020-01-01T00:00:00Z"
  }
}
```

ExpirationNotification

```json
{
  "Type": "ExpirationNotification",
  "Version": "1.0",
  "Attributes": {
    "Before": "1",
    "Unit": "Days"
  }
}
```

ExpirationNotification

```json
{
  "Type": "NoChangeNotification",
  "Version": "1.0",
  "Attributes": {
    "After": "10",
    "Unit": "Days"
  }
}
```

