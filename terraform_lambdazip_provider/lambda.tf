data "lambdazip_files_sha256" "triggers" {
  files = ["lambda/src/*.ts", "lambda/*.json"]
}

resource "lambdazip_file" "app" {
  base_dir      = "lambda"
  sources       = ["dist/**"]
  excludes      = [".env"]
  output        = "lambda.zip"
  before_create = "npm i && npm build"
  triggers      = data.lambdazip_files_sha256.triggers.map
}

resource "aws_lambda_function" "app" {
  filename         = lambdazip_file.app.output
  function_name    = "my_func"
  role             = aws_iam_role.lambda_app_role.arn
  handler          = "dist/index.handler"
  source_code_hash = lambdazip_file.app.base64sha256
  runtime          = "nodejs20.x"
}

resource "aws_iam_role" "lambda_app_role" {
  name = "lambda-app-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect    = "Allow"
        Principal = { Service = "lambda.amazonaws.com" }
        Action    = "sts:AssumeRole"
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "lambda_app_role" {
  role       = aws_iam_role.lambda_app_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}
