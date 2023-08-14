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
