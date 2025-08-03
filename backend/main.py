from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_pymongo import PyMongo
import os
from dotenv import load_dotenv
from bson.objectid import ObjectId
#jwt setup 
from flask_jwt_extended import (
    JWTManager, create_access_token,
    jwt_required, get_jwt_identity
)

#bcrypt js setup 

import bcrypt
# Load environment variables
load_dotenv()

app = Flask(__name__)

# MongoDB config
app.config["MONGO_URI"] = os.getenv("MONGO_URI")
mongo = PyMongo(app)

#jwt configaration 
app.config['JWT_SECRET_KEY'] = os.getenv("JWT_SECRET_KEY")

jwt = JWTManager(app)
# CORS
allowed_origin = os.getenv("ALLOWED_ORIGIN", "*")
CORS(app, origins=[allowed_origin])

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/hello")
def hello():
    return jsonify({"message": "Hello from JSON!", "status": "success"})

@app.route("/signup", methods=["POST"])
def create_user():
    body = request.get_json()

    # Extracting the data from the body
    lastname = body.get("lastname")
    firstname = body.get("firstname")
    email = body.get("email")
    password = body.get("password")
    phonenumber = body.get("phonenumber")

    # Check for missing fields
    if not all([firstname, lastname, email, password, phonenumber]):
        return jsonify({"error": "Missing fields"}), 400

    #hashing the password for the trust
    hashedPassword = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

    # Define your schema (as a dictionary)
    user_data = {
        "firstname": firstname,
        "lastname": lastname,
        "email": email,
        "password": hashedPassword,
        "phonenumber": phonenumber
    }

    # Insert the user into a collection called "users"
    result = mongo.db.users.insert_one(user_data)

    return jsonify({
        "message": "Signup successful",
        "user_id": str(result)
    }), 201

if __name__ == "__main__":
    app.run(debug=True)
