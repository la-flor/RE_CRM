from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
app.config["SECRET_KEY"] = os.environ.get("SECRET_KEY", "secret key should be in environment")
CORS(app)


@app.route("/new_lead", methods=["POST"])
def new_lead():
    """New lead submission accepted and added to database."""
    data = request.get_json()
    return jsonify(data)