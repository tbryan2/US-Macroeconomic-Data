from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
import scrape_costa

# Create an instance of Flask
app = Flask(__name__)

# Use PyMongo to establish Mongo connection
mongo = PyMongo(app, uri="mongodb://localhost:27017/macro_db")

# Build the MongoDB database and collections
conn = 'mongodb://localhost:27017'
client = pymongo.MongoClient(conn)

# Declare the database
db = client.macro_db

# Declare the unemployment rate collection
unemployment = db.unemployment

# Collecting unemployment data
for date in db.unemployment

myquery = { "id": { "$gt": "S" } }


# Declare the per capita income collection
percapincome = db.percapincome

# Declare the minimum wage collection
minimum_wage = db.minimum_wage
# Route to render index.html template using data from Mongo
@app.route("/")
def home():

    # Find one record of data from the mongo database
    data = mongo.db.collection.find_one()
    
    #for loop for each collection

    # Return template and data
    return render_template("index.html", data)

@app.route("api/unemployment")
def unemployment():

    # Find one record of data from the mongo database
    data = mongo.db.unemployment.find()
    
##### MENTAL NOTE: RETURN HERE AFTER JAVA

    return jsonify(data)

@app.route("api/percapincome")
def percapincome():

    # Find one record of data from the mongo database
    data = mongo.db.percapincome.find()
    
    #for loop for each collection
    # Return template and data
    return jsonify(data)

@app.route("api/minimum_wage")
def minimum_wage():

    # Find one record of data from the mongo database
    data = mongo.db.minimum_wage.find()
    
    #for loop for each collection
    # Return template and data
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)
