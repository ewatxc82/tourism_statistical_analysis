-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/oDD6H3
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "clean_location" (
    "country" VARCHAR,   NOT NULL,
    "latitude" numeric,   NOT NULL,
    "longitude" numeric,   NOT NULL,
    "country_code" VARCHAR,   NOT NULL,
    "continent_Name" VARCHAR   NOT NULL,
    CONSTRAINT "pk_clean_location" PRIMARY KEY (
        "country_code"
     )
);

CREATE TABLE "clean_book" (
    "country_code" VARCHAR,   NOT NULL,
    "country_code2" VARCHAR   NOT NULL,
    CONSTRAINT "pk_clean_book" PRIMARY KEY (
        "country_code"
     )
);

CREATE TABLE "clean_arrivals" (
    "country_code" VARCHAR,   NOT NULL,
    "total_arrivals_1995" numeric,   NOT NULL,
    "total_arrivals_1996" numeric,   NOT NULL,
    "total_arrivals_1997" numeric,   NOT NULL,
    "total_arrivals_1998" numeric,   NOT NULL,
    "total_arrivals_1999" numeric,   NOT NULL,
    "total_arrivals_2000" numeric,   NOT NULL,
    "total_arrivals_2001" numeric,   NOT NULL,
    "total_arrivals_2002" numeric,   NOT NULL,
    "total_arrivals_2003" numeric,   NOT NULL,
    "total_arrivals_2004" numeric,   NOT NULL,
    "total_arrivals_2005" numeric,   NOT NULL,
    "total_arrivals_2006" numeric,   NOT NULL,
    "total_arrivals_2007" numeric,   NOT NULL,
    "total_arrivals_2008" numeric,   NOT NULL,
    "total_arrivals_2009" numeric,   NOT NULL,
    "total_arrivals_2010" numeric,   NOT NULL,
    "total_arrivals_2011" numeric,   NOT NULL,
    "total_arrivals_2012" numeric,   NOT NULL,
    "total_arrivals_2013" numeric,   NOT NULL,
    "total_arrivals_2014" numeric,   NOT NULL,
    "total_arrivals_2015" numeric,   NOT NULL,
    "total_arrivals_2016" numeric,   NOT NULL,
    "total_arrivals_2017" numeric,   NOT NULL,
    "total_arrivals_2018" numeric,   NOT NULL,
    "total_arrivals_2019" numeric   NOT NULL,
    CONSTRAINT "pk_clean_arrivals" PRIMARY KEY (
        "country_code"
     )
);

CREATE TABLE "clean_revenues" (
    "country_code" VARCHAR,   NOT NULL,
    "total_revenues_1995" numeric,   NOT NULL,
    "total_revenues_1996" numeric,   NOT NULL,
    "total_revenues_1997" numeric,   NOT NULL,
    "total_revenues_1998" numeric,   NOT NULL,
    "total_revenues_1999" numeric,   NOT NULL,
    "total_revenues_2000" numeric,   NOT NULL,
    "total_revenues_2001" numeric,   NOT NULL,
    "total_revenues_2002" numeric,   NOT NULL,
    "total_revenues_2003" numeric,   NOT NULL,
    "total_revenues_2004" numeric,   NOT NULL,
    "total_revenues_2005" numeric,   NOT NULL,
    "total_revenues_2006" numeric,   NOT NULL,
    "total_revenues_2007" numeric,   NOT NULL,
    "total_revenues_2008" numeric,   NOT NULL,
    "total_revenues_2009" numeric,   NOT NULL,
    "total_revenues_2010" numeric,   NOT NULL,
    "total_revenues_2011" numeric,   NOT NULL,
    "total_revenues_2012" numeric,   NOT NULL,
    "total_revenues_2013" numeric,   NOT NULL,
    "total_revenues_2014" numeric,   NOT NULL,
    "total_revenues_2015" numeric,   NOT NULL,
    "total_revenues_2016" numeric,   NOT NULL,
    "total_revenues_2017" numeric,   NOT NULL,
    "total_revenues_2018" numeric,   NOT NULL,
    "total_revenues_2019" numeric   NOT NULL,
    CONSTRAINT "pk_clean_revenues" PRIMARY KEY (
        "country_code"
     )
);

ALTER TABLE "clean_book" ADD CONSTRAINT "fk_clean_book_country_code" FOREIGN KEY("country_code")
REFERENCES "clean_location" ("country_code");

ALTER TABLE "clean_arrivals" ADD CONSTRAINT "fk_clean_arrivals_country_code" FOREIGN KEY("country_code")
REFERENCES "clean_book" ("country_code");

ALTER TABLE "clean_revenues" ADD CONSTRAINT "fk_clean_revenues_country_code" FOREIGN KEY("country_code")
REFERENCES "clean_arrivals" ("country_code");

