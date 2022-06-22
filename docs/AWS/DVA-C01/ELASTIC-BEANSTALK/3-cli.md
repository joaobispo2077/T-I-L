# CLI
- We can isntall an additional CLI called the "ELB CLI" wich makes working with beanstalk from the CLI easier.
- Basic commands are:
  - eb create
  - eb status
  - etc...
- Its helpful for your automated deployment pipelines!

## Elastic Beanstalk deployment process

- Descibe dependencies (requirements.txt for Python, package.sjon for Node.js)
- Package code as zip
- Console: upload zip file (creates new app version) and then deploy
- CLI:  create new app version using CLI (uploads zip), and then deploy
- Elastic beanstalk will deploy the zip on each EC2 instance, resolve dependencies and start the application.
