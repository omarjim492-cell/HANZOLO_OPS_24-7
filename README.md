# HANZOLO OPS 24/7

Plataforma de gestão operacional e backend Firebase.

## Estrutura do Repositório
- `firebase.json`: Configuração geral do projeto Firebase.
- `firestore.rules`: Regras de segurança e controlo de acessos por roles (RBAC).
- `firestore.indexes.json`: Índices compostos para otimização de consultas no Firestore.
- `docs/`: Documentação das sprints e blocos de desenvolvimento.

## Instalação e Deploy
```bash
npm install -g firebase-tools
firebase login
firebase deploy --only firestore
