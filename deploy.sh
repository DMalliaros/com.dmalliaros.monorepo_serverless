#!/usr/bin/env bash

function install_and_package() {
    echo "==> yarn build $(pwd)"
    yarn build
    echo "==> serverless package $(pwd)"
    # serverless package --region ${DEPLOY_REGION} --stage ${DEPLOY_STAGE} --app ${DEPLOY_APP}
    serverless deploy --region ${DEPLOY_REGION} --stage ${DEPLOY_STAGE} --app ${DEPLOY_APP}
}

function install_cdk() {
    yarn install
    yarn run build && cdk synth
    cdk deploy
}

export DEPLOY_APP="my-app"
export DEPLOY_REGION="eu-west-1"
export DEPLOY_STAGE="dev"

cd resources/s3 && install_cdk && cd ../../

cd resources/api && install_and_package && cd ../../

cd lib/layer && install_and_package && cd ../../

cd services/hello && install_and_package && cd ../../


