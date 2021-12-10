# Chat App

Chat app built using Ruby on Rails channels, React and Bootstrap.

&emsp;
# Prerequisites

The setups steps expect following tools installed on the system.

- Github
- Ruby [6.1.4.1](https://www.ruby-lang.org/en/downloads/)
- Rails [3.0.2p107](https://rubyonrails.org/)
  

&emsp;
# Setup

##### 1. Check out the repository

```bash
git clone git@github.com:organization/project-name.git
```

##### 2. Install required gems

```bash
bundle install
```

##### 3. Create and setup the database

Run the following commands to install react for rails.

```bash
bundle exec rails webpacker:install:react
```

##### 4. Create and setup the database

Run the following commands to create and setup the database.

```bash
rails db:create
rails db:setup
```

##### 5. Start the Rails server

You can start the rails server using the command given below.

```bash
rails s
```

##### 6. Open URL in web browser

[http://127.0.0.1:3000](http://127.0.0.1:3000)


&emsp;
# Technologies Used

| Name        | Description |
| ----------- | ---------------- |
| Ruby on Rails     | Ruby on Rails is a model–view–controller framework, providing default structures for a database, a web service, and web pages. |
| React | React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. |
| Bootstrap  | Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.  |
