# app.py
from flask import Flask, render_template

app = Flask(__name__)

# route for home page
@app.route('/')
def home():
    return "Welcome to the predictor!"

if __name__ == "__main__":
    app.run(debug=True)
