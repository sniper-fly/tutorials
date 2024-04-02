resource "aws_s3_bucket" "anitunes_click" {
  bucket = "anitunes.click"
}

resource "aws_s3_bucket_public_access_block" "anitunes_click" {
  bucket = aws_s3_bucket.anitunes_click.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_website_configuration" "anitunes_click" {
  bucket = aws_s3_bucket.anitunes_click.id
  index_document {
    suffix = "index.html"
  }
}

resource "aws_s3_bucket_policy" "anitunes_click" {
  bucket = aws_s3_bucket.anitunes_click.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject",
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "arn:aws:s3:::anitunes.click/*"
      },
    ]
  })
}
