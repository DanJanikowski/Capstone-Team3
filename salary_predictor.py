import json
import pickle

import pandas as pd
from sklearn.linear_model import LinearRegression
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/predict', methods=['POST'])
def predict_salary():
    params, model = pickle.load(open('salary_predictor.pkl', 'rb'))

    data = request.get_json()
    county = data['county']
    role = data['role']

    if 'county_' + county not in params:
        return jsonify({'Error': 'Invalid County'})
    
    if 'role_' + role not in params:
        return jsonify({'Error': 'Invalid Role'})

    input = {}
    for i in params:
        if role in i or county in i:
            input[i] = 1
        else:
            input[i] = 0
    
    input_df = pd.DataFrame({}, columns=params)
    input_df = input_df.append(input, ignore_index=True)
    
    pred_salary = model.predict(input_df)
    return jsonify({'predicted_salary': int(pred_salary)})

if __name__ == '__main__':
    app.run(debug=True)