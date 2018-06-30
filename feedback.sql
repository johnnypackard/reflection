CREATE TABLE "feedback" (
"id" serial primary key,
"feelings" INTEGER not null,
"comprehension" INTEGER not null,
"support" INTEGER not null,
"comments" text,
"date" date not null default CURRENT_TIMESTAMP
);

-- example
INSERT INTO "feedback" ("feelings", "comprehension", "support", "comments", "date")
VALUES (5, 5, 5, 'I love this assignment!', '06/30/2018');