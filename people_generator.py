from faker import Faker
import json
import pickle
import random
from datetime import datetime

import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split


def gen_people(filename, n):
    # Found average household salaries from all counties in CT and MA for 2022
    # Income is adjusted lower for employees in hr and higher for managers
    ct_counties = {
        "Fairfield": "110358",
        "Hartford": "77340",
        "Litchfield": "83820",
        "Middlesex": "93170",
        "New Haven": "76813",
        "New London": "81857",
        "Tolland": "91242",
        "Windham": "69011"
    }
    ma_counties = {
        "Norfolk": "84916",
        "Middlesex": "82090",
        "Barnstable": "60526",
        "Plymouth": "75092",
        "Essex": "67311",
        "Dukes": "66288",
        "Suffolk": "53540",
        "Worcester": "65223",
        "Hampshire": "61227",
        "Berkshire": "48450",
        "Franklin": "53663",
        "Bristol": "55298",
        "Hampden": "49094"
    }
    random.seed(datetime.now().timestamp())
    Faker.seed(datetime.now().timestamp())
    fake = Faker()

    data = []
    managers = []
    for i in range(n):
        person = {}
        person['id'] = i
        person['first_name'] = fake.first_name()
        person['last_name'] = fake.last_name()
        position_roll = random.random()
        if position_roll <= 0.6:
            person['role'] = 'basic'
        elif position_roll <= 0.85:
            person['role'] = 'hr'
        else:
            person['role'] = 'manager'
        person['manager_id'] = ''
        
        state_roll = random.randint(0, 1)
        state_salaries = {}
        if state_roll == 0:
            person['state'] = 'CT'
            state_salaries = ct_counties
        else:
            person['state'] = 'MA'
            state_salaries = ma_counties
        county, salary = random.choice(list(state_salaries.items()))
        salary = int(salary)

        person['county'] = county
        salary_adjusted = 0
        if person['role'] == 'basic':
            salary_adjust = int(max(salary * 0.2, np.random.normal(salary, salary * 0.15)))
        elif person['role'] == 'hr':
            center = salary - 10000
            salary_adjust = int(max(center * 0.2, np.random.normal(center, center * 0.07)))
        elif person['role'] == 'manager':
            center = salary + (salary * 0.25)
            salary_adjust = int(max(center * 0.2, np.random.normal(center, center * 0.07)))
        person['salary'] = salary_adjust
        data.append(person)
        if person['role'] == 'manager':
            managers.append(person)

    print(len(managers))
    # Randomly make someone this persons manager
    for p in data:
        if p['role'] == 'manager':
            p['manager_id'] = p['id']
        else:
            manager_ind = random.randint(0, len(managers) - 1)
            p['manager_id'] = managers[manager_ind]['id']

    with open(filename, 'w') as f:
        json.dump(data, f, indent=2)



def create_predictor_model(people_data_file, model_save_file):
    people_data = pd.read_json(people_data_file)
    # print(people_data)
    
    X = pd.get_dummies(people_data[['role', 'county']])
    y = people_data[['salary']]
    print(X.shape)
    print(y.shape)

    # ACCURACY SCORE WITH 20% TEST DATA = 78.5%
    # X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.1, random_state=42)
    model = LinearRegression()
    model.fit(X, y)
    # print(model.score(X_test, y_test))

    with open(model_save_file, 'wb') as file:
        pickle.dump((X.columns.to_list(), model), file)


# gen_people('people_data.json', 10000)
create_predictor_model('people_data.json', 'salary_predictor.pkl')
