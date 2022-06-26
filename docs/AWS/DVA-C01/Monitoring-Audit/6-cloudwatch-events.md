# CloudWatch Events
- Event Pattern: Intercept events from AWS Services (sources)
  - Example sources: EC2 Instance Start, CodeBuild Failure, S3, Trusted Advisor
  - Can intercept any API call with CloudTrail integration
- Schedule or Cron (example: create an event every 4 hours)
- A JSON payload is created from the event and passed to a target
  - *Compute*: Lambda, Batch, ECS Task
  - *Integration*: SQS, SNS, Kinesis Data Streams, Kinesis Data Firehose
  - *Orchestration*: Step Functions, CodePipeline, CodeBuild
  - *Maintenance*: SSM, EC2 Actions
