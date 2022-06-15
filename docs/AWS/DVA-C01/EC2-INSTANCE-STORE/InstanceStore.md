# EC2 Instance Store - Epheral Storage
- In comparison EBS Volumes are *network drives* with a good but "limited" performance.
- If you need a high-performance hardware disk, use EC2 Instance Store.
- Better I/O performance.
- EC2 Instance Store lose their storage if they're stopped (ephemeral).
- Good for buffer/cache/scratch data/ temporary content.
- Risk of data loss if hardware fails.
- Backups and Replication are your responsibility.

