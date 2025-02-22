---
title: Linear Regression From Scratch
description: A step-by-step guide to understanding and implementing linear regression using fundamental concepts like gradient descent, cost functions, and model evaluation—without relying on high-level libraries.
date: '2025-01-19'
categories:
  - linear-regression
  - machine-learning
  - numpy
  - gradient-descent
published: true
---
# Linear Regression Model

Linear regression is a fundamental model in machine learning used for predicting a continuous output variable based on input features. The model function for linear regression is represented as:

$$f_{w,b}(x) = wx + b$$

In this equation, $f_{w,b}(x)$ represents the predicted output, $w$ is the weight parameter, $b$ is the bias parameter, and $x$ is the input feature.

To train a linear regression model, we aim to find the best values for the parameters $(w, b)$ that best fit our dataset.


So the this case gonna use dataset from this github repository: https://github.com/Phanith-LIM/ml-journey-from-scratch/tree/main/01-linear-regression/dataset

Make use you install 
```bash
pip install numpy
pip install pickle
pip install plotly
```
Start from create class represent to LinearRegressionModel `model.py`
```python
class LinearRegression:
    def __init__(self, learning_rate, convergence_tol=1e-6):
        self.learning_rate = learning_rate
        self.convergence_tol = convergence_tol
        self.W = None
        self.b = None

    def initialize_parameters(self, n_features):
        self.W = np.random.randn(n_features) * 0.01
        self.b = 0
```
---

### Model Training

#### Forward Pass

The forward pass is a step where we compute the linear regression output for the input data $X$ using the current weights and biases. It's essentially applying our model to the input data.
```python
def forward(self, X):
    return np.dot(X, self.W) + self.b
```

#### Cost Function

The cost function is used to measure how well our model is performing. It quantifies the difference between the predicted values and the actual values in our dataset. The cost function is defined as:

$$J(w,b) = \frac{1}{2m} \sum_{i=1}^{m}(f_{w,b}(x^{(i)}) - y^{(i)})^2$$

Here, $J(w, b)$ is the cost, $m$ is the number of training examples, $x^{(i)}$ is the input data for the $i$-th example, $y^{(i)}$ is the actual output for the $i$-th example, and $w$ and $b$ are the weight and bias parameters, respectively.
```python
 def compute_cost(self, predictions, y):
    return np.mean(np.square(predictions - y)) / 2
```

#### Backward Pass (Gradient Computation)

The backward pass computes the gradients of the cost function with respect to the weights and biases. These gradients are crucial for updating the model parameters during training. The gradient formulas are as follows:

$$
\frac{\partial J(w,b)}{\partial b} = \frac{1}{m} \sum_{i=0}^{m-1} (f_{w,b}(X^{(i)}) - y^{(i)})
$$

$$
\frac{\partial J(w,b)}{\partial w} = \frac{1}{m} \sum_{i=0}^{m-1} (f_{w,b}(X^{(i)}) - y^{(i)})X^{(i)}
$$
```python
def backward(self, predictions, X, y):
    m = len(y)
    dW = np.dot(X.T, (predictions - y)) / m
    db = np.sum(predictions - y) / m
    return dW, db
```

#### Training Process

The training process involves iteratively updating the weights and biases to minimize the cost function. This is typically done through an optimization algorithm like gradient descent. The update equations for parameters are:

$$w \leftarrow w - \alpha \frac{\partial J}{\partial w}$$

$$b \leftarrow b - \alpha \frac{\partial J}{\partial b}$$

Here, $\alpha$ represents the learning rate, which controls the step size during parameter updates.

By iteratively performing the forward pass, computing the cost, performing the backward pass, and updating the parameters, the model learns to make better predictions and fit the data.

