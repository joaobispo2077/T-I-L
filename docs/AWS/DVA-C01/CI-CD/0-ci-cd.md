# AWS CI/CD Introduction


- We would like our code "in a repository" (source code control) and have it deployed onto AWS
  - Automatically
  - The right way
  - Makin surte it's tested before beind deployed
  - With possibility to go into different stages (dev, test, staging, prod)
  - With manual approval where needed

Main services:
 - AWS CodeCommit - storing our code
 - AWS CodePipeline - automating our pipeline from code to Elastic Beanstalk
 - AWS CodeBuild - building and testing our code
 - AWS CodeDeploy - deploying the code to EC2 instances (not Elastic Beanstalk)
 - AWS CodeStar - manage software development activies in one place
 - AWS CodeArtifact - store, publish and share software packages
 - AWS CodeGuru - automated code reviews using Machine Learning

## What is CI?

CI stands for Continous Integration.

- Developers push the code to a code repository often (e.g GitHub/Gitlab/Bitbucket/AWS CodeCommit)
- A testing/build server checks the code as soon as it's pushed (CodeBuild, Jenkins CI)
- The developers gets feedback about the tests and checks that have passed / failed
- Find bugs early, then fix bugs
- Deliver faster as the code is tested
- Deploy often
- Happier developers, as they're unblocked


## What is CD?

CD stands for Continous Delivery.

- Ensures that the software can be released reliably whenever needed
- Ensures deployments happen often and are quick
- Shift away from "one release every 3 months" to "5 releases a day"
- That usually means automated deployment (e.g CodeDeploy, Jenkins CD, Spinnaker)

## Tech Stack for CI/CD in AWS
