CREATE DATABASE "feedback";

CREATE TABLE "feedback" (
"id" serial primary key,
"feelings" INTEGER not null,
"comprehension" INTEGER not null,
"support" INTEGER not null,
"comments" text
);

-- example
INSERT INTO "feedback" ("feelings", "comprehension", "support", "comments")
VALUES (5, 5, 5, 'I love this assignment!');