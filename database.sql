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

CREATE TABLE "address" (
"id" SERIAL PRIMARY KEY,
"street" VARCHAR (255) NOT NULL,
"city" VARCHAR (255) NOT NULL,
"state" VARCHAR (255) NOT NULL,
"zip" INT,
"isDefault" BOOLEAN DEFAULT FALSE,
"user_id" INT REFERENCES "user"
);

ALTER TABLE address RENAME COLUMN "isDefault" TO isdefault;

CREATE TABLE "products" (
"id" SERIAL PRIMARY KEY,
"image_1" VARCHAR (255) NOT NULL,
"image_2" VARCHAR (255) NOT NULL,
"image_3" VARCHAR (255) NOT NULL,
"name" VARCHAR (255) NOT NULL,
"description" VARCHAR (255) NOT NULL,
"price" NUMERIC (10, 2),
"featured_item" BOOLEAN DEFAULT FALSE
);

CREATE TABLE "orders" (
"id" SERIAL PRIMARY KEY,
"order_date" DATE, 
"address_id" INT REFERENCES "address",
"user_id" INT REFERENCES "user"
);

CREATE TABLE "line_items" (
"id" SERIAL PRIMARY KEY,
"quantity" INT,
"order_id" INT REFERENCES "orders",
"product_id" INT REFERENCES "products"
);

-- PRODUCT LIST

INSERT INTO "products" ("image_1", "image_2", "image_3", "name", "description", "price")
VALUES
('images/jungwon_bite_me_1.png', 'images/jungwon_bite_me_2.png', 'images/jungwon_bite_me_3.png', 'Jungwon - Bite Me', 'Dark Jungwon during Bite Me era.', 17.25),
('images/jungwon_sunshine_1.jpg', 'images/jungwon_sunshine_2.jpg', 'images/jungwon_sunshine_3.jpg', 'Jungwon - Sunshine', 'Fresh and bright like vitamin-C Jungwon.', 17.25),
('images/purple_clouds_1.JPEG', 'images/purple_clouds_2.JPEG', 'images/purple_clouds_3.JPEG', 'Purple Clouds', 'A heart filled with enchanted warm, dream-like place.', 16.50),
('images/pink_clouds_1.JPG', 'images/pink_clouds_2.JPG', 'images/all_hearts.JPG', 'Pink Clouds', 'A heart filled with enchanted warm, dream-like place.', 16.50),
('images/light_blue_clouds_1.JPG', 'images/light_blue_clouds_2.JPG', 'images/all_hearts.JPG', 'Lightblue Clouds', 'A heart filled with enchanted warm, dream-like place.', 16.50),
('images/black_clouds_1.JPG', 'images/black_clouds_2.JPG', 'images/all_hearts.JPG', 'Black Clouds', 'A heart filled with enchanted warm, dream-like place.', 16.50),
('images/baby_chick_1.JPG', 'images/baby_chick_2.JPG', 'images/baby_chick_3.png', 'Baby Chicken Friends', 'Tiny small yellow friends to keep you company', 17.00),
('images/love_1.JPG', 'images/love_2.JPG', 'images/love_3.JPG', 'Love Heart', 'Need an extract heart for someone? Here''s one for you!', 16.75),
('images/pink_angel_1.JPG', 'images/pink_angel_2.JPG', 'images/pink_angel_3.JPG', 'Pink Angel', 'Are you an angel?', 16.75),
('images/90s_kitsch_1.png', 'images/90s_kitsch_2.png', 'images/90s_kitsch_3.png', '90s Kitsch!', 'Want to be cool like us? Betcha!', 15.00),
('images/2000s_baby_1.png', 'images/2000s_baby_2.png', 'images/90s_baby_3.png', '2000s Baby!', 'What are you? Old? Young!? I''m MZ!', 15.00);
