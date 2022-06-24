# Elastic Beanstalk Clonig
- Clone an environment with exact same configuration
- Useful for deploying a "test" version of your application
- All resources and configuration are preserved:
  - Load Balancer type and configuration
  - RDS database type (but the data is not preserved)
  - Environment variables
- After cloning an environment, you can change settings
