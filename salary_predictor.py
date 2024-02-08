import json
import pickle

import pandas as pd
from sklearn.linear_model import LinearRegression


def predict_salary(args):
    params, model = pickle.load(open('salary_predictor.pkl', 'rb'))
    print(params)


# test_X = pd.get_dummies(test_data_in[['homeworld', 'unit_type']])

# predictions = pickled_model.predict(test_X)
# test_data_in['Predictions'] = predictions
# print(test_data_in)