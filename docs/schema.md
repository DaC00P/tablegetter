# Schema Information

## Restaurants
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
description | text      | not null
chef        | string    | not null

## Reservations
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
restaurant_id| integer   | not null, foreign key (references users), indexed
datetime    | string    | not null
description | text    |

## Reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
restaurant_id| integer   | not null, foreign key (references users), indexed
datetime    | string    | not null
title       | string    |
description | text    |


## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

##JOIN TABLES##

## user_reservations
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, indexed, unique
restaurant_id   | integer   | not null
datetime        | string    | not null, indexed, unique

## user_reviews
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, indexed, unique
review_id       | integer   | not null
