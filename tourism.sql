DROP TABLE IF EXISTS clean_arrivals;
DROP TABLE IF EXISTS clean_revenues;


CREATE TABLE clean_arrivals (
country	VARCHAR,
latitude VARCHAR,	
longitude VARCHAR,
continent_name VARCHAR,	
country_code VARCHAR PRIMARY KEY,
total_arrivals_1995 numeric,
total_arrivals_1996 numeric,
total_arrivals_1997 numeric,
total_arrivals_1998 numeric,
total_arrivals_1999 numeric,
total_arrivals_2000 numeric,
total_arrivals_2001 numeric,
total_arrivals_2002 numeric,
total_arrivals_2003 numeric,
total_arrivals_2004 numeric,
total_arrivals_2005 numeric,
total_arrivals_2006 numeric,
total_arrivals_2007 numeric,
total_arrivals_2008 numeric,
total_arrivals_2009 numeric,
total_arrivals_2010 numeric,
total_arrivals_2011 numeric,
total_arrivals_2012 numeric,
total_arrivals_2013 numeric,
total_arrivals_2014 numeric,
total_arrivals_2015 numeric,
total_arrivals_2016 numeric,
total_arrivals_2017 numeric,
total_arrivals_2018 numeric,
total_arrivals_2019 numeric

);

CREATE TABLE clean_revenues (
	
country	VARCHAR,
latitude VARCHAR,	
longitude VARCHAR,
continent_name VARCHAR,    
country_code VARCHAR PRIMARY KEY,
total_revenues_1995 numeric,
total_revenues_1996 numeric,
total_revenues_1997 numeric,
total_revenues_1998 numeric,
total_revenues_1999 numeric,
total_revenues_2000 numeric,
total_revenues_2001 numeric,
total_revenues_2002 numeric,
total_revenues_2003 numeric,
total_revenues_2004 numeric,
total_revenues_2005 numeric,
total_revenues_2006 numeric,
total_revenues_2007 numeric,
total_revenues_2008 numeric,
total_revenues_2009 numeric,
total_revenues_2010 numeric,
total_revenues_2011 numeric,
total_revenues_2012 numeric,
total_revenues_2013 numeric,
total_revenues_2014 numeric,
total_revenues_2015 numeric,
total_revenues_2016 numeric,
total_revenues_2017 numeric,
total_revenues_2018 numeric,
total_revenues_2019 numeric

);



SELECT * FROM clean_arrivals;
SELECT * FROM clean_revenues;


