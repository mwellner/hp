---
id: 6934
title: 'Docker Compose File for WordPress &#038; MariaDB'
date: 2016-09-14T22:33:45+00:00
author: Mathias Wellner
layout: post
guid: 'http://www.mwellner.de/?p=6934&#038;lang=en'
permalink: /2016/09/14/docker-compose-file-for-wordpress-mariadb/?lang=en
categories:
  - software development
tags:
  - container
  - Database
  - docker
  - docker-compose
  - mariadb
  - mysql
  - Wordpress
---
After some frustrating attempts to create a working Docker configuration for a WordPress system, I have finally found a working solution. It uses the default <a href="https://hub.docker.com/_/wordpress/" title="WordPress image" target="_blank">WordPress Docker image</a> and <a href="https://hub.docker.com/_/mariadb/" title="MariaDB image" target="_blank">MariaDB</a>. 

This is a minimal configuration, you may also want to specify a data volume for persistence. 

`# docker-compose.yml file for a minimal working WordPress instance with separate database<br />
version: '2'<br />
services:<br />
&emsp;wordpress:<br />
&emsp;&emsp;image: wordpress<br />
&emsp;&emsp;links:<br />
&emsp;&emsp;- wordpress_db:mysql<br />
&emsp;&emsp;ports:<br />
&emsp;&emsp;- 8090:80<br />
&emsp;&emsp;environment:<br />
&emsp;&emsp;&emsp;WORDPRESS_DB_HOST: wordpress_db:3306<br />
&emsp;&emsp;&emsp;WORDPRESS_DB_PASSWORD: password<br />
&emsp;wordpress_db:<br />
&emsp;&emsp;image: mariadb<br />
&emsp;&emsp;environment:<br />
&emsp;&emsp;&emsp;MYSQL_ROOT_PASSWORD: password<br />
`