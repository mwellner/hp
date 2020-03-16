---
title: PostgreSQL revisited
date: 2020-03-11T19:22:12+00:00
lastmod: 2020-03-15T11:04:37+00:00
author: Mathias Wellner
categories:
  - software
tags:
  - sql
  - postgresql
  - mysql
---

I still remember when I heard [PostgreSQL](https://www.postgresql.org/) for the first time. It was around 2001, when my former room mate mentioned that he was a maintainer for _PostgreSQL_ on Debian. At that time, I was still studying electrical engineering, so database systems were no concern to me. But I knew something was there and even used _PostgreSQL_ for some projects, professional and private. Today I held a presentation for my fellow developers at [wer denkt was](https://werdenktwas.de/), comparing _PostgreSQL_ with [MySQL](https://www.mysql.com/de/). 
<!--more-->

Over the last years, both systems have added lots of functionality and became much closer with respect to features. The [Dumper Blog](https://blog.dumper.io/) did a [comparison of MySQL 8 and PostgreSQL 10](https://blog.dumper.io/showdown-mysql-8-vs-postgresql-10/) in 2018. While _MySQL_ added [common table expressions](https://www.postgresql.org/docs/9.1/queries-with.html) and [window functions](https://www.postgresql.org/docs/9.1/tutorial-window.html) and improved JSON support and geospatial features, _PostgreSQL_ introduced [logical replication](https://www.postgresql.org/docs/10/logical-replication.html), semi-synchronous replication and declarative partitioning. 

In this blog, I will highlight the remaining differences between the two most widely used open-source SQL implementations. 

#### Table inheritance

One thing only _PostgreSQL_ can do is table inheritance, like in object-oriented programming languages.

{{<highlight postgresql "linenos=table">}}
-- normal city
CREATE TABLE city (
  id SERIAL PRIMARY KEY,
  name text,
  population float,
  area float
);

-- capital, inherits from city table
CREATE TABLE capital (
  country_id REFERENCES country(id)
) INHERITS (city);
{{</highlight>}}

#### Materialized views

A [view](https://www.postgresql.org/docs/9.2/sql-createview.html) in SQL is a saved query which can be used like a table. 

{{<highlight postgresql "linenos=table">}}
-- normal view
CREATE VIEW all_city_view AS SELECT * FROM city;

-- materialized view
CREATE MATERIALIZED VIEW all_city_matview AS SELECT * FROM city;

-- refresh materialized view
REFRESH MATERIALIZED VIEW all_city_matview;
{{</highlight>}}

#### Full outer joins

A [full outer join](https://www.w3resource.com/sql/joins/perform-a-full-outer-join.php) can also be useful for some special kind of queries. _MySQL_ does not support this, while _PostgreSQL_ does. 

{{<highlight postgresql "linenos=table">}}
-- first table
CREATE TABLE departments (
  department_id serial PRIMARY KEY,
  department_name varchar(255) NOT NULL
);

-- second table
CREATE TABLE employees (
  employee_id serial PRIMARY KEY,
  employee_name varchar(255),
  department_id integer
);

-- add data to tables
INSERT INTO
  departments (department_name)
VALUES
  ('Sales'),
  ('Marketing'),
  ('HR'),
  ('IT'),
  ('Production');

INSERT INTO
  employees (employee_name, department_id)
VALUES
  ('Bette Nicholson', 1),
  ('Christian Gable', 1),
  ('Joe Swank', 2),
  ('Fred Costner', 3),
  ('Sandra Kilmer', 4),
  ('Julia Mcqueen', NULL);

-- perform full outer join
SELECT
  employee_name,
  department_name
FROM
  employees e
  FULL OUTER JOIN departments d ON d.department_id = e.department_id;
{{</highlight>}}

#### Data types

One major difference is the naming of data types. To convert safely, refer to [MySQL to PostgreSQL Types Mapping](https://www.convert-in.com/mysql-to-postgres-types-mapping.htm). This is a major obstacle when porting SQL scripts, better use a tool like [pgloader](https://pgloader.io/) which has built-in conversion logic for a variety of input formats. 

#### Geospatial data

This is a crucial functionality for the [AppJobber](https://appjobber.de/) application, which allows people to see all available micro jobs in their selected map range. So this runs down to selecting entries from a large table within a bounding box. While _MySQL_ has built-in support for [geospatial data types](https://dev.mysql.com/doc/refman/8.0/en/spatial-types.html), _PostgreSQL_ uses the [PostGIS](https://postgis.net/) extension. The Boston Geographic Information Systems did a detailed [comparison of geospatial features between MS SQL Server, MySQL and PostgreSQL/PostGIS](http://www.bostongis.com/PrinterFriendly.aspx?content_name=sqlserver2008_postgis_mysql_compare), which seems a bit outdated. 

So I was running a sample bounding-box query on all available jobs, using a bounding box around Darmstadt. It took _MySQL_ roughly a second to complete the query, _PostgreSQL_ did it in less then 400&thinsp;ms. However, the two queries were a bit different, as _MySQL_ had location data readily stored as blob and _PostgreSQL_ used a converted [geometric point type](https://www.postgresql.org/docs/9.3/datatype-geometric.html). 

#### Performance

There is ample discussion about performance, most favoring _MySQL_ for read-heavy loads and _PostgreSQL_ for read/write-heavy applications. So this depends very much on the application in question. 

## Conclusion

After all, I hoped to show that _PostgreSQL_ is a viable alternative to _MySQL_ with more advanced features. 