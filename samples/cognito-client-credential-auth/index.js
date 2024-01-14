require('dotenv').config();
const crypto = require('crypto');
const AWS = require('aws-sdk');

const configs = {
  AWS_REGION: process.env.AWS_REGION,
  COGNITO_USER_POOL_CLIENT_ID: process.env.COGNITO_USER_POOL_CLIENT_ID,
  COGNITO_USER_POOL_SECRET_ID: process.env.COGNITO_USER_POOL_SECRET_ID,
  COGNITO_AUTH_FLOW: "USER_PASSWORD_AUTH",
  COGNITO_USER_NAME: process.env.COGNITO_USER_NAME,
  COGNITO_USER_PASSWORD: process.env.COGNITO_USER_PASSWORD
};

console.log(`CONFIGS: ${JSON.stringify(configs)}`);

function generateSecretHash(username, clientId, clientSecret) {
  return crypto.createHmac('SHA256', clientSecret)
    .update(username + clientId)
    .digest('base64');
}

AWS.config.update({ region: configs.AWS_REGION });

const cognito = new AWS.CognitoIdentityServiceProvider();

const secretHash = generateSecretHash(
  configs.COGNITO_USER_NAME,
  configs.COGNITO_USER_POOL_CLIENT_ID,
  configs.COGNITO_USER_POOL_SECRET_ID
);

console.log(`SECRET HASH: ${secretHash}`);

const params = {
  AuthFlow: configs.COGNITO_AUTH_FLOW,
  ClientId: configs.COGNITO_USER_POOL_CLIENT_ID,
  AuthParameters: {
    USERNAME: configs.COGNITO_USER_NAME,
    PASSWORD: configs.COGNITO_USER_PASSWORD,
    SECRET_HASH: secretHash
  }
};

cognito.initiateAuth(params, function (err, data) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
