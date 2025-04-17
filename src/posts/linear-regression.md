---
title: Linear Regression From Scratch
description: A step-by-step guide to understanding and implementing linear regression using fundamental concepts like gradient descent, cost functions, and model evaluation—without relying on high-level libraries.
date: '2025-02-19'
categories:
  - linear-regression
  - machine-learning
  - numpy
  - gradient-descent
thumbnail: null
published: false
---

Linear regression is a fundamental model in machine learning used for predicting a continuous output variable based on input features. The model function for linear regression is represented as:

$$
f_{w,b}(x) = wx + b
$$

In this equation, $f_{w,b}(x)$ represents the predicted output, $w$ is the weight parameter, $b$ is the bias parameter, and $x$ is the input feature.

To train a linear regression model, we aim to find the best values for the parameters $(w, b)$ that best fit our dataset.

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

$$
J(w,b) = \frac{1}{2m} \sum_{i=1}^{m}(f_{w,b}(x^{(i)}) - y^{(i)})^2
$$

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

$$
w \leftarrow w - \alpha \frac{\partial J}{\partial w}
$$

$$
b \leftarrow b - \alpha \frac{\partial J}{\partial b}
$$

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
---