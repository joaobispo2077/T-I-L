# CloudWatch Alarms
- Alarms are used to trigger notifications for any metric
- Various options (sampling, %, max, min, etc)
- Alarm States:
  - OK
  - INSUFFICIENT_DATA
  - ALARM
- Period
  - Length of time in seconds to evaluate the metric
  - High resolution custom metrics: 10 / 30 or multiple of 60 sec

## Targets

- Stop, TERMINATE, Reboot, or REcover an EC2 Instance
- Trigger Auto Scaling ACTION
- Send notification to SNS (from wich you can do pretty much anything)

## EC2 Instance Recovery
- Status check
  - Instance status - check the EC2 VM
  - System status - check the underlying hardware
- Recovery: same private, public, elastic IP, metadata, plac

## Good to know
- Alarms can be created based on the CloudWatch Logs Metrics Filters
- To test alarms and notifications, set the alarm state to Alarm using cli `set-alarm-state`
