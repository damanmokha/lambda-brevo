# Lambda-Brevo: Send Emails Using Brevo (SendinBlue) API

Lambda function to send emails using the Brevo (SendinBlue) API.

## Setup

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/lambda-brevo.git

   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```
   or
   ```
   yarn install
   ```
3. Install and set up the AWS CLI. If you haven't installed it yet, you can follow the official guide [here](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html)
   .

## AWS Configuration

1. Configure AWS CLI with your access credentials:

   ```
   aws configure
   ```

   It will ask for AWS Access Id & Secret key along with default region keep those handy.

   ### Create an IAM Role

   Create an IAM Role in AWS with the necessary permissions. The role should have full access to AWS Lambda. For detailed steps, you can follow the official guide [here](https://docs.aws.amazon.com/lambda/latest/dg/lambda-intro-execution-role.html).

## Publishing to Lambda Function

1. Create a ZIP file of the necessary files:
   ```
   zip -r brevo-lambda.zip node_modules/ index.js
   ```
2. Create a Lambda function:
   ```
   aws lambda create-function \
   --function-name BrevoLambdaFunction \
   --runtime nodejs14.x \
   --role YOUR_IAM_ROLE_WITH_LAMBDA_ACCESS_ARN \
   --handler index.handler \
   --zip-file fileb://brevo-lambda.zip
   ```

## Updating the Lambda Function

1. Update the Lambda function code by creating a new ZIP file:

   ```
   zip -r brevo-lambda.zip node_modules/ index.js
   ```

2. Update the Lambda function code:

   ```
   aws lambda update-function-code \
   --function-name BrevoLambdaFunction \
   --zip-file fileb://brevo-lambda.zip
   ```

## Setup Environment Variables in Lambda

1. Set up environment variables in the Lambda function:
   `BREVO_API_KEY: Your Brevo (SendinBlue) API key.`

## Lambda Function URL

Your Lambda function URL will be the endpoint for sending emails via the Lambda function using Brevo. This URL can be generated in configuration tab of your lambda function. Make sure to configure Function url for public access or enable authentication as needed.

## Sending Emails

```
POST https://your-api-gateway-url/your-resource
Content-Type: application/json

{
  "email": "recipient@email.com",
  "name": "John Doe",
  "content": "This is the email content."
}
```

Replace https://your-api-gateway-url/your-resource with the actual URL of your deployed API Gateway resource.

This completes the setup for your Lambda function to send emails using the Brevo (SendinBlue) API. Remember to secure your API and credentials appropriately and adjust configurations as needed for your specific use case.

`` Replace placeholders like `your-username`, `YOUR_IAM_ROLE_WITH_LAMBDA_ACCESS_ARN`, and update URLs and other specific details as needed. This `README.md` template should help you provide clear instructions to users on how to set up and use your Lambda function for sending emails using the Brevo (SendinBlue) API. ``
