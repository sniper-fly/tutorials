#!/bin/bash

aws cloudformation package \
  --template-file template.yaml \
  --s3-bucket hands-on-serverless-rnakai \
  --output-template-file packaged-template.yaml

echo ========================================

aws cloudformation deploy \
  --template-file ./packaged-template.yaml \
  --stack-name hands-on-serverless-2 \
  --capabilities CAPABILITY_IAM
