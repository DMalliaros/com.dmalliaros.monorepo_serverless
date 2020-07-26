#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { S3Stack } from '../lib/s3-stack';


const stage = process.env.DEPLOY_STAGE || "dev";
const appName = process.env.DEPLOY_APP || "my-app"
const region = process.env.DEPLOY_REGION || "eu-west-1"

const app = new cdk.App();
const service = "s3"

new S3Stack(app, `${appName}-${stage}-${region}-${service}`,{ 
    env: {  
      region: region
  },
  stage: stage,
  appName: appName
});
