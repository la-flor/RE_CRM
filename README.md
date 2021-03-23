# General
This website and web app features a functional CRM for tracking real estate leads for real estate investors or wholesalers.

The website features information about the company and their aquisition process.  This serves as a funnel in marketing the business and features a submission form for potential sellers to provide contact information and basic information on their property.

The administration has a seperate web app that allows them to track and document leads through the process of speaking with the potential sellers.

The initial deployment will be soley a frontend user website that allows them to submit leads to be added to our database.  Future deployments will include the admin user interface for more advanced features and functionality.

## Getting Started
while in the backend directory in your terminal interface:  

```bash
createdb RE_CRM
python3 -m venv venv
. venv/bin/activate
pip install -r requirements.txt
python3 seed.py
flask run
```

while in the frontend directory in your terminal interface:  

```bash
npm install
npm start
```

## Code

The frontend is intended to be written in React while the backend will be written in Python.

## Sneak Peak
Here's a link to check out a mockup of the frontend admin web app and the website targeted for homeowners (potential sellers).  

[Figma Mockup](https://www.figma.com/file/Fg7EdGPna0HIXhIKU7hh01/RE_CRM?node-id=0%3A1)  

> Hold cmd while scrolling to zoom in and out.  

> Use a click and drag method (or use your scroll wheel alone) to move along the x and y axis.