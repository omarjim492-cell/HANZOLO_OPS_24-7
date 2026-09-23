# HANZOLO OPS 24/7 — Sprint 4 / Bloco 1

## Objetivo
Fundação de segurança e dados para o backend Firebase.

## Collections
- `users`
- `departments`
- `roles`
- `projects`
- `operations`
- `technical_interventions`
- `commercial_proposals`
- `financial_records`
- `documents`
- `notifications`
- `audit_logs`

## User profile mínimo
```json
{
  "displayName": "Nome",
  "email": "email@empresa.com",
  "role": "admin",
  "departmentId": "technical",
  "active": true,
  "createdAt": "serverTimestamp",
  "updatedAt": "serverTimestamp"
}
```

## Roles base
- `superadmin`
- `admin`
- `director`
- `project_manager`
- `technical`
- `commercial`
- `finance_manager`
- `finance_user`
- `hr`
- `logistics`
- `safety`
- `quality`
- `user`

## Regra crítica
`financial_records` permanece isolada. Utilizadores comuns e departamentos sem autorização não podem ler nem escrever estes documentos.

## Auditoria
Todas as operações sensíveis devem gerar um documento em `audit_logs`, contendo pelo menos:
- `actorUid`
- `actorRole`
- `action`
- `entity`
- `entityId`
- `createdAt`

## Estado
Este bloco é uma fundação inicial e deve ser validado contra o código real do projeto antes do deploy em produção.
