# Phase 5 Generator Test

Generated from **Service Company 1.0.0** by the Business Application Central Platform.

## Selected modules

- Core 1.1.0
- CRM 1.1.0

## Run the configuration scaffold

```bash
docker compose -f docker-compose.generated.yml up --build
curl http://localhost:3000/health
```

Environment files contain SecretReference names, not secret values. Map the required database and session secrets in your deployment provider before deployment. External infrastructure is intentionally not provisioned by Phase 5.
