# AMI, Amazon Machine Image
- It is a customization of an EC2 instance.
  - Allow to have your own software, configuration, operating system, monitoring
  - Faster boot/configuration time because all of your software is pre-packaged.
-  Can be built for a specific region and can be copied across regions.
- You can launch EC2 instances from:
  - A Public AMI: AWS provided.
  - Your own AMI: You make and maintain them yourself.
  - An AWS Marketplace AMI: You can purchase from AWS Marketplace.

## AMI Process (from an EC2 instnafce)
- Start an EC2 instance and customize it.
- Stop the instance (for data integrity).
- Build an AMI - this will also create EBS snapshots.
- Launchinstances from other AMIs.
