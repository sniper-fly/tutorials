resource "random_pet" "s3_bucket_name" {
  prefix = "aws-handson-static-website"
  length = 2
  separator = "-"
}

resource "aws_s3_bucket" "s3_bucket_name" {
  bucket = random_pet.s3_bucket_name.id
}
