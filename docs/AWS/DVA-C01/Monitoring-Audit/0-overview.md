# Monitoring Overview
## Why Monitoring is Important?
- We know how to deploy applications, but we don't know how to monitor them. So we can't know if our applications are working as expected.
- our applications are deployed, and our users don't care how we dit it. But care is needed to ensure that our applications are working as expected.
  -  Application latency: will it increase over time?
  - Application outages: customer experience should not be degraded
  - Users contacting the IT department or complaining is not a good outcome
  - Troubleshooting and remediation
- Internal monitoring
  - Can we prevent issues before they happen?
  - Performance and Cost
  - Trends (scaling patterns)
  - Learning and Improvement


## Monitoring tools
- AWS CloudWatch
  - Metrics: Collect and track key metrics.
  - Logs: Collect, monitor, analyze and store log files
  - Events: Send notifications when certain events happen in your AWS
  - Alarms: React in real-time to metrics/events
- AWS X-Ray
  - Troubleshooting application performance and erros
  - Distributed tracing of microservices
- AWS CloudTrail
  - Internal monitoring of API calls being made
  - Audit changes to AWS Resources by your users
