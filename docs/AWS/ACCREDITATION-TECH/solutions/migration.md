# Migration Strategies

## The seven R's

Envolving migrating workloads to the AWS Cloud:
- Rehost
- Replatform
- Relocate
- Refactor

Other options to address current on-premises architectures:
- Retire
- Retain
- Repurchase


### Rehost: lift and shift workloads to the AWS Cloud
- Recreating the on-premises network, only hosted on AWS.
- Automating with tools such as AWS Application Migration Service.
- Easier to optimize and re-architect applications after migration.

### Relocate: Hypervisor-level lift and shift

- Moves infrastructure without purchasing new hardware, rewriting applications or modifying existing operations.
- Migration specific to VMware Cloud on AWS.
- Examples:
  	- Migrate hypervisor host Oracle database to VMware CLoud on AWS.

### Replatform: lift, tinker, and shift
- Retaining the core architecture.
- Making targeted AWS Cloud optimization.
- Examples:
  	- Migrating database to Amazon RDS.
    - Migrating applications to Amazon Elastic Beanstalk

### Refactor: modernize
- Re-imagining how the application is architected and developed.
- Using Cloud-native features.

### Other strategies
- Retire
  - Shutting off non-useful applications.
  - Reducing spend, management, and security.
- Retain/Revisit
  - Keeping certain applications on-premises.
- Repurchase
  - Moving workflows to software as a service (SaaS).
