terraform {
  required_providers {
    lambdazip = {
      source  = "winebarrel/lambdazip"
      version = ">= 0.5.0"
    }
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.41.0"
    }
  }
}

provider "aws" {
  region = "ap-northeast-1"

  default_tags {
    tags = {
      Environment = "dev"
      purpose     = "learning"
    }
  }
}
