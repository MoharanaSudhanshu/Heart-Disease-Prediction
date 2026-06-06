from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)

model = joblib.load("heart_disease_model.pkl")

@app.route("/predict", methods=["POST"])
def predict():

    data = request.json

    features = np.array([[
        data["age"],
        data["sex"],
        data["cp"],
        data["trestbps"],
        data["chol"],
        data["fbs"],
        data["restecg"],
        data["thalach"],
        data["exang"],
        data["oldpeak"],
        data["slope"],
        data["ca"],
        data["thal"]
    ]])

    prediction = model.predict(features)[0]

    probability = model.predict_proba(features)[0][1]

    return jsonify({
        "prediction": int(prediction),
        "probability": round(float(probability)*100,2)
    })

if __name__ == "__main__":
    app.run(debug=True)