```python
def fit(self, X, y, iterations, plot_cost=True):
    self.initialize_parameters(X.shape[1])
    costs = []

    for i in range(iterations):
        predictions = self.forward(X)
        cost = self.compute_cost(predictions, y)
        dW, db = self.backward(predictions, X, y)
        self.W -= self.learning_rate * dW
        self.b -= self.learning_rate * db
        costs.append(cost)

        if i % 100 == 0:
            print(f'Iteration {i}, Cost {cost}')

        if i > 0 and abs(costs[-1] - costs[-2]) < self.convergence_tol:
            print(f'Converged after {i} iterations.')
            break

    if plot_cost:
        fig = px.line(y=costs, title="Cost vs Iteration", template="plotly_dark")
        fig.update_layout(title_font_color="#41BEE9", xaxis=dict(color="#41BEE9", title="Iterations"), yaxis=dict(color="#41BEE9", title="Cost"))
        fig.show()
```

In order to save you just use pickle package
```python
def predict(self, X):
    return self.forward(X)

def save_model(self, filename):
    with open(filename, 'wb') as file:
        pickle.dump({'W': self.W, 'b': self.b}, file)

@classmethod
def load_model(cls, filename):
    with open(filename, 'rb') as file:
        model_data = pickle.load(file)
        model = cls(learning_rate=0.01)  # Default learning rate
        model.W = model_data['W']
        model.b = model_data['b']
        return model
```
---
### Evaluation

#### 1. Mean Squared Error (MSE)

**Formula:**
$$\text{MSE} = \frac{1}{n} \sum_{i=1}^{n} (y_{\text{true}_i} - y_{\text{pred}_i})^2$$

**Description:**
- **Mean Squared Error (MSE)** is a widely used metric for evaluating the accuracy of regression models.
- It measures the average squared difference between the predicted values ($y_{\text{pred}}$) and the actual target values ($y_{\text{true}}$).
- The squared differences are averaged across all data points in the dataset.

**Interpretation:**
- A lower MSE indicates a better fit of the model to the data, as it means the model's predictions are closer to the actual values.
- MSE is sensitive to outliers because the squared differences magnify the impact of large errors.

#### 2. Root Mean Squared Error (RMSE)

**Formula:**
$$\text{RMSE} = \sqrt{\text{MSE}}$$

**Description:**
- **Root Mean Squared Error (RMSE)** is a variant of MSE that provides the square root of the average squared difference between predicted and actual values.
- It is often preferred because it is in the same unit as the target variable, making it more interpretable.

**Interpretation:**
- Like MSE, a lower RMSE indicates a better fit of the model to the data.
- RMSE is also sensitive to outliers due to the square root operation.

#### 3. R-squared ($R^2$)

**Formula:**
$$R^2 = 1 - \frac{\text{SSR}}{\text{SST}}$$

**Description:**
- **R-squared ($R^2$)**, also known as the coefficient of determination, measures the proportion of the variance in the dependent variable ($y_{\text{true}}$) that is predictable from the independent variable(s) ($y_{\text{pred}}$) in a regression model.
- It ranges from 0 to 1, where 0 indicates that the model does not explain any variance, and 1 indicates a perfect fit.

**Interpretation:**
- A higher $R^2$ value suggests that the model explains a larger proportion of the variance in the target variable.
- However, $R^2$ does not provide information about the goodness of individual predictions or whether the model is overfitting or underfitting.
`evaluation.py`
```python
class RegressionMetrics:
    @staticmethod
    def mean_squared_error(y_true, y_pred):
        return np.mean((y_true - y_pred) ** 2)

    @staticmethod
    def root_mean_squared_error(y_true, y_pred):
        return np.sqrt(RegressionMetrics.mean_squared_error(y_true, y_pred))

    @staticmethod
    def r_squared(y_true, y_pred):
        mean_y = np.mean(y_true)
        ss_total = np.sum((y_true - mean_y) ** 2)
        ss_residual = np.sum((y_true - y_pred) ** 2)
        return 1 - (ss_residual / ss_total)
```
---
### Standardize the Data

