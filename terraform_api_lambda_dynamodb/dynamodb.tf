resource "aws_dynamodb_table" "example" {
  name           = "example"
  billing_mode   = "PROVISIONED"
  read_capacity  = 1
  write_capacity = 1
  hash_key       = "timestamp"

  attribute {
    name = "timestamp"
    type = "S"
  }
}

resource "aws_dynamodb_table_item" "example" {
  table_name = aws_dynamodb_table.example.name
  hash_key   = aws_dynamodb_table.example.hash_key

  item = jsonencode({
    timestamp: { S: "20191024183000" }
    input_text: { S: "こんにちは" }
  })
}
