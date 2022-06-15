# EBS Volume Types

- EBS Volumes come in 6 types.
  - gp2/gp3 (SSD): General Purpose SSD.
  - io1/i02 (SSD): Highest-performance SSD.
  - stI (HDD): Low cost HDD.
  - sc1 (HDD): Lowest cost HDD.

- EBS Volumes are characterized in Size/IOPS/Throughput
  - When in doubt always consult the AWS documentation [link](https://aws.amazon.com/ebs/details/).
  - Only gp2/gp3 and io1/i02 can be used as boot volumes (where OS is running).
