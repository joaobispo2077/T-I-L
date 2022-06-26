# CodeBuild Security
- To access resources in your VPC, make sure you specify a VPC configuration for your CodeBuild
- Secrets in CodeBuild Security
  - Don't store them as plaintext in environment variables
  - Instead use:
    - Environment variables can reference parameters store
    - Environment variables can reference secrets manager (rotation)
