# AWS CodeBuild

- *Source* - CodeCommit, S3, GitHub, Bitbucket, etc
- *Build Instructions* - Code file ***buildspec.yml** at root or insert manually in console
- *Output logs* - can be stored in Amazon S3 & CloudWatcj Logs
- Use CloudWatch Metrics to monitor build statistics
- Use CloudWatch Events to detect failed builds and trigger notifications
- Use CloudWatch Alarms to notify if you need "thresholds" for failures

- Build Projects can be defined within CodePipeline or CodeBuild
- You can cache files in S3 bucket to speed up builds

## Supported Environments

- Java
- Ruby
- Python
- Go
- Node.js
- Android
- .NET Core
- PHP
- Docker - extend any environment you like

## How it Works


## buildspec.yml
File must be at the root of your code.

- env - define environment variables
  - variables - plain text variables
  - parameter-store - variables stored in SSM Parameter Store (like api integration url)
  - secrets-manager - variables stored in AWS Secrets Manager (like database password)
- phases - specify commands to run:
  - install - install dependencies you may need for build
  - pre_build - final commands to execute before build
  - build - actual build commands
  - post_build - finishings touches (e.g. zip output)
- artifacts - what to upload to S3 (encrypted with KMS)
- cache - files to cache (usually dependencies) to S3 for future build speed up

```yml
version: 0.2

run-as: Linux-user-name

env:
  shell: shell-tag
  variables:
    key: "value"
  parameter-store:
    key: "value"
  exported-variables:
    - variable
  secrets-manager:
    key: secret-id:json-key:version-stage:version-id
  git-credential-helper: no | yes

proxy:
  upload-artifacts: no | yes
  logs: no | yes

batch:
  fast-fail: false | true
  # build-list:
  # build-matrix:
  # build-graph:

phases:
  install:
    run-as: Linux-user-name
    on-failure: ABORT | CONTINUE
    runtime-versions:
      runtime: version
    commands:
      - command
    finally:
      - command
  pre_build:
    commands:
      - command
  build:
    commands:
      - command
  post_build:
      - command
reports:
  report-group-name-or-arn:
    files:
      - location
      - location
    base-directory: location
    discard-paths: no | yes
    file-format: report-format
artifacts:
  files:
    - location
cache:
  paths:
    - path

```
## Local build

- In case of need of deep troubleshooting beyond logs
- You can run CodeBuild locally on your desktop (after installing Docker)
- For this, leverage the CodeBuild Agent

## Inside VPC

- By default, your CodeBuild containers are launched outside your VPC
  - It cannota access resources in a VPC

- You can specify a VPC configuration:
  - VPC ID
  - Subnet IDs
  - Security Group IDs
- Then your build can access resources in your VPC (e.g RDS, ElastiCache, EC2, ALB...)
- Use Cases: integrations tests, data query, internal load balancers
