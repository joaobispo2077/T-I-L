# Why AWS X-Ray?

- Debugging in Production, the good old way:
  - Test locally
  - Add log statements everywhere
  - Re-deploy in production
- Log formats diffeer across applications using CloudWath and analytics is hard
- Debbuging monolith "easy", distributed services "hard"
- No common views of your entire architecture!

## Advantages
- Troubleshooting performance (bottlenecks)
- Understand dependecies in microservice architecture
- Pinpoint service issues
- Review request behavior
- Find errors and exceptions
- Answer common responses like
  - Are we meeting time SLA?
  - Where I am throttled?
- Identify users that are impacted

## Compatibility
- AWS Lambda
- Elastic Beanstalk
- ECS
- ELB
- API Gateway
- EC2 Instances or any application server (even on-premise)


## Leverages Tracing
- Tracing is an end to end way to following a "request"
- Eech component dealing with the request adds its own "trace"
- Tracing is made of segments (+ sub segments)
- Annotations can be added to traces to provide extra-information
- Ability to trace:
  - Every request
  - Sample request (as a % for example or a rate per minute)
- X-Ray security
 - IAM for authorization
 - KMS for encryption at rest

## How to enable it?

1. Your code must import the AWS X-RAY SDK
 - Very little code modification needed
 - The application SDK will then capture:
  - Calls to AWS Services
  - HTTP/HTTPS requests
  - Database Calls (MySql, PostgreSQL, DynamoDB)
  - Quees calls (SQS)
2. Install the X-ray daemon or enable X-RAY AWS Integration
  - In on premises or EC2, need to install x-ray daemon and run
  - X-Ray daemon works as low level UDP packet interceptor (Linux, Mac, Windows)
  - AWS Lambda/other AWS services already run the X-Ray daemon for you
  - Each application must have the IAM rights to write data to -Xray

## Use X-Ray Troubleshooting
- If x-ray is not working on EC2
  - Ensure the EC2 IAM Role has te proper permissions
  - Ensure the EC2 instance is running the X-RAY Daemon
- To enable on AWS Lambda
  - Ensure it has an IAM execution role with proper policy (AWSX-RayWriteOnlyAccess)
  - Ensure that X-RAY is imported in the code
