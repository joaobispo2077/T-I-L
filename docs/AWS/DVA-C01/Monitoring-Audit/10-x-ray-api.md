# X-Ray Write APIs (used by the X-Ray daemon)

- `PutTraceSegments`: Uploads segment documents to AWS X-Ray
- `PutTelemtryRecords`: Used by the AWS X-Ray daemon to upload telemetry
  -  SegmentsReceivedCount, SegmentsRejectedCounts, BackendConnectionErrors
- `GetSamplingRules`: Retrieve all sampling rules (to know what/when to send)
- `GetSamplingTargets` & `GetSamplingStatisticSummaries`: advanced
- The X-Ray daemon needs to have an IAM policy authorizing the correct API calls to function correctly
