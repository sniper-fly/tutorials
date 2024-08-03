resource "aws_s3_bucket" "anitunes_click" {
  bucket = "anitunes.click"
}

resource "aws_s3_bucket_public_access_block" "anitunes_click" {
  bucket = aws_s3_bucket.anitunes_click.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_website_configuration" "anitunes_click" {
  bucket = aws_s3_bucket.anitunes_click.id
  index_document {
    suffix = "index.html"
  }
}

resource "aws_s3_bucket_policy" "anitunes_click" {
  bucket = aws_s3_bucket.anitunes_click.id

  policy = data.aws_iam_policy_document.s3_anitunes_click.json
}

data "aws_iam_policy_document" "s3_anitunes_click" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.anitunes_click.arn}/*"]
    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }
    condition {
      test = "StringEquals"
      variable = "AWS:SourceArn"
      values = [aws_cloudfront_distribution.s3_distribution.arn]
    }
  }
}

locals {
  content_types = {
    "js"   = "application/javascript"
    "html" = "text/html"
    "css"  = "text/css"
    "png"  = "image/png"
    "ico"  = "image/x-icon"
  }
}

resource "aws_s3_object" "resources" {
  bucket = aws_s3_bucket.anitunes_click.id

  for_each = fileset("./resources/", "**")

  key    = each.value
  source = "resources/${each.value}"

  content_type = lookup(local.content_types, reverse(split(".", each.value))[0], "text/plain")

  etag = filemd5("resources/${each.value}")
}
