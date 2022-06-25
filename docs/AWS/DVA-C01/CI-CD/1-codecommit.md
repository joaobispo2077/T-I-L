# AWS CodeCommit

## Source control
- Version control is the ability to understand the various changes that happened to the code over time (and possibly roll back)
- All there are enabled by using a version controly system such as GIT
- A git repository can be synchronized on your computer, but it usually is uploaded on a central online repository.
- Benefits are:
  - Collaborate with other developers
  - Make sure the code is backed-up somewhere
  - Make sure it's fully viewable and auditable

## Why CodeCommit?
- Git repositories can be expensive
- Private git repositories
- No size limit on repositories (scale seamlessly)
- Fully managed, highly available
- Code only in AWS Cloud account, increased security and compliance
- Security (encrypted, access control)
- Integrated with henkins, AWS CodeBuild, and other CI Tools

## Security
- Interactions are done using GIT (standard)
- Authentication
  - SSH Keys - AWS users can configure SSH Keys in their IAM console
  - HTTPS - with AWS CLI Credential helper or Git Credentials for IAM user
- Authorization
  - IAM policies to manage users/roles permissions to repositories
- Encryption
  - Repositories are automatically encrypted at rest using AWS KMS
  - Encrypted in transit (can only use HTTPS or SSH - both secure)
- Cross-account Access
  - Do NOT share your SSH KEYs OR YOUR AWS credentials
  - Use an IAM ROLE in your AWS account and use AWS STS (AssumeRole API)

## Extra

Notifications rules with:
- SNS
- AWS Chatbot (Slack)

Trigger rules with:
- Lambda
- SNS
