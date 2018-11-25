---
date: "2018-05-01T21:12:12"
lastmod: 2018-06-23T16:29:27+00:00
title: Exploring GraphQL
author: Mathias Wellner
categories:
  - software
tags:
  - graphql
  - postgresql
  - angular
---
In an attempt to explore new technologies, I have recently digged into [GraphQL](http://graphql.org/), which may be the future protocol for fetching data with mobile and web applications. In contrast to the current standard (REST APIs), GraphQL fetches exactly the data you need, in one request. This is vital for mobile applications and can also be handy for web applications. 

<!--more-->

The basic idea is a replacement for my current [theatre project page](https://mwellner.de/theater/). I would like to have productions, production detail pages, actor pages etc. A little bit like [IMDB](https://www.imdb.com/) for amateur theatre. However, that is a long way to go and learning technologies is my primary focus. 

#### Architecture

My set-up, preferrably in Docker containers, is

1. Database layer ([PostgreSQL](https://www.postgresql.org/))
2. Database access layer (GraphQL)
3. Web application ([Angular 5](https://angular.io/))

#### PostGraphile

The big question is how to get the <em>GraphQL</em> layer working. What I have found was a project called [PostGraphile](https://www.graphile.org/postgraphile/), which even has a [Docker image](https://hub.docker.com/r/tyvdh/postgraphile/). Everything worked well, you can create and test queries with the [GraphiQL](https://github.com/graphql/graphiql) web interface, which has autocompletion. The best part of this approach is that you define your database schema only once, in the PostgreSQL database. PostGraphile detects the schema and creates GraphQL queries automatically. 

To get all productions with the primary photo, the GraphQL query is
<pre><code>query AllProductions {
  allProductions {
    nodes {
      title,
      releaseDate,
      productionPhotosByProductionId(condition: {productionPhotoType: 1}) {
        nodes {
          photoByPhotoId {
            title,
            src
          }
        }
      }
    }
  }
}</code></pre>

Note that <em>allProductions</em> was created automatically from the existing table <em>production</em>. Similarly, the many-to-many relationship table <em>production_photo</em> was converted to the lengthy <em>productionPhotosByProductionId</em>. This saves you from writing your schema twice, but you have to live with the naming conventions. 

The issue, I was experiencing with this particular Docker image was the unability to run [GraphQL mutations](http://graphql.org/learn/queries/). Those are needed to change data, e.g. for adding a new production. And this is absolutely necessary for my application. 

#### Apollo Server and Sequelize

The next approach I will dive into is using [Apollo Server](https://github.com/apollographql/apollo-server) with [Sequelize](http://docs.sequelizejs.com/). This means much more work, as I have to implement the GraphQL resolvers myself. But as I understand the <em>Sequelize</em> approach, I would define the database schema directly in the application with loads of helpers for foreign-key relations. This gives a little redundancy, but more flexibility and a deeper understanding of <em>GraphQL</em>. 

#### Angular and GraphQL

To fetch data with my application, I have used the samples provided by [Apollo Client](https://github.com/apollographql/apollo-client), which also has an Angular version. 