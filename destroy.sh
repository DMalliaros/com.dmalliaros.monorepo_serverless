#!/bin/bash

function remove_serverless() {
  echo "==> remove $(pwd)"
  serverless remove --region ${DEPLOY_REGION} --stage ${DEPLOY_STAGE} --app ${DEPLOY_APP}
}

function remove_cdk() {
    echo "==> remove $(pwd)"
    cdk destroy
}

export DEPLOY_APP="my-app"
export DEPLOY_REGION="eu-west-1"
export DEPLOY_STAGE="dev"

cd services/hello && remove_serverless && cd ../../

cd lib/layer && remove_serverless && cd ../../

cd resources/api && remove_serverless && cd ../../

cd resources/s3 && remove_cdk && cd ../../
