# -*- coding: utf-8 -*-
"""
Created on Sun Feb  2 10:43:12 2020

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

######Dividing the data
X, y = data.iloc[:,0:4].values,  data.iloc[:,4].values
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
#Normalising all the data
scale = StandardScaler()
X_train = scale.fit_transform(X_train)
X_test  = scale.fit_transform(X_test)

M = 3
poly_model = make_pipeline(PolynomialFeatures(M),LinearRegression())

yfit = poly_model.poly.fit_transform(data);

w = poly_model.weights;
savetxt('weights.csv', w, delimiter=',')

