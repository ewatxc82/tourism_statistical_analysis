# Statistical Analysis of European Tourism 1995-2019

Project Name: Tourism In Europe: 1995-2019

Contributors: Haifa Nadjawi, Claude Hnafou, Erik Watson, Jay Freeman

## Project Goal:

The main goal of this project is to plot and provide insight regarding publicly available tourism data in Europe. Our main areas of concentration include the number of arrivals documented and tourism specific revenue generated for each European country available in our dataset. We seek to better understand the economic impact of tourism in various European countries over our selected time period, 1995-2019, and shed light on which countries generated the most tourist traffic and revenues.

## Data Used

- World Bank: International tourism, receipts (current US$) https://data.worldbank.org/indicator/ST.INT.RCPT.CD
- World Bank: International tourism, number of arrivals https://data.worldbank.org/indicator/ST.INT.ARVL
- Techslides: List of Countries and Capitals (including coordinates) http://techslides.com/list-of-countries-and-capitals

The first part of the data from this project comes from https://data.worldbank.org/ where data was found in different formats and the format we chose were csv files. There are 4 csv files containing information about revenues on tourism and arrivals(which accounts for tourist arrival)
the project is primarily based on data provided by https://data.worldbank.org/indicator/ST.INT.RCPT.CD. The data contains tourist traces of millions of anonymized foreign visitors roaming Europe. This was detected in the form of receipts(revenues) and tourists arrivals in different European countries from 1995 -2019.

The second part of the data comes from the Techslides website where the latitude and longitude for the different countries in Europe are going to extracted.
http://techslides.com/list-of-countries-and-capitals

## Technologies Used

-Pandas
-Flask
-SQLAlchemy
-Postgres
-HTML
-CSS
-Bootstrap
-Javascript
-D3
-Plotly
-Choropleth
-Heroku
-JQuery
-Ajax

## Processes

### ETL Process

- We created CSV files for tourism arrivals, revenues and location
- Country were used to find European countries
- Pandas was utilized to clean data and create data frames
- Datframes were connected to SQL using Postgres and a Tourism Database was created

### Data Routes

- Flask was used to created connection to the Postgres database
- Routes were used to query the database and create a dictionary

### Website Design

- Bootstrap was used to create a theme for the page
- Javascript files contain code for creating the plots on our maps

![eurosite_1](https://media.giphy.com/media/77hnj5lZFkppdWrvqS/giphy.gif)

### Visualizations

#### Map 1 - Tourism Arrivals
![euro_map_1](https://media.giphy.com/media/4XUSjIp1ebkwxnvRV3/giphy.gif)

- JQuery and Ajax were used to create a map that plots tourism-related arrivals from 1995-2019 in European countries we collected data on. A slider is placed in the lower left corner to enable to user to cycle through each year in the dataset. 

#### Map 2 - Tourism Receipts
![euro_map_2](https://media.giphy.com/media/3J9LGtrFENusv3m0Hq/giphy.gif)

-J Query and Ajax were used to create a map that plots growth or contraction of tourism revenue from 1995-2019 in European countries within the dataset. We've used the same slider and you can hover over each country to gather information on the year and amount of tourism receipts in the year.

#### Choropleth Maps
![euro_map_3](https://media.giphy.com/media/KilWKKuxpqDzvr8mNd/giphy.gif)

![euro_map_4](https://media.giphy.com/media/KilWKKuxpqDzvr8mNd/giphy.gif)

- Choropleth was used to present a differnt perspective of the data. A slider was initiated to allow the user to scroll through each year in the dataset
