variable "project_name" {
  description = "Name of the project"
  type        = string
}

variable "environment" {
  description = "Environment (e.g., test, prod)"
  type        = string
}

variable "description" {
  description = "Description of the KMS key"
  type        = string
  default     = "KMS key for encrypting Terraform state"
}

variable "deletion_window_in_days" {
  description = "Duration in days before the key is deleted"
  type        = number
  default     = 10
}
