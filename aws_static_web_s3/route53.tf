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

output "anitunes_click" {
  value = aws_s3_bucket_website_configuration.anitunes_click.website_domain
}
