# Projeto I - Arquitetura de Software: E-commerce Monolítico Refatorado (SOLID)

Este projeto consiste na refatoração de um backend de e-commerce com código legado, aplicando os princípios SOLID da matéria de Arquitetura de Software ministrada por Maikon Bueno.

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
