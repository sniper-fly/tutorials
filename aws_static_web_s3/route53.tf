data "aws_route53_zone" "anitunes_click" {
  name = "anitunes.click."
}

resource "aws_route53_record" "anitunes_click" {
  zone_id = data.aws_route53_zone.anitunes_click.zone_id
  name    = "anitunes.click"
  type    = "A"

  alias {
    # name                   = aws_cloudfront_distribution.s3_distribution.domain_name
    # zone_id                = aws_cloudfront_distribution.s3_distribution.hosted_zone_id
    name = aws_s3_bucket_website_configuration.anitunes_click.website_domain
    zone_id = aws_s3_bucket.anitunes_click.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_acm_certificate" "cert" {
  domain_name       = "anitunes.click"
  validation_method = "DNS"

  provider = aws.virginia

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_route53_record" "cert_validation" {
  for_each = {
    for dvo in aws_acm_certificate.cert.domain_validation_options :
    dvo.domain_name => {
      name    = dvo.resource_record_name
      type    = dvo.resource_record_type
      records   = dvo.resource_record_value
    }
  }

  allow_overwrite = true
  zone_id = aws_route53_record.anitunes_click.zone_id
  name    = each.value.name
  type    = each.value.type
  records = [each.value.records]
  ttl     = 60
}

resource "aws_acm_certificate_validation" "cert" {
  certificate_arn         = aws_acm_certificate.cert.arn
  validation_record_fqdns = [for record in aws_route53_record.cert_validation : record.fqdn]

  provider = aws.virginia
}
