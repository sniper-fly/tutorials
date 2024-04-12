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

# {
#         "Version": "2008-10-17",
#         "Id": "PolicyForCloudFrontPrivateContent",
#         "Statement": [
#             {
#                 "Sid": "AllowCloudFrontServicePrincipal",
#                 "Effect": "Allow",
#                 "Principal": {
#                     "Service": "cloudfront.amazonaws.com"
#                 },
#                 "Action": "s3:GetObject",
#                 "Resource": "arn:aws:s3:::anitunes.click/*",
#                 "Condition": {
#                     "StringEquals": {
#                       "AWS:SourceArn": "arn:aws:cloudfront::109026126473:distribution/E7GTKCI7VVKNQ"
#                     }
#                 }
#             }
#         ]
#       }

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
      # identifiers = ["arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity E7GTKCI7VVKNQ"]
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
