terraform {
  # cloud {
  #   organization = "terraform_tutorial_miroscular"
  #   workspaces {
  #     name = "learning_with_cli"
  #   }
  # }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.41.0"
    }
    random = {
      source  = "hashicorp/random"
      version = "~> 3.6.0"
    }
    archive = {
      source  = "hashicorp/archive"
      version = "~> 2.4.2"
    }
  }

  required_version = "~> 1.7"
}

provider "aws" {
  region = "ap-northeast-1"

  default_tags {
    tags = {
      name = "static_web_s3_tutorial"
    }
  }
}
