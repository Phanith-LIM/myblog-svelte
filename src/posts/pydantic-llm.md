---
title: Data Extraction with LangChain and Ollama Locally
description: "This guide explores how to extract and structure data using LangChain and Ollama on your local machine. It leverages **Pydantic** for schema validation, LangChain’s output parsers for structured response formatting, and Pandas for data manipulation. This approach is useful for **automated data retrieval, market research, and AI-driven content analysis**."
date: "2025-03-01"
categories:
  - machine-learning
  - deep-learning
  - langchain
  - ollama
  - data-processing
thumbnail: null
published: true
---

In this guide, I'll show you how to extract and structure data using LangChain and Ollama on your local machine. This approach is particularly useful for automated data retrieval, market research, and AI-driven content analysis.
We will leverage:
- Pydantic for schema validation
- LangChain’s output parsers for structured response formatting
- Pandas for data manipulation
Let's dive in!

### 1. Installation
In order to get started, you need to install the following packages:
```bash
pip install langchain
pip install ollama
pip install pydantic
pip install pandas
```
I assume you already have the Ollama app installed on your local machine. If not, you can download it from [here](https://ollama.com/).
Once installed, open the app and start the server. You can also check out some useful command-line operations for Ollama [here](https://www.hostinger.com/tutorials/ollama-cli-tutorial).


### 2. Importing Required Libraries
First, let's import the necessary libraries for this task:
```python
from pydantic import BaseModel, Field
from langchain_ollama.llms import OllamaLLM
from langchain.output_parsers import PydanticOutputParser
from langchain.prompts import HumanMessagePromptTemplate, ChatPromptTemplate
import pandas as pd
```

### 3. Define the Schema
We'll define a Pydantic model to validate the response from LangChain, ensuring that the extracted data is in the expected format.

For example, let's extract a list of popular phone models:
```python
class PhoneModel(BaseModel):
    brand: str = Field(description="Brand of the phone")
    model: str = Field(description="Model of the phone")
    year: int = Field(description="Year of the phone")
    price: float = Field(description="Price of the phone")
    
class PhonesModel(BaseModel):
    phones: list[PhoneModel] = Field(description="List of phones")
```
### 4. Formatting Output
Next, we define a PydanticOutputParser to format the response data into a structured format:
```python
output_parser = PydanticOutputParser(pydantic_object = PhonesModel)
format_instructions = output_parser.get_format_instructions()
print(format_instructions)
```

### 3. Using an Ollama Model
In case you want to use the model from Ollama, you can pull the model from Ollama. Example I want to use the model `llama3.2:3b`.
```python
model = OllamaLLM(
    model='llama3.2:3b',
    temperature=0.0,
)
```

### 4. Generate Data
We'll now generate structured data by passing instructions and formatting details to the model. This process forms a chain—hence the name LangChain—by connecting the prompt, model, and output parser seamlessly.

For example, let's retrieve the top 10 popular phones:
```python
human_text = "{instruction}\n{format_instructions}"
message = HumanMessagePromptTemplate.from_template(human_text)
prompt = ChatPromptTemplate.from_messages([message])

chain = prompt | model | output_parser
products = chain.invoke({"instruction":"Give top 10 popular phone now", "format_instructions":format_instructions})
```

### 5. Convert to DataFrame
Finally, we will convert the structured data into a Pandas DataFrame for further analysis and manipulation.
```python
df = pd.DataFrame([product.model_dump() for product in products.phones])
df
```
Output

|      | brand | model | year | price |
|------|-------|-------|------|-------|
|0| Apple | iPhone 13 | 2021 | 699.0 |
|1| Samsung | Galaxy S21 | 2021 | 799.0 |
|2| Google | Pixel 6 | 2021 | 599.0 |
|3| OnePlus | 9 Pro | 2021 | 969.0 |
|4| Xiaomi | Mi 11 | 2021 | 749.0 |
|5| Oppo | Find X3 Pro | 2021 | 1149.0 |
|6| Realme | GT 2 Pro | 2022 | 599.0 |
|7| Vivo | X70 Pro | 2021 | 899.0 |
|8| Sony | Xperia 1 III | 2021 | 1299.0 |
|9| Motorola | Edge 30 Pro | 2022 | 799.0 |

### Conclusion
In this blog post, we showed how to extract and organize data using LangChain and Ollama on your local machine. We used Pydantic for validating data, LangChain's parsers for structured responses, and Pandas for data handling. This method is great for tasks like automated data collection, market research, and AI-based content analysis. I hope this guide was helpful!
```python
print("Thank you for reading!")
```
