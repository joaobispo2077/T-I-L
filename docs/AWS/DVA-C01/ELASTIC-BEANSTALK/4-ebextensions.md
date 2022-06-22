# Elastic Beanstalk Extensions

- A zip file containing our code must be deployed to Elastic Beanstalk
- All the parameters set in the UI can be configured with code using files
- Requirements:
  - In the .ebextensions/ directory in the root of source code
  - YAML /JSON format
  - .config extensions (example: logging.config)
  - Able to modify some default settings using: option_settings
  - Ability to add resources such as RDS, ElastiCache, DynamoDB, etc...

- Resources managed by .ebextensions get deleted if the environment goes away.
