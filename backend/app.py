from flask import Flask, request, jsonify
from flask_cors import CORS
from models import db, connect_db, Seller, Lead, Seller_Lead
import os

app = Flask(__name__)
app.config["SECRET_KEY"] = os.environ.get(
    "SECRET_KEY", "secret key should be in environment"
)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', 'postgresql:///RE_CRM')
CORS(app)
connect_db(app)


@app.route("/new_lead", methods=["POST"])
def new_lead():
    """New lead submission accepted and added to database."""
    try:
        data = request.get_json()

        # new seller input data
        first = data["first"]
        last = data["last"]
        phone = data["phone"]
        email = data["email"]

        # new address input data
        address = data["address"]
        city = data["city"]
        state = data["state"]
        zipcode = data["zipcode"]
        
        # if the seller is not already in the database, lets add them in
        if not len(Seller.query.filter_by(email=email).all()):
            new_seller = Seller(first=first, last=last, phone=phone, email=email)
            db.session.add(new_seller)

        # create the new property lead for our database
        new_lead = Lead(address=address, city=city, state=state, zipcode=zipcode)
        db.session.add(new_lead)

        db.session.commit()

        # add connection between seller and lead
        db_seller = Seller.query.filter_by(email=email).first()
        db_lead = Lead.query.filter_by(address=address, city=city).first()
        seller_lead_connection = Seller_Lead(seller_id=db_seller.id, lead_id=db_lead.id)
        db.session.add(seller_lead_connection)
        db.session.commit()

        return jsonify(data)

    except:
        return