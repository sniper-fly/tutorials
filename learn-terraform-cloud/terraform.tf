terraform {

  cloud {
    organization = "terraform_tutorial_miroscular"

    workspaces {
      name = "tutorial_miroscular"
    }
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.31.0"
    }
  }

  required_version = "~> 1.2"
}
