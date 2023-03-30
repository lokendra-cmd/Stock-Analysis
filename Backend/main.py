from flask import Flask,jsonify,request
import numpy as np
import pandas as pd
import json
import keras
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route('/predict', methods =['POST'])
def result():
    symbol = request.json['symbol']
    df = pd.read_csv('Stock_Data.csv')
    df=df.drop(df.columns[0], axis=1)
    new = df[df['Symbol']==symbol]
    res = new.to_dict()
    
    return jsonify(res)

if __name__ == "__main__":
    app.run(debug=True)