![Connect](docs/images/banner.svg)

# Connect

Social network built using Ruby on Rails, React and Bootstrap.

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

##### 5. Create .env file

Create .env file in project's root directory and paste following text in it.

```bash
JWT_SECRET='your jwt secret'
```

##### 6. Start the Rails server

You can start the rails server using the command given below.

```bash
rails s
```

##### 7. Open URL in web browser

[http://127.0.0.1:3000](http://127.0.0.1:3000)


&emsp;
# Technologies Used

| Name        | Description |
| ----------- | ---------------- |
| Ruby on Rails     | Ruby on Rails is a model–view–controller framework, providing default structures for a database, a web service, and web pages. |
| React | React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. |
| Bootstrap  | Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.  |





# Home Page
![Home Page](docs/images/home-page.png)

ReactFlix's home page displays multiple lists of movies and tv shows such as the popular movies, popular tv shows, etc. A user can click on a specific movie or tv show and view more details about it. The home page also contains the [search bar](#search) which lets the user search for a movie or tv show.  

# Details Page
![Details Page](docs/images/details-page-light.png)

The details page displays more information about a selected movie or tv show. This page contains information such as the genres, description, rating, number of seasons (for a tv show) or release status (for a movie). The page also displays similar movies or tv shows as recommendations for the user.

# Search
![Search](docs/images/search-light.png)

The search bar is present on the home page. The user can start typing and they will be shown results based on their input. The debounce method is used to send a query if the user stops typing for a while (200ms) and the data returned from the query is displayed to the user as a list.

# Dark Mode
![Home Page Dark Mode](docs/images/dark-mode-home.png)

ReactFlix uses tailwind's in-built dark mode support to provide a dark mode experience for the user. When the user clicks on the theme toggle button on the top-right part of the page, the theme for the entire application is changed with a smooth transition. You can view more screenshots of ReactFlix's dark mode below.

![Details Page Dark Mode](docs/images/details-page-dark.png)
![Search Dark](docs/images/search-dark.png)