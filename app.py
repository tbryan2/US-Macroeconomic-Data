from flask import Flask, render_template, redirect, jsonify
import pymongo
import json
from bson.json_util import dumps

# Create an instance of Flask
app = Flask(__name__)

# Route to render index.html template using data from Mongo
@app.route("/")
def home():    

    # Return template and data
    return render_template("index.html")

@app.route("/api/unemployment")
def unemployment():
    
    conn = 'mongodb://localhost:27017'
    client = pymongo.MongoClient(conn)

    # Declare the database
    db = client.macro_db

    # Declare the unemployment rate collection
    unemployment = db.unemployment
    unemployment_data = dumps(list(unemployment.find()))

    return jsonify(unemployment_data)

@app.route("/api/percapincome")
def percapincome():
    # Build the MongoDB database and collections
    conn = 'mongodb://localhost:27017'
    client = pymongo.MongoClient(conn)

    # Declare the database
    db = client.macro_db

    # Declare the per capita income collection
    percapincome = db.percapincome
    percapincome_data = dumps(list(percapincome.find()))

    # Return template and data
    return jsonify(percapincome_data)

@app.route("/api/minimum_wage")
def minimum_wage():
     # Build the MongoDB database and collections
    conn = 'mongodb://localhost:27017'
    client = pymongo.MongoClient(conn)

    # Declare the database
    db = client.macro_db

    # Declare the minimum wage collection
    minimum_wage = db.minimum_wage
    minimum_wage_data = dumps(list(minimum_wage.find()))

    # Return template and data
    return jsonify(minimum_wage_data)

if __name__ == "__main__":
    app.run(debug=True)