Standardization is a preprocessing technique used in machine learning to rescale and transform the features (variables) of a dataset to have a mean of 0 and a standard deviation of 1. It is also known as "z-score normalization" or "z-score scaling." Standardization is an essential step in the data preprocessing pipeline for various reasons:

#### Why Use Standardization in Machine Learning?

1. **Mean Centering**: Standardization centers the data by subtracting the mean from each feature. This ensures that the transformed data has a mean of 0. Mean centering is crucial because it helps in capturing the relative variations in the data.

2. **Scale Invariance**: Standardization scales the data by dividing each feature by its standard deviation. This makes the data scale-invariant, meaning that the scale of the features no longer affects the performance of many machine learning algorithms. Without standardization, features with larger scales may dominate the learning process.

3. **Improved Convergence**: Many machine learning algorithms, such as gradient-based optimization algorithms (e.g., gradient descent), converge faster when the features are standardized. It reduces the potential for numerical instability and overflow/underflow issues during training.

4. **Comparability**: Standardizing the features makes it easier to compare and interpret the importance of each feature. This is especially important in models like linear regression, where the coefficients represent the feature's impact on the target variable.

5. **Regularization**: In regularization techniques like Ridge and Lasso regression, the regularization strength is applied uniformly to all features. Standardization ensures that the regularization term applies fairly to all features.

#### How to Standardize Data

The standardization process involves the following steps:

1. Calculate the mean ($\mu$) and standard deviation ($\sigma$) for each feature in the dataset.
2. For each data point (sample), subtract the mean ($\mu$) of the feature and then divide by the standard deviation ($\sigma$) of the feature.

Mathematically, the standardized value for a feature `x` in a dataset is calculated as:

$$\text{Standardized value} = \frac{x - \mu}{\sigma}$$

Here, `x` is the original value of the feature, $\mu$ is the mean of the feature, and $\sigma$ is the standard deviation of the feature.

```python
def apply_standardize(data_points):
    mean_data = np.mean(data_points)
    std_data = np.std(data_points)
    return (data_points - mean_data) / std_data
```
---

### Implementation
`main.ipynb`

```python
import math
import numpy as np
import pandas as pd
import plotly.express as px
import pickle
from model import LinearRegression
from evaluation import RegressionMetrics
```
```python
train_data = pd.read_csv('./dataset/train.csv')
test_data = pd.read_csv('./dataset/test.csv')

# Remove rows with missing values
train_data = train_data.dropna()
test_data = test_data.dropna()

X_train = train_data['x'].values
y_train = train_data['y'].values

# Set testing data and target
X_test = test_data['x'].values
y_test = test_data['y'].values
```
```python
def apply_standardize(data_points):
    mean_data = np.mean(data_points)
    std_data = np.std(data_points)
    return (data_points - mean_data) / std_data
```

```python
X_train = apply_standardize(X_train)
X_test = apply_standardize(X_test)
print(X_train.shape)
print(X_test.shape)
```

```python
from model import LinearRegression
lr = LinearRegression(0.01)
lr.fit(X_train, y_train, 10000)
```
```python
lr.save_model('model.pkl')
```
```python
model = LinearRegression.load_model("model.pkl")
y_pred = model.predict(X_test)
mse_value = RegressionMetrics.mean_squared_error(y_test, y_pred)
rmse_value = RegressionMetrics.root_mean_squared_error(y_test, y_pred)
r_squared_value = RegressionMetrics.r_squared(y_test, y_pred)

print(f"Mean Squared Error (MSE): {mse_value}")
print(f"Root Mean Squared Error (RMSE): {rmse_value}")
print(f"R-squared (Coefficient of Determination): {r_squared_value}")

#Mean Squared Error (MSE): 10.79337662568745
#Root Mean Squared Error (RMSE): 3.285327476171508
#R-squared (Coefficient of Determination): 0.9871863431670246
```