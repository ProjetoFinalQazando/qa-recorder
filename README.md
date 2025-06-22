# qa-recorder
Projeto final da Marterclass 2025 Grupo - 2



Instalação do Cypress
O Cypress pode ser instalado de diferentes formas, dependendo do seu ambiente e necessidades. A seguir, apresento um passo a passo para instalar e configurar o Cypress corretamente.

🛠️ Pré-requisitos
Antes de instalar o Cypress, certifique-se de que possui os seguintes requisitos instalados:

✅ Node.js (Versão recomendada: LTS) → [Baixar aqui](https://nodejs.org/pt/download) <br>
✅ Gerenciador de Pacotes (npm ou yarn) (já vem com o Node.js) <br>
✅ Git (opcional, mas recomendado) → [Baixar aqui](https://git-scm.com/downloads) <br>

  <br>

# 🏗️ 1. Criando um novo projeto (caso não tenha um)


  ```
  mkdir meu-projeto-cypress
  cd meu-projeto-cypress
  npm init -y
  ```
# Isso criará um arquivo package.json básico para gerenciar as dependências.

# 📦 2. Instalando o Cypress
🔹 Opção 1: Instalação via npm (Recomendada) <br>
    No diretório do projeto, execute: <br>
  ```
  npm install cypress --save-dev
  ```
🔹 Após a instalação, o Cypress será adicionado às dependências do seu projeto. <br>

# 🚀 3. Abrindo o Cypress pela primeira vez <br>
🔹 Após a instalação, inicie o Cypress com: <br>
```
npx cypress open
```
Modo interativo (com interface gráfica)

```
npx cypress run
```
Modo headless (sem interface gráfica, útil para CI/CD)

faker js gera uma massa de dados para que haja necessidade de usar um numero maior de dados sem repetir 

siga a documentação: https://fakerjs.dev/guide/
