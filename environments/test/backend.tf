terraform {
  backend "s3" {
    bucket         = "mycompany-test-terraform-state-123456789012"
    key            = "test/terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true
    kms_key_id     = "alias/terraform-state-test"
    dynamodb_table = "mycompany-test-terraform-locks"
  }
}
