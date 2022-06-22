# Elastic beanstalk deployment modes

Initial, we have two differents cases:
- Single instance (Great for development)
- High Availability with Load Balancer (Great for production)

## Beanstalk Deployment Options for Updates

- All at once (deploy all in one go): fastest, but instaces aren't available to serve traffic for a bit (downtime).
- Rolling: update a few instances at a time (bucket), and then move onto the next bucket once the first bucket is healthy.
- Rolling with additional batches: like rolling, but spoins up new instances to move the batch (so that the old application is still available).
- Immutable: spins up new instances in a new ASG, deploys version to these instances, and then swaps all the instances when everything is healthy.

### All at once
- Fatest deployment
- Application has downtime
- Great for quick iterations in development environment
- No additional cost


### Rolling
- Application is running below capcity
- Can set the bucket size
- Application is running both versions simultaneously
- No additional cost
- Long deployment


### Rolling with additional batches
- Application is running at capacity and overcapacity sometimes
- Can set the bucket size
- Application is running both versions simultaneously
- Small additional cost
- Additional batch is removed at the end of the deployment
- Longer deployment
- Good for production

### Immutable
- Zero downtime
- New code is deployed to new instances on a temporary ASG
- High cost, double capacity (Full ASG)
- Longest deployment
- Quick rollback in case of failures (just terminate new ASG)
- Great for production

## Blue / Green deployment

- Not a "direct feature" of Elastic Beanstalk
- Zero downtime and realease facility
- Create a new "stage" environment and deploy v2 there
- The new environment (GREEN) can be validated independently and roll back if issues
- Route 53 can be setup usin weighted policies to redirect a little bit of traffic to the stage environment
- Using elastic beanstalk "swap URLs"  when done with the environment test

## Canary deployment / Traffic Splitting
- Canary Testing
- New application version is deployed to a temporary ASG with the same capacity
- Application Load Balancer, small % of traffic is sent to the temporary ASG for a configurable amount of time
- Deployment health is monitored
- If there's a deployment failure, this trigger an automated rollback (very quick)
- No application downtime
- New instances are migrated from the temporary to the original ASG
- Old application version is then terminated

## Comparision table
https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.deploy-existing-version.html

https://docs.aws.amazon.com/whitepapers/latest/introduction-devops-aws/aeb-deployment-strategies.html
extra:
