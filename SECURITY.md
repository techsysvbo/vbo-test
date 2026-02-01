# 🔒 Security Setup Guide

## Environment Variables

**CRITICAL**: Before pushing to your repository or deploying, ensure all secrets are properly configured in `.env` files.

### Required Steps

1. **Copy the example files**:
   ```bash
   # Root directory
   cp .env.example .env
   
   # Auth service
   cp services/auth/.env.example services/auth/.env
   
   # Opportunities service
   cp services/opportunities/.env.example services/opportunities/.env
   ```

2. **Generate a strong JWT secret**:
   ```bash
   # Using Node.js
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   
   # Using OpenSSL
   openssl rand -hex 32
   ```

3. **Update your `.env` files** with real values:
   - Replace `JWT_SECRET` with the generated secret
   - Update `DATABASE_URL` with your actual database connection strings
   - Update `REDIS_URL` if using a different Redis instance

### What's Protected

✅ `.env` files are in `.gitignore` and will NOT be committed  
✅ JWT secrets are required via environment variables  
✅ Database credentials are externalized  
✅ No hardcoded secrets in the codebase  

### Verification Checklist

Before pushing to Git:
- [ ] All `.env` files are created from `.env.example`
- [ ] JWT_SECRET is set to a strong random value (minimum 32 characters)
- [ ] DATABASE_URL contains real credentials
- [ ] `.env` files are NOT tracked by Git (check with `git status`)
- [ ] No secrets are hardcoded in source files

### Production Deployment

For production environments:
- Use your platform's secret management (e.g., Vercel Secrets, Railway Variables)
- Never commit production secrets to version control
- Rotate secrets regularly
- Use different secrets for each environment (dev, staging, prod)

## Docker Secrets

If using Docker Compose in production, use Docker secrets:

```yaml
secrets:
  jwt_secret:
    file: ./secrets/jwt_secret.txt
  db_password:
    file: ./secrets/db_password.txt
```

---

**⚠️ IMPORTANT**: The `.env.example` files contain placeholder values only. They are safe to commit but will NOT work without real values.
