# app.py
from flask import Flask, render_template

app = Flask(__name__)

# route for home page
@app.route('/')
def home():
    return render_templates('home.html')

@app.route('/predictions')
def predictions():
    return render_templates('predictions.html')


if __name__ == "__main__":
    app.run(debug=True)
