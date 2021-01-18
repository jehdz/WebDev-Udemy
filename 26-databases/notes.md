# Databases

DBMS <br>
database management system 

## SQL

allows us to communicate just like http <br>
we are able to communicate w the database to update get or whatever we want <br>


# 2 types of DBMS <br>

### Relational Databases
1. postgreSQL
2. SQLite
3. Many othger more but these are one of the most popular ones

They consist of 2 or more tables with columns and rows

Users can be a table  <br>
full_name <br>
username <br>
text <br>
created_at  <br>
are all rows <br>

columns are preserved for very specific information <br>

### Non relational database / noSQL

mongoDB allows you to create a database without a schema <br>

non relational db are more like folders <br>

mongoDB is document oriented <br>

###### relational vs non relational 

1. A relational db table organizes structure data fields into defined columns
2. A non-relational db does not incorporate the table model. Instead, data can be stored in a single document file

mongo has its onw query language, thats how its able to communicate without SQL <br>


# PostgreSQL

**On the terminal** <br> 

`brew services start postgresql` --> to start using the service <br> 

`createdb "name of datatbase" ` --> creates a new database <br> 

`psql "name of database" ` --> connects the gui to the database <br> 

**How can we create a table?** <br> 

`CREATE TABLE table_name (column_1 datatype, column_2 datatype, column_3 datatype) ` <br>
`CREATE TABLE users (name text, age smallint, birthday date);` --> example  <br>

we can show the table on the terminal with the `\d` command. This returns a list of relations  <br>

we only run all these commands once. Thenits just matter of adding values to the db <br>

`\q` ==>exits the sql terminal and we are back at our desktop <br>


### How can we add information? <br>

`INSERT INTO table_name (column_1, column_2, column_3) VALUES (values_1, values_2, values_3);` <br>
`INSERT INTO users (name, age, birthday) VALUES ('jose', 21, '1999-08-28');` <br>

###### To retrieve all the data in our db we can use this query command 

`SELECT * FROM users;` <br>

to alter the table (add another row)  - `ALTER TABLE users ADD score smallint;` <br>

to update that score - `UPDATE users SET score = 50 WHERE name='jose';` <br>

###### What if i wanted to grab all users that start with the letter j? The % sign means anything after is free game <br>

`SELECT * FROM users WHERE name LIKE 'j%';`
 
###### What if we want to filter out by a row?

`SELECT * FROM users ORDER BY score DESC;` - Descending order, largest to smallest
`SELECT * FROM users ORDER BY score ASC;` - Ascending order, smallest to largers
`
# SQL FUNCTIONS

WHAT IF WE WANT TO GET THE AVERAGE SCORE OF THE USERS?

`SELECT AVG(score) FROME users;`

what is if we want to get the sum of a row?

`SELECT SUM(age) FROM users;`

What if we want to know how many users we have in our database? we can do 

`SELECT COUNT(name) FROM users;`

**These are the most common functions in SQL but there are a bunch more** 

-------------------

# JOINING TABLES 


`CREATE TABLE login (
    ID serial NOT NULL PRIMARY KEY,
    secrete VARCHAR (100) NOT NULL,
    name text UNIQUE NOT NULL
);`


to insert into this table we can do this - 
`INSERT INTO login (secret, name) VALUES ('lol', 'john');`

How can we grab information from other tables? <br>

we can use something called **JOIN**

we dont want one massive table with hundreds of columns and rows because it's not efficient 

a god way to define a db is to create smaller tables and joint tables together to get information <br>

what is a **lognin_id_sequence**?

when we create a PRIMARY KEY, it creates it. 

`SELECT * FROM users JOIN login ON users.name = login.name;`

# what if we want to delete something?

what if jose decides to remove himself from being a user?

she can send a request and on the back end we can use 

`DELETE FROM users WHERE name='jose';`


to delete and entire table we can use <br>
`DROP TABLE users; `




# Extra SQL practice

<https://www.codecademy.com/learn/learn-sql> <br>

<https://www.khanacademy.org/computing/computer-programming/sql> <br>



## There are different type of datatypes\d

1. Numeric types
2. Date/Time types
3. Character Types
4. JSON types
5. Monetary types
6. Binary types
7. Boolean
8. Geometric types
9. Enumaratred
10. Network access
11. Bit string 
12. Text search 
13. UUID
14. XML 
15. Arrays
16. Composite 
17. Range 
18. Object identifier
19. pg_isn 
20. Psuedo

Details can be found here <https://www.postgresql.org/docs/9.5/datatype.html> <br>