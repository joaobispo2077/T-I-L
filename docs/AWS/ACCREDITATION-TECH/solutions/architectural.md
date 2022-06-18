# Cloud Architecute Best Practices

1. Design for failure and nothing fails
  - Avoid points of failure
  - Multiple Instances
  - Multiple Available Zones
  - Separate single server into multiple tiered application
  - For Amazon RDS, use Multi-AZ feature

2. Build security in every layer
  - Encrypt Data at rrest and in transit
  - Enforce of least privilege in IAM
  - Implement both Security Groups and Network Access Control Lists (NACL)
  - Consider advanced security features and services such as Amazon Inspector, Amazon GuardDuty and AWS Shield.

3. Leverage different storage options
  - Move static web assets to Amazon S3
  - Use Amazon CloudFront to serve globally
  - Store session state in DynamoDB
  - Use ElastiCache between hosts and databases

4. Implement elasticity
  - Implement Auto Scaling Policies
  - Architect resiliency to reboot and relaunch
  - Leverage managed services like Amazon S3 and Amazon DynamoDB

5. Think parallel
  - Scale horizontally, not vertically
  - Decouple compute from session/state
  - Use Elastic Load Balancing
  - Righ-size your infrastructure

6. Loose coupling sets you free
  - Insteead of a single, ordered workflow, use multiple queues
  - Use Amazon Simple Queue Service and Simple Notification Service (SQS and SNS)
  - Leverage existing services, this helps you with email, queues, transconding, search, database, monitoring, metrics and etc

7. Don't fear constraints
  - Rethink traditional constraints
  - Need more RAM?
  - Better IPOS for Database?
  - Response to failure?

## The AWS Well-Architected Framework

A framework for ensuring infrastructure are:
- Secure
- High-performing
- Resilient
- Efficient
- Sustainable

Practices developed through reviewing customer's architectures on AWS.

# The six pillars
The framework is based on:

- Operational Excellence
Focuses on running and monitoring systems to deliver business value and continually improving processs and procedures.


- Security
Focuses on protecting information.

- Reliability
Focuses on the ability to prevent and quickly recover from failures.

- Performance Efficiency
Focuses on using IT and computing resources efficiently.

- Cost Optimization
Focuses on avoiding unneeded costs.
AWS has identified four key best practices of cost optimization:

Rightsizing instances
Rightsizing is the process of reviewing deployed resources and seeking opportunities to downsize when possible. For example, if an application instance is consistently underutilizing its RAM and CPU, switching that to a smaller instance can offer significant savings while maintaining the same performance.

Increasing application elasticity
An example is using auto scaling to ensure that the correct number of instances are available to handle the workload of an application. Scale out during high demand and scale in during low demand.

Choosing the right pricing model
An example is using Reserved Instances for workloads that need to run most or all the time, such as production environments. This can have a significant impact on savings compared to on-demand; in some cases, up to 75 percent.

Optimizing storage
An example is the S3 Intelligent-Tiering storage class, which is designed to optimize costs by automatically moving data to the most cost-effective storage tier.

- Sustainability
Focuses on minimizing the environmental impacts of running cloud workloads.

## The AWS Cloud Adoption Framework (AWS CAF)

AWS CAF provides advice to organizations to enable a smooth migration to AWS .
