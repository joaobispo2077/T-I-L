# Storage
A reliable, scalable, and secure place for data.

Services:
- Amazon Elastic Block Store (Amazon EBS): Persistent block-level storage for Amazon EC2 instances.
- Amazon Simple Storage Service (Amazon S3): Durable, scalable, object-based storage for the web.
  - Amazon S3 Glacier: Data archiving and backup.
- AWS Storage Gateway: Integrate cloud storage with on-site workloads.
- Amazon Elastic File System (Amazon EFS): File storage for Amazon EC2 instances.
- Amazon FSx: File storage for widely-used file systems.

## Amazon Elastic Block Store (Amazon EBS)
- *Network-attached block storage* for Amazon EC2 instances.
- Persist independently from instance.
- Used *like* a physical hard drive.
- Automatically replicated accross Availability Zones.
- Attached to any instance in the same Availability Zone.
- One EBS Volume to one EC2 instance at time, except in case of using multi-attach.
- One EC2 instance can use many EBS Volumes.
- EBS Volumes can retain data after EC2 instance termination.
- Allow point-in-time snapshots to s3 GiB increments.

## Amazon Simple Storage Service (Amazon S3)
Infinite scalability, greater analysis, and faster data retrieval.
- Object storage service.
  - It stores data as objects in resources called buckets.
  - Objects can be up to 5 terabytes in size.
- 99.999999999% durability. Amazon S3 is designed to deliver 11 nines of durability, wich means that for every 10 million objects stored,  customers can expect o incur an average loss of a single object once every 10,000 years.
- 99.99% availability.

### Common S3 use cases:
- Data lakes
- Backup and storage
- Application hosting
- Media hosting
- Software delivery

### Storage classes on Amazon S3

- Amazon S3 Standard
  - Inteeded for frequently accessed data.
    - Low latency, high throughput
  - Good choice for general purposes.
- Amazin S3 Standard-Infrequent Access
  - Inteeded for accessed less frequently, but requires rapid access when needed.
  - Similar to Amazon S3 Standard, but with a lower per-gigabyte storage price and per-gigabyte retrieval fee.
  - Good choice for backups.
- Amazon S3 One Zone-IA
  - Inteeded for accessed less frequently.
  - Stores data in a singles Availability Zone, other storage classess use a minimum of three Availability Zones. Resulting in 99.5% availability.
  - It costs less than S3 Standard IA.
  - Ideal for customers that dont need of availability or resilience.
  - Good choice for store second backup or easily recreable data.
- Amazon S3 Glacier
  - Inteeded for infrequent accessed data.
  - Secure, durable and low-cost storage classes.
  - Provides three retrieval options:
    - Amazon S3 Instant Retrieval
    - Amazon S3 Glacier Flexible Retrieval
    - Amazon S3 Glacier Deep Archive
- Also exists S3 Intelligente Tiering
  - Automatically moves objects between tiers based on access patterns.

Summarize:
Ebs provides disks for my instances that will be automatically replicated upon creation.
S3 is great for bulk storage though, images, videos, code, and other data. And have great high availability, durability and speed of access.
S3 has tier based on how frequently the data is accessed and we can offer Amazon Glacier as a cost-effective alternative to things like long-term backup storage.
