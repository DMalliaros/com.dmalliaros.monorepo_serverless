import * as cdk from '@aws-cdk/core';
import s3 = require('@aws-cdk/aws-s3');
import { Bucket, BucketEncryption } from '@aws-cdk/aws-s3'

interface MultiStackProps extends cdk.StackProps {
  stage?: String;
  appName?: String;
}

export class S3Stack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: MultiStackProps) {
    super(scope, id, props);

    const infrastructureBucketName = `${props?.appName}-${props?.stage}-${props?.env?.region}-infrastructure`
    
    const infrastructureBucket = new s3.Bucket(this, infrastructureBucketName, {
      bucketName: infrastructureBucketName,
      encryption: BucketEncryption.S3_MANAGED,
      versioned: true});
      
    new cdk.CfnOutput(this, 'infrastructureBucketName', {
        value: infrastructureBucket.bucketName
      });
  }
}
