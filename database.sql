-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (255) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "name" VARCHAR (255) UNIQUE NOT NULL,
    "email" VARCHAR (255) UNIQUE NOT NULL,
    "phone" VARCHAR (255) UNIQUE NOT NULL
);

CREATE TABLE "addresses" (
"id" SERIAL PRIMARY KEY,
"street" VARCHAR (255) NOT NULL,
"city" VARCHAR (255) NOT NULL,
"state" VARCHAR (255) NOT NULL,
"zip" INT,
"user_id" INT REFERENCES "user"
);

INSERT INTO "addresses" ("street", "city", "state", "zip")
VALUES ('1234 Main Street', 'New York', 'New York', 10044);

CREATE TABLE "products" (
"id" SERIAL PRIMARY KEY,
"image_url_1" VARCHAR (255) NOT NULL,
"image_url_2" VARCHAR (255) NOT NULL,
"image_url_3" VARCHAR (255) NOT NULL,
"name" VARCHAR (255) NOT NULL,
"description" VARCHAR (255) NOT NULL,
"price" FLOAT
);

-- Price value: recommended by Ryan --> use a float: ALTER TABLE table_name ALTER COLUMN column_name TYPE DOUBLE PRECISION;

INSERT INTO "products" ("image_url_1", "image_url_2", "image_url_3", "name", "description", "price")
VALUES 
('jungwon_bite_me_1.png', 'jungwon_bite_me_2.png', 'jungwon_bite_me_3.png', 'Jungwon "Bite Me"', 'Dark Jungwon during "Bite Me" era.', 17.25),
('jungwon_sunshine_1.jpg', 'jungwon_sunshine_1.jpg', 'jungwon_sunshine_1.jpg', 'Jungwon "Sunhine"', 'Fresh and bright like vitamin-C Jungwon.', 15.75);


CREATE TABLE "orders" (
"id" SERIAL PRIMARY KEY,
"order_date" DATE NOT NULL,
"address_id" INT REFERENCES "addresses",
"user_id" INT REFERENCES "user"
);

CREATE TABLE "line_items" (
"id" SERIAL PRIMARY KEY,
"quantity" INT,
"order_id" INT REFERENCES "orders",
"product_id" INT REFERENCES "products"
);

CREATE TABLE "featured_items" (
"id" SERIAL PRIMARY KEY, 
"image_url" VARCHAR (255) NOT NULL
);

INSERT INTO "featured_items" ("image_url")
VALUES 
('jungwon_bite_me_1.png'),
('jungwon_sunshine_1.jpg');



DROP TABLE "addresses";
DROP TABLE "line_items";
DROP TABLE "orders";
DROP TABLE "products";
DROP TABLE "user";
