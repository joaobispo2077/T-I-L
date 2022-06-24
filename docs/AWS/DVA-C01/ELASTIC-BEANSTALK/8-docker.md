# Elastic Beanstalk - Docker


## Elastic Beanstalk -  Single Docker Container

- Run your application as a single docker container
- Either provide:
  - Dockerfile: Elastic Beanstalk will build and run the Docker container
  - Dockerrun.aws.json (v1) - Describe where *already built* docker image is:
    - Image
    - Ports
    - Volumes
    - Loggin
    - Etc...
- Beanstalk in Single Docker Container does not use ECS


## Elastic Beanstalk -  Multi Docker Container
- Multi Docker helps run multiple containers per EC2 instance in EB

- This will create for you:
  - ECS Cluster
  - EC2 instances, configured to use the ECS Cluster
  - Load Balancer (in high availability mode)
  - Task definitions and execution
- Requires a config Dockerrun.aws.json (v2) at the root of source code
- Dockerrun.aws.json is used to generate the ECS task definition
- Your docker images must be pre-built and stored in ECR or Dockerhub for example
