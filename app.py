from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
from flask import jsonify
import json
from bson.json_util import dumps

# Create an instance of Flask
app = Flask(__name__)

# Use PyMongo to establish Mongo connection
app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/macro_db"
client = PyMongo(app)

# Declare the unemployment rate collection
unemployment = client.db.unemployment

# Declare the per capita income collection
percapincome = client.db.percapincome

# Declare the minimum wage collection
minimum_wage = client.db.minimum_wage


@app.route("/")
def home():

    # Return template and data
    return render_template("index.html")

@app.route("/api/unemployment")
def unemployment():

    docs = []
    # Find one record of data from the mongo database
    for doc in client.db.unemployment.find():
        docs.append(doc['meta'])

    return jsonify(docs)
    

@app.route("/api/percapincome")
def percapincome():

    docs = []
    # Find one record of data from the mongo database
    for doc in client.db.percapincome.find():
        docs.append(doc['meta'])

    return jsonify(docs)

@app.route("/api/minimum_wage")
def minimum_wage():

    docs = []
    # Find one record of data from the mongo database
    for doc in client.db.minimum_wage.find():
        docs.append(doc['meta'])

    return jsonify(docs)

if __name__ == "__main__":
    app.run(debug=True)




