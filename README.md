# API de Academia

Essa é a minha API de academia, feita em Node.js com TypeScript e inspirada no estilo do GymPass. O objetivo é criar uma aplicação backend que simule um sistema real de check-in em academias, com autenticação, regras de negócio e cadastro de usuários e estabelecimentos.

A ideia aqui é simples: um usuário pode se cadastrar, entrar na aplicação, localizar academias próximas, registrar presença e acompanhar seu histórico de check-ins. Em paralelo, a API também organiza a lógica em camadas, deixando o código mais limpo, fácil de manter e bastante próximo de uma arquitetura profissional.

## O que esse projeto faz

- cadastro de usuários;
- autenticação com senha segura;
- consulta de perfil do usuário logado;
- registro de check-ins em academias;
- listagem de academias próximas;
- busca por academias pelo nome;
- histórico de check-ins do usuário;
- validação de check-ins por administradores;
- cadastro de academias;
- regras de negócio para evitar ações inválidas.

## Stack utilizada

- Node.js
- TypeScript
- Fastify
- Prisma
- PostgreSQL
- Docker
- Zod
- bcryptjs
- Vitest

## Estrutura do projeto

```bash
.
├── prisma/
│   └── schema.prisma
├── src/
│   ├── app.ts
│   ├── server.ts
│   ├── env/
│   ├── http/
│   ├── lib/
│   ├── repositories/
│   └── services/
├── .env.example
├── .eslintrc.json
├── .gitignore
├── docker-compose.yaml
├── package.json
├── tsconfig.json
├── vite.config.ts
├── README.md
└── package-lock.json
```

## Requisitos funcionais

- [ ] Deve ser possível se cadastrar;
- [ ] Deve ser possível se autenticar;
- [ ] Deve ser possível obter o perfil de um usuário logado;
- [ ] Deve ser possível consultar o número de check-ins do usuário;
- [ ] Deve ser possível ver o histórico de check-ins;
- [ ] Deve ser possível buscar academias próximas;
- [ ] Deve ser possível buscar academias pelo nome;
- [ ] Deve ser possível realizar check-in em uma academia;
- [ ] Deve ser possível validar um check-in;
- [ ] Deve ser possível cadastrar uma academia;

## Regras de negócio

- [ ] Usuário não pode se cadastrar com e-mail duplicado;
- [ ] Usuário não pode fazer 2 check-ins no mesmo dia;
- [ ] Usuário não pode fazer check-in se estiver longe da academia;
- [ ] Check-in só pode ser validado até 20 minutos depois de criado;
- [ ] Apenas administradores podem validar check-ins;
- [ ] Só administradores podem cadastrar academias;

## Requisitos não funcionais

- [ ] A senha do usuário precisa ser criptografada;
- [ ] Os dados precisam ser persistidos em PostgreSQL;
- [ ] Listas de dados precisam ser paginadas;
- [ ] O usuário deve ser identificado por JWT;

## Como rodar o projeto

### 1) Clone o projeto

```bash
git clone https://github.com/fabiolinsdev/API-Node.js-com-SOLID.git
cd API-Node.js-com-SOLID
```

### 2) Instale as dependências

```bash
npm install
```

### 3) Configure o ambiente

Crie um arquivo `.env` baseado no `.env.example`:

```bash
cp .env.example .env
```

### 4) Suba o banco PostgreSQL

```bash
docker compose up -d
```

### 5) Gere o Prisma e rode as migrations

```bash
npx prisma generate
npx prisma migrate dev
```

### 6) Inicie a aplicação

```bash
npm run start:dev
```

A API fica disponível em:

```bash
http://localhost:3333
```

## Scripts úteis

```bash
npm run start:dev
```
Executa a aplicação em modo de desenvolvimento.

```bash
npm run build
```
Cria a versão de produção da aplicação.

```bash
npm run test
```
Executa os testes.

## Conclusão

Esse projeto foi muito importante para eu consolidar vários conceitos de backend em Node.js. Além de aprender a construir uma API funcional, eu também consegui praticar arquitetura mais organizada, separação de responsabilidades e regras de negócio reais.

O mais legal é que o projeto não fica só na teoria: ele simula uma situação real de aplicação de academia, com autenticação, check-ins, validações e persistência de dados. Foi um passo bem legal para entender como uma API profissional costuma ser estruturada.

Em resumo, esse projeto me ajudou a entender melhor como pensar em soluções mais limpas, escaláveis e preparadas para crescer.

## Licença

Este projeto está sob a licença ISC.
