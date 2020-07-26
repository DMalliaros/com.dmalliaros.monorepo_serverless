import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import S3 = require('../lib/s3-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new S3.S3Stack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
