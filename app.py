from flask import Flask, jsonify, render_template, redirect, request, send_from_directory
from sqlalchemy import create_engine, func
from sqlalchemy.orm import Session
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
import os
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config['JSON_SORT_KEYS'] = False

# DATABASE_URL will contain the database connection string:
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', 'postgres://xyapznezeaqswq:563af6f1a293c52937083ed16940c84d274b616f8e2202c9cd74c95ae39916b8@ec2-52-21-252-142.compute-1.amazonaws.com:5432/d4g7j0al3kor5t')
# Connects to the database using the app config
db = SQLAlchemy(app)

def confg():
    engine = create_engine(
        'postgres://xyapznezeaqswq:563af6f1a293c52937083ed16940c84d274b616f8e2202c9cd74c95ae39916b8@ec2-52-21-252-142.compute-1.amazonaws.com:5432/d4g7j0al3kor5t')
    Base = automap_base()
    Base.prepare(engine, reflect=True)
    Base.classes.keys()
    arrivals = Base.classes.clean_arrivals
    revenues = Base.classes.clean_revenues
    session = Session(engine)

    return Base, arrivals, revenues, session


@app.route("/tourism_arr", methods=["GET"])
def handler_arrival_data():

    Base, arrivals, revenues, session = confg()
    arrivals = Base.classes.clean_arrivals
    arrival = session.query(arrivals).all()
    features = []
    for i in arrival:
        feature_dict = {}
        feature_dict['type'] = 'Feature'
        feature_dict['geometry'] = {
            'type': 'Point',
            'coordinates': [(i.longitude), (i.latitude)]
        }
        feature_dict['properties'] = {
            'country': i.country,
            'country_code': i.country_code,
            "1995": float(i.total_arrivals_1995),
            "1996": float(i.total_arrivals_1996),
            "1997": float(i.total_arrivals_1997),
            "1998": float(i.total_arrivals_1998),
            "1999": float(i.total_arrivals_1999),
            "2000": float(i.total_arrivals_2000),
            "2001": float(i.total_arrivals_2001),
            "2002": float(i.total_arrivals_2002),
            "2003": float(i.total_arrivals_2003),
            "2004": float(i.total_arrivals_2004),
            "2005": float(i.total_arrivals_2005),
            "2006": float(i.total_arrivals_2006),
            "2007": float(i.total_arrivals_2007),
            "2008": float(i.total_arrivals_2008),
            "2009": float(i.total_arrivals_2009),
            "2010": float(i.total_arrivals_2010),
            "2011": float(i.total_arrivals_2011),
            "2012": float(i.total_arrivals_2012),
            "2013": float(i.total_arrivals_2013),
            "2014": float(i.total_arrivals_2014),
            "2015": float(i.total_arrivals_2015),
            "2016": float(i.total_arrivals_2016),
            "2017": float(i.total_arrivals_2017),
            "2018": float(i.total_arrivals_2018),
            "2019": float(i.total_arrivals_2019)

        }
        features.append(feature_dict)
    arrivals_dict = {}
    arrivals_dict['type'] = 'FeatureCollection'
    arrivals_dict['features'] = features
    return arrivals_dict


@app.route("/tourism_revenue", methods=["GET"])
def handler_revenue_data():

    Base, arrivals, revenues, session = confg()
    revenues = Base.classes.clean_revenues
    revenue = session.query(revenues).all()
    features = []
    for i in revenue:
        feature_dict = {}
        feature_dict['type'] = 'Feature'
        feature_dict['geometry'] = {
            'type': 'Point',
            'coordinates': [(i.longitude), (i.latitude)]
        }
        feature_dict['properties'] = {
            'country': i.country,
            'country_code': i.country_code,
            "1995": float(i.total_revenues_1995),
            "1996": float(i.total_revenues_1996),
            "1997": float(i.total_revenues_1997),
            "1998": float(i.total_revenues_1998),
            "1999": float(i.total_revenues_1999),
            "2000": float(i.total_revenues_2000),
            "2001": float(i.total_revenues_2001),
            "2002": float(i.total_revenues_2002),
            "2003": float(i.total_revenues_2003),
            "2004": float(i.total_revenues_2004),
            "2005": float(i.total_revenues_2005),
            "2006": float(i.total_revenues_2006),
            "2007": float(i.total_revenues_2007),
            "2008": float(i.total_revenues_2008),
            "2009": float(i.total_revenues_2009),
            "2010": float(i.total_revenues_2010),
            "2011": float(i.total_revenues_2011),
            "2012": float(i.total_revenues_2012),
            "2013": float(i.total_revenues_2013),
            "2014": float(i.total_revenues_2014),
            "2015": float(i.total_revenues_2015),
            "2016": float(i.total_revenues_2016),
            "2017": float(i.total_revenues_2017),
            "2018": float(i.total_revenues_2018),
            "2019": float(i.total_revenues_2019)

        }
        features.append(feature_dict)
    revenues_dict = {}
    revenues_dict['type'] = 'FeatureCollection'

    revenues_dict['features'] = features
    return revenues_dict


@app.route("/arrivals_map")
def arrivals():
    return render_template("index_arrivals.html")


@app.route("/revenues_map")
def revenues():
    return render_template("index_revenues.html")


@app.route("/")
def index():
    return render_template("index.html")


@app.route('/static/<path:path>')
def send_js(path):
    return send_from_directory('static', path)


@app.after_request
def add_header(r):
    """
    Add headers to both force latest IE rendering engine or Chrome Frame,
    and also to cache the rendered page for 10 minutes.
    """
    r.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    r.headers["Pragma"] = "no-cache"
    r.headers["Expires"] = "0"
    r.headers['Cache-Control'] = 'public, max-age=0'
    return r


if (__name__) == '__main__':
    app.debug = True
    app.run()
