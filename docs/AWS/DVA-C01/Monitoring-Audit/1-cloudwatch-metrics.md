# AWS Cloudwatch Metrics

- CloudWatch provides metrics for every services in AWS
- *Metric* is a variable to monitor (CPU Utilization, NetworkIn, etc)
- Metrics belong to a *namespaces*
- *Dimension* is an attribute of a metric (instance id, environment, etc)
- Up to 10 dimensions per metric
- Metrics have *timestamp*
- Can create CloudWatch dashboards of metrics

## EC2 Detailed Monitoring
- EC2 instance metrics have metrics "every 5 minutes"
- With detailed monitoring (for a cost), you get data "every 1 minute"
- Use detailed monitoring if you want to scale faster for your Auto Scaling Group
- The AWS Free Tier allows us to have 10 detailed monitoring metrics
- Note: EC2 Memory usage is by default not pushed (must be pushed from inside the instance as a custom metric)
