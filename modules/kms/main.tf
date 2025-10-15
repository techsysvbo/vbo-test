resource "aws_kms_key" "terraform_state" {
  description             = var.description
  deletion_window_in_days = var.deletion_window_in_days
  enable_key_rotation     = true
  policy                  = data.aws_iam_policy_document.kms_policy.json

  tags = {
    Environment = var.environment
    Project     = var.project_name
    Name        = "${var.project_name}-${var.environment}-kms"
  }
}

resource "aws_kms_alias" "terraform_state" {
  name          = "alias/terraform-state-${var.environment}"
  target_key_id = aws_kms_key.terraform_state.key_id
}

data "aws_iam_policy_document" "kms_policy" {
  statement {
    sid       = "Enable IAM User Permissions"
    effect    = "Allow"
    actions   = ["kms:*"]
    resources = ["*"]

    principals {
      type        = "AWS"
      identifiers = ["arn:aws:iam::${data.aws_caller_identity.current.account_id}:root"]
    }
  }

  statement {
    sid    = "Allow Terraform to use the key"
    effect = "Allow"
    actions = [
      "kms:Encrypt",
      "kms:Decrypt",
      "kms:ReEncrypt*",
      "kms:GenerateDataKey*",
      "kms:DescribeKey"
    ]
    resources = ["*"]

    principals {
      type        = "AWS"
      identifiers = [data.aws_caller_identity.current.arn]
    }
  }
}

data "aws_caller_identity" "current" {}
