from flask import Flask, jsonify , request 
from flask_cors import CORS
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)

# Read the allowed origin from env
allowed_origin = os.getenv("ALLOWED_ORIGIN", "*")  # fallback to * if not set

# Apply CORS
CORS(app, origins=[allowed_origin])

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/hello")
def hello():
    data = {
        "message": "Hello from JSON!",
        "status": "success"
    }
    return jsonify(data)


@app.route("/signup", methods=["POST"])
def create_user():
    if request.method == "POST":
        body = request.get_json()
        #extracting the data from the body
        lastname = body.get("lastname")
        firstname = body.get("firstname")
        email = body.get("email")
        password = body.get("password")
        phonenumber = body.get("phonenumber")

        #if field is data not found 

        if not all([firstname, lastname, email, password, phonenumber]):
            return jsonify({"error": "bad request"}), 400
        print("This request is POST")
        return jsonify({"message": "Signup successful" , "data": hello})
    
if __name__ == "__main__":
    app.run(debug=True)
