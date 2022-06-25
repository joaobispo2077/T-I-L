# AWS CodeDeploy

- We want to deploy our application automatically to many EC2 instanfces.
- These EC2 instances are not managed by Elastic Beanstalk
- There are several ways to handle deployments using open-source tools (Ansible, Terraform, Chef, Puppet)
- We can use the managed service AWS CodeDeploy

## Seteps to Make it Work

1. Each EC2 instace/on-premises server *must be running the CodeDeploy Agent*
2. The agent is continuously polling AWS CodeDeploy for work to do
3. Application + appspec.yml is pulled from GitHub or S3
4. EC2 instances will run the deployment instructions in appspec.yml
5. CodeDeploy Agent will report of success/failure of the deployment

## Primary Components

- *Application* - A unique name functions as a container (revision, deployment configuration)
- *Compute platform* - EC2/On-premises servers, AWS Lambda or Amazon ECS
- *Deployment Configuration* - A set of deployment rules for success/failure
  - EC2/On-premises - specify the minimum number of healthy instances for the deployment
  - AWS Lambda or Amazon ECS - Specify how traffic is routed to your updated versions
- *Deployment Group* - Group of tagged EC2 instances (allows to deploy, or dev, test, prod)
- *Deployment Type* - Method used to deploy the application to a Deployment Group
  - *In-place Deployment* - Supports EC2/On-premises
  - *Blue/Green Deployment* - Supports EC2 instances only, AWS Lambda and Amazon ECS
- *IAM Instance Profile* - Give EC2 instances the permissions to access both S3/Github
- *Application Revision* - Application code + *appspec.yml*
- *Service Role* - An IAM Role for CodeDeploy to perform operations on EC2 instances, ASGs, ELBs
- *Target Revision* - The most recent revision that you want to deploy to a deployment group


## appspec.yml
- *Files* - how to source and copy from S3/Github to filesystem
  - source
  - destination
- *Hooks* - set of instructions to do to deploy the new version (hooks can have timeouts), the order is:
  1. ApplicationStop
  2. DownloadBundle
  3. BeforeInstall
  4. Install
  5. AfterInstall
  6. ApplicationStart
  7. ValidateService
  8. BeforeAllowTraffic
  9. AllowTraffic
  10. AfterAllowTraffic

```yml
version: 0.0
os: linux

files:
  - source: Config/config.txt
    destination: /webapps/Config
  - source: source
    destination: /webapps/app

Hooks:
  - BeforeInstall:
    - location: Scripts/before-install.sh
  - AfterInstall:
    - location: Scripts/after-install.sh
      timeout: 180
  - ApplicationStart:
    - location: Scripts/application-start.sh
      timeout: 3600
  - ValidateService:
    - location: Scripts/validate-service.sh
      timeout: 3600
```

## Deployment Configuration
- Configurations:
   - *One At A Time* - one EC2 instance at a time, if one instance fails then deployment stops
  - *Half at A Time* - 50%
  - *All At Once* - quick but no healthy host, downtime, Good for dev
  - *Custom* - Min healthy host = 75%
- Failures:
  - EC2 instnaces stay in "Failed" state
  - New deployments will first be deployed to failed instances
  - To roolbak, redeploy old deployment or enable automated rollback for failures
- Deployment Groups:
  - A set of tagged EC2 instances
  - Directly to an ASG
  - Mix of ASG/Tags so you can build deployments segments
  - Customization in scripts with DEPLOYMENT_GROUP_NAME environment variables

## In-place deployment

works as halt at time, 50% of instances are up at a time, if one instance fails then deployment stops.

## Blue/Green Deployment

When have an Auto Scalling Group and Application Load Balancer, a new Auto Scalling Group is created and the old one is deleted.
