## Introduction

This repository contains reproduction for https://github.com/prisma/prisma/issues/3342


### Steps for Reproduction

1. Clone this repo and fill out your credentials in `prisma/.env`
2. Run `yarn install`
3. Run `npx prisma migrate save --experimental && npx prisma migrate up --experimental`
4. Run `npx prisma generate`
5. Run `yarn start`


### Version

I tried this with these two versions: 

```
@prisma/cli          : 2.5.1
Current platform     : darwin
Query Engine         : query-engine c88925ce44a9b89b4351aec85ba6a28979d2658e (at node_modules/@prisma/cli/query-engine-darwin)
Migration Engine     : migration-engine-cli c88925ce44a9b89b4351aec85ba6a28979d2658e (at node_modules/@prisma/cli/migration-engine-darwin)
Introspection Engine : introspection-core c88925ce44a9b89b4351aec85ba6a28979d2658e (at node_modules/@prisma/cli/introspection-engine-darwin)
Format Binary        : prisma-fmt c88925ce44a9b89b4351aec85ba6a28979d2658e (at node_modules/@prisma/cli/prisma-fmt-darwin)
Studio               : 0.261.0
```

```
@prisma/cli          : 2.6.0-dev.17
Current platform     : darwin
Query Engine         : query-engine acfba31b83f7edec8e740dc4d94e0aec0855b2d6 (at node_modules/@prisma/cli/query-engine-darwin)
Migration Engine     : migration-engine-cli acfba31b83f7edec8e740dc4d94e0aec0855b2d6 (at node_modules/@prisma/cli/migration-engine-darwin)
Introspection Engine : introspection-core acfba31b83f7edec8e740dc4d94e0aec0855b2d6 (at node_modules/@prisma/cli/introspection-engine-darwin)
Format Binary        : prisma-fmt acfba31b83f7edec8e740dc4d94e0aec0855b2d6 (at node_modules/@prisma/cli/prisma-fmt-darwin)
Studio               : 0.261.0
```
