variable "project_name" {
  description = "Name of the project"
  type        = string
}

variable "environment" {
  description = "Environment (e.g., test, prod)"
  type        = string
}

variable "kms_key_arn" {
  description = "KMS key ARN for encryption"
  type        = string
}

variable "force_destroy" {
  description = "Force destroy bucket even if it contains objects"
  type        = bool
  default     = false
}
