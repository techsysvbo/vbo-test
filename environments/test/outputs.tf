output "vpc_id" {
  description = "VPC ID"
  value       = module.vpc.vpc_id
}

output "public_subnet_ids" {
  description = "Public subnet IDs"
  value       = module.vpc.public_subnet_ids
}

output "ec2_instance_id" {
  description = "EC2 instance ID"
  value       = module.ec2.instance_id
}

output "ec2_public_ip" {
  description = "EC2 public IP"
  value       = module.ec2.instance_public_ip
}

output "s3_bucket_id" {
  description = "S3 bucket ID for state"
  value       = module.s3.s3_bucket_id
}

output "kms_key_id" {
  description = "KMS key ID for encryption"
  value       = module.kms.kms_key_id
}

output "dynamodb_table_name" {
  description = "DynamoDB table name for state locking"
  value       = module.s3.dynamodb_table_name
}
