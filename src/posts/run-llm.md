---
title: Run LLMs with LangChain in Google Colab
description: Learn how to extract and structure data with LangChain and Ollama. This guide covers schema validation with Pydantic, response formatting with LangChain's parsers, and data manipulation with Pandas, ideal for automated data retrieval, market research, and AI content analysis.
date: "2025-02-10"
categories:
  - machine-learning
  - deep-learning
  - langchain
  - ollama
  - data-processing
thumbnail: null
published: true
---

In this blog I would like to share with you the sample code to run LLMs with LangChain in Google Colab. This setup allows you to interact with Ollama models, generate responses, and process the output seamlessly. You can explore various models, prompts, and data processing tasks using LangChain and Ollama in your Colab notebooks.

### 1. Install Required Modules
First, install `lshw` to ensure Ollama can access your system hardware, followed by the Ollama installation script.

```bash
!sudo apt-get install lshw
```

### 2. Install Ollama
Next, install Ollama using the provided script:
```bash
!curl -fsSL https://ollama.com/install.sh | sh
```
Then, run `ollama serve` in the backend, even if the above error is present. This will connect with the GPU, and `ollama serve` will run in the background.

```bash
import subprocess
process = subprocess.Popen(['ollama', 'serve'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
print(f"Ollama serve process ID: {process.pid}")
```

### 3. Pull Model from Ollama
There are many models available on [Ollama](https://ollama.com/search). You can pull any model you want. Here, I am pulling the `llama3.2:1b` model for testing.

```bash
# Pull llama 1b parameter Model for testing
!ollama pull llama3.2:1b
```

### 4. Install LangChain
Then install LangChain in order to communicate with Ollama and process the responses.
```bash
!pip install langchain
```

### 5. Import Required Libraries
Import the necessary libraries for this task:
```python
from langchain_core.prompts import ChatPromptTemplate
from langchain_ollama.llms import OllamaLLM
from IPython.display import display, Markdown
```

### 6. Define the Prompt
Define the prompt you want to use for generating responses:
```python
template = """Question: {question}
Answer: Let's think step by step."""
prompt = ChatPromptTemplate.from_template(template)
model = OllamaLLM(model="llama3.2:1b")
chain = prompt | model # Chain the prompt and model
```

### 7. Generate Response
Generate a response by invoking the chain with a question and display the response in Markdown format.
```python
result = chain.invoke({"question": "What is the capital of Cambodia?"})
display(Markdown(result))
```
### Conclusion
You have successfully set up LangChain in Google Colab to interact with Ollama models, generate responses, and process the output.
```python
print("Thank you for reading!")
```