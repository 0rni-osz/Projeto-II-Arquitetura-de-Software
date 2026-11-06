# Projeto II - Arquitetura de Software: Injeção de Dependências com InversifyJS

Este projeto consiste na refatoração do backend de e-commerce para implementar Injeção de Dependências (DI) e Inversão de Controle (IoC) utilizando a biblioteca **InversifyJS**, dando continuidade aos princípios SOLID na matéria de Arquitetura de Software ministrada por Maikon Bueno.

## Instalação e Configuração

Siga os passos abaixo para preparar o ambiente e rodar o projeto localmente:

1. **Instale as dependências**:
   ```bash
   npm install
2. **Gere o Prisma Client**:
   ```bash
   npx prisma generate
3. **Crie o banco de dados (SQLite) e execute as migrações**:
   ```bash
   npm run prisma:migrate
4. **Popule o banco com os dados iniciais (Seed)**:
   ```bash
   npm run prisma:seed
5. **Para iniciar a API em modo de desenvolvimento**:
   ```bash
   npm run dev
