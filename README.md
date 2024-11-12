# 📰 Projeto Brasil Times

Este projeto é uma solução de um site de notícias para o portal Brasil Times, permitindo que editores e administradores gerenciem notícias. O projeto é dividido entre backend e frontend, cada um com suas tecnologias e processos de instalação descritos abaixo.

---

## 🛠️ Tecnologias Utilizadas

### Backend

- 🐍 **Linguagem**: Python
- 🌐 **Framework**: Django
- 🗄️ **Banco de Dados**: SQLite (para desenvolvimento local)

### Frontend

- ⚛️ **Linguagem**: JavaScript
- 📚 **Framework**: Next.JS
- 🎨 **Extras**: Mantine, Tailwind

---

## ⚙️ Instalação e Configuração

### Pré-requisitos

- 🐍 Python 3.8+
- ⚛️ Node.js e npm/yarn

---

### 1. Clonando o Repositório

Primeiro, clone o repositório e navegue até o diretório do projeto:

```bash
git clone git@github.com:amanda-diniz/brasil-times.git
cd brasil-times
```

---

### Backend - Django

1. **Crie e ative um ambiente virtual**:

   ```bash
   python -m venv venv
   source venv/bin/activate # Para Linux/macOS
   venv\Scripts\activate    # Para Windows
   ```

2. **Instale as dependências**:

   ```bash
   pip install -r requirements.txt
   ```

3. **Execute o servidor**:

   ```bash
   python manage.py runserver
   ```

   O backend estará rodando em `http://localhost:8000`.

---
   
#### 📝 Nota sobre o banco de dados

Para facilitar o processo de teste e avaliação do projeto, incluí o arquivo do banco de dados SQLite (`db.sqlite3`) diretamente no repositório. Dessa forma, o projeto já vem populado com dados de exemplo e não é necessário recriar ou repopular o banco de dados ao executar localmente.

💡 **Observação**: Estou ciente de que, em um ambiente de produção ou em projetos reais, não é uma prática recomendada versionar arquivos de banco de dados ou incluir dados sensíveis no repositório. Normalmente, o arquivo `db.sqlite3` seria adicionado ao `.gitignore` para evitar seu versionamento. Porém, para os fins deste case e para agilizar o processo de avaliação, optei por disponibilizá-lo.

Se preferirem, podem excluir o arquivo `db.sqlite3` e executar as migrações novamente com `python manage.py migrate`, mas será necessário criar os dados manualmente.


---

### Frontend - Next.JS

1. **Acesse o diretório do frontend**:

   ```bash
   cd frontend
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execute o frontend**:

   ```bash
   npm start
   # ou
   yarn start
   ```

   O frontend estará rodando em `http://localhost:3000`.

---

## 🔑 Acesso ao Painel Administrativo

Para acessar o painel administrativo, utilize o endereço abaixo:

- **URL**: [http://localhost:8000/admin](http://localhost:8000/admin)
- **Usuário**: `admin` ou `editor`
- **Senha**: `123456`

## 📚 Referências de Aprendizado

Durante o desenvolvimento deste projeto, foram utilizadas as seguintes referências de aprendizado:

- [Django Girls Tutorial](https://tutorial.djangogirls.org/pt/) - Tutorial que usei como base. 
- [Django Documentation](https://docs.djangoproject.com/en/5.1/) - Documentação oficial do Django.
- [Django REST Framework](https://www.django-rest-framework.org/) - Documentação oficial para construção de APIs com Django.
- [Mantine UI](https://mantine.dev/getting-started/) - Biblioteca de componentes para React, utilizada para estilização e design do frontend.
- [Next.js](https://nextjs.org/) - Documentação oficial do framework para React.
