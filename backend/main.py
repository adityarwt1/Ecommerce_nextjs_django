from flask import Flask, jsonify
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

if __name__ == "__main__":
    app.run(debug=True)
