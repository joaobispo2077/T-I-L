# Elastic Beanstalk Under the Hood
- under the hood, E lastic beanstalk relies on CloudFormation
- CloudFormation is used to provision other AWS services (we'll see later)
- Use case: you can define CloudFormation resources in your `.ebextensions` directory to provision ElastiCache, an S3 Bucket and etc...
