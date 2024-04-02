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
