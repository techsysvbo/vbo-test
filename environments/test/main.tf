provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      Project     = var.project_name
      Environment = var.environment
      Terraform   = "true"
    }
  }
}

# Create KMS key for state encryption
module "kms" {
  source = "../../modules/kms"

  project_name             = var.project_name
  environment              = var.environment
  description              = "KMS key for encrypting Terraform state in ${var.environment}"
  deletion_window_in_days  = 7
}

# Create S3 bucket and DynamoDB for state management
module "s3" {
  source = "../../modules/s3"

  project_name = var.project_name
  environment  = var.environment
  kms_key_arn  = module.kms.kms_key_arn
  force_destroy = var.environment == "test" ? true : false
}

# Create VPC
module "vpc" {
  source = "../../modules/vpc"

  project_name         = var.project_name
  environment          = var.environment
  vpc_cidr            = var.vpc_cidr
  public_subnet_cidrs = var.public_subnet_cidrs
  availability_zones  = var.availability_zones
}

# Create EC2 instance
module "ec2" {
  source = "../../modules/ec2"

  project_name           = var.project_name
  environment            = var.environment
  vpc_id                 = module.vpc.vpc_id
  subnet_ids             = module.vpc.public_subnet_ids
  instance_type          = var.instance_type
  allowed_ssh_cidr_blocks = ["10.0.0.0/16"] # Restrict SSH to VPC only
}
