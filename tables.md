# Modelo das tabelas

## Categories
* id INT
* name STRING
* status BOOLEAN

## Products
* id INT
* name STRING
* description STRING
* price DECIMAL
* discount_price DECIMAL
* status BOOLEAN

## People
* id INT
* name STRING
* email STRING
* password STRING
* address STRING
* phone STRING
* CEP STRING
* status BOOLEAN

## WishList
* id INT
* People.id INT
* Products.id INT
* status BOOLEAN