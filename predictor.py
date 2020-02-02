# -*- coding: utf-8 -*-
"""
Created on Sun Feb  2 11:17:04 2020

@author: manthi
"""

import numpy as np
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures
from sklearn.pipeline import make_pipeline
from numpy import savetxt

data = pd.read_csv('path')
weights = pd.read_csv('weights.csv')

M = 3
poly_model = make_pipeline(PolynomialFeatures(M),LinearRegression())

predictions = poly_model.predict(data);
savetxt('predictions.csv', predictions, delimiter=',')