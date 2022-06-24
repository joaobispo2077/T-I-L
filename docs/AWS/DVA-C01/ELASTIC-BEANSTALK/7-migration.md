# Elastic beanstalk migration: Load Balancer
 - After creating an Elastic Beanstalk environment, you cannot change the Elastic Load Balancer type (only configuration)
 - To migrate:
  1. Create a new environment with the same configuration except Load balancer (can't clone)
  2. deploy your application onto the new environment
  3. perform a CNAME swap or Route 53 update

## RDS with Elastic Beanstalk
- RDS CAN BE PROVISIONED WITH BEANSTALK, wich is great for dev/test
- This is not great for production as the databse lifecycle is tied to the beanstalk environment lifecycle.
- The best for production is to separately create an RDS database and provide our EB application with the connection string.

### Decouple RDS from Elastic Beanstalk
1. Create a snapshot of RDS DB (as a safeguard)
2. Go to the RDS console and protect the RDS database from deletion
3. Create a new Elastic Beanstalk environment without RDS, point your application to existing RDS.
4. Perform a CNAME swap (blue/green) or Route 53 update, confirm working
5. Terminate the old environment (RDS won't be deleted)
6. Delete cloudformation stack (in DELETE_FAILED  state)
