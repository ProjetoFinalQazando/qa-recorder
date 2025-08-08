# Sobre o Projeto

Este projeto foi desenvolvido como parte de uma iniciativa voluntária para testar a ferramenta da Qazando (em fase Alpha), voltada para a gestão de casos de teste. O objetivo foi permitir que os alunos colocassem em prática os conhecimentos adquiridos durante a Masterclass da Qazando, ao longo de 3 meses de desenvolvimento.

Durante o projeto, realizamos testes manuais e automação de testes em um site disponibilizado para a turma, simulando um cenário real de QA.

<br>

# 🛠 Tecnologias e Ferramentas Utilizadas

* Cypress – Automação de testes Web.
* Trello – Organização das tarefas em formato Kanban e report de bugs.
* Ferramenta da Qazando – Gestão dos casos de teste manuais (tool.qazando.com.br).
* GitHub – Armazenamento e versionamento da automação.
* Metodologia Ágil – Com reuniões weekly às terças e quintas para acompanhamento das tarefas.

 <br>

# Objetivo
O principal objetivo foi praticar o ciclo completo de QA , desda  a criação e execução de casos de teste manuais até o desenvolvimento de testes automatizados simulando a rotina de um time de qualidade dentro de um projeto real.

<br>

👥 Equipe do Projeto

| Avatar            							| integrante         | Função           		| GitHub                                                      | LinkedIn                                              |
| -------------------------------------------- | ---------------- | ---------------- | -------------------------------------------------------------- | ----------------------------------------------------- |
| <img src = "document/Michael.jpeg" width="60" >|__Michael Felipe__| *QA* | [![](https://bit.ly/3f9Xo0P)](https://github.com/Michaelfss/Michaelfss) | [![](https://bit.ly/2P1ZogM)](https://www.linkedin.com/in/michael-felipe-573b64167) |
| <img src = "document/Karen.jpeg" width="60" >|__Karen Silveira__| *QA* | [![](https://bit.ly/3f9Xo0P)](https://github.com/karennsilveiraa)      | [![](https://bit.ly/2P1ZogM)](https://www.linkedin.com/in/karensilveiradacunha/) |
| <img src = "document/Juliana.jpeg" width="60" >|__Juliana Guedes__| *QA* | [![](https://bit.ly/3f9Xo0P)](https://github.com/julianaguedes) | [![](https://bit.ly/2P1ZogM)](https://www.linkedin.com/in/julianagueds/) |
| <img src = "document/Anderson.jpeg" width="60" >|__Anderson Asain__| *QA* | [![](https://bit.ly/3f9Xo0P)]() | [![](https://bit.ly/2P1ZogM)](https://www.linkedin.com/in/anderson-araujo-9b0207236/) |
| <img src = "document/Maxian.jpeg" width="60" >|__Maxian Muller__| *QA* | [![](https://bit.ly/3f9Xo0P)](https://github.com/Maxianrodrigues) | [![](https://bit.ly/2P1ZogM)](https://www.linkedin.com/in/maxian-muller-14a30437/) |



<br>

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
