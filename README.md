# Terraform Test Project

This project creates a complete infrastructure in AWS test account including:
- VPC with public subnets
- EC2 instance with S3 access
- S3 bucket for Terraform state with KMS encryption
- DynamoDB for state locking

## Prerequisites

- AWS account with appropriate permissions
- Terraform 1.0+
- AWS CLI configured

## Usage

1. Clone the repository
2. Navigate to environments/test
3. Initialize Terraform: `terraform init`
4. Plan: `terraform plan`
5. Apply: `terraform apply`

## GitHub Actions

Workflows are configured to:
- Run terraform plan on feature branches
- Require 2 approvals for PRs
- Auto-destroy on PR close (test environment)# vbo-test
