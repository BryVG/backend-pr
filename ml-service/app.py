from flask import Flask, request, jsonify

app = Flask(API-ML)

@app.route('/predict', methods=['POST'])

def predict():

    data = request.json

    result = {"fraude":False, "score": 0.10 }
    