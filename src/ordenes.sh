#AWS SAM para poder ejecutar las órdenes desde un archivo .sh
STACK_NAME="radionet-stack"
TEMPLATE_FILE="despliegue.yaml"
S3_BUCKET="radionet-bucket"
CODE_BUCKET="radionet-bucket"
CODE_KEY="lambda.js.zip"

# Empaqueta y despliega la aplicación utilizando AWS SAM CLI
sam package \
  --template-file $TEMPLATE_FILE \
  --s3-bucket $S3_BUCKET \
   --s3-prefix code \
  --output-template-file sam.yaml \
  --region us-east-2

sam deploy \
  --stack-name $STACK_NAME \
  --template-file sam.yaml \
  --s3-bucket $S3_BUCKET \
  --s3-prefix code \
  --capabilities CAPABILITY_IAM \
  --region us-east-2 \
  --parameter-overrides CodeBucket=$CODE_BUCKET CodeKey=$CODE_KEY


#Espera a que la actualización del stack se complete
aws cloudformation wait stack-update-complete --stack-name $STACK_NAME

# Obtiene las salidas del stack
aws cloudformation describe-stacks --stack-name $STACK_NAME --query "Stacks[0].Outputs"