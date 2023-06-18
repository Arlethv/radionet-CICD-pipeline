
STACK_NAME="radionet-stack"
TEMPLATE_FILE="despliegue.yaml"
S3_BUCKET="radionet-bucket"


# Empaqueta y despliega la aplicación utilizando AWS SAM CLI
sam package \
  --template-file $TEMPLATE_FILE \
  --s3-bucket $S3_BUCKET \
  --output-template-file sam.yaml \
  --region us-east-2

sam deploy \
  --stack-name $STACK_NAME \
  --template-file sam.yaml \
  --capabilities CAPABILITY_IAM \
  --region us-east-2
