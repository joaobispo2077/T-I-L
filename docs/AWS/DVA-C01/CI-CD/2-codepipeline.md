# AWS CodePipeline

- Visual Workflow to orchestrate your CI/CD
- *Source* - CodeCommit, S3, GitHub, Bitbucket, etc.
- *Build* - CodeBuild, Jenkins, Spinnaker, etc.
- *Test* - CodeBuild, AWS Device Farm, etc.
- *Deploy* - CodeDeploy, Elastic Beanstalk, Cloudformation, ECS, S3, etc.
- Consists of stages:
  - Each stage can have sequential actions and/or parallel, actions
  - Example: Build => Test => Deploy => Load Testing => ...
  - Manual approval can be defined at any stage

## Artifacts
- Each pipeline stage can create artifacts
- Artifacts stored in an S3 bucket and passed on to the next stage
- Concrete example:
  - Developer push code to CodeCommit
  - CodePipeline checks the code and stores the results in an S3 bucket
  - CodePipeline passes the results to the next stage in CodeBuild
  - CodeBuild run build and stores the results in an S3 bucket
  - CodePipeline passes the results to the next stage in CodeDeploy
  - CodeDeploy deploys the code

## Troubleshooting
- For CodePipeline/ Action/Stage Execution stage changes
- Use *CloudWatch Events (Amazon EventBridge)*. Example:
  - You can create events for failed pipelines
  - You can create events for cancelled stages
- If CodePipeline fails a stage, your pipeline stops, and you can get information in the console
- If pipeline can't perform an action, make surte the "IAM Service Role" attached does have enough IAM permissions (IAM Policy)
- AWS CloudTrail can be used to audit AWS API calls
