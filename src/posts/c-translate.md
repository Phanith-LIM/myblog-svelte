---
title: Optimizing Your Whisper Model by Converting to C
description: A step-by-step guide to converting Whisper by OpenAI to the C language for faster performance and lower memory usage.
date: '2025-03-08'
categories:
  - speech-recognition
  - machine-learning
  - optimization
  - C-language
published: true
---
Whisper is a powerful speech recognition model developed by OpenAI, designed to transcribe human speech into text with high accuracy. However, its implementation in Python can be slow and memory-intensive, especially when processing large amounts of audio data.

For Khmer, a Cambodian language, we need a faster and more memory-efficient solution to enable real-time transcription on low-resource devices. One approach is to convert the Whisper model to the C language, known for its speed and efficiency.

In this guide, we'll walk through the process of converting the Whisper model to C and optimizing it for performance and memory usage.


### What is [fast-whisper](https://github.com/SYSTRAN/faster-whisper.git) ?
[faster-whisper](https://github.com/SYSTRAN/faster-whisper.git) is a reimplementation of OpenAI's Whisper model using [CTranslate2](https://opennmt.net/CTranslate2/index.html#), a fast inference engine for Transformer models. It is up to 4 times faster than [openai/whisper](https://huggingface.co/openai/whisper-tiny) while using less memory. Efficiency can be further improved with 8-bit quantization on both CPU and GPU.

### Step 1: Install Dependencies
```bash
pip install transformers 
pip install ctranslate2
```
Noted that CTranslate2 supports selected models from Hugging Face’s Transformers. Make you sure that your model is supported by CTranslate2. Check this out to see list of support model [here](https://opennmt.net/CTranslate2/guides/transformers.html).

### Step 2: Load the Whisper Model
Use the following command to convert your Whisper model to CTranslate2:
```bash
ct2-transformers-converter --model <model_id> --output_dir <output_path> --copy_files tokenizer_config.json --quantization int8
```
I have my own fine-tuned model [`PhanithLIM/whisper-tiny-aug-29dec`](https://huggingface.co/PhanithLIM/whisper-tiny-aug-29dec) and I want to convert it to C.
for flag `--quantization int8` is a technique that can reduce the model size and accelerate. [`read more`](https://opennmt.net/CTranslate2/quantization.html)
```bash
ct2-transformers-converter --model PhanithLIM/whisper-tiny-aug-29dec --output_dir whisper-tiny-int8 --copy_files tokenizer_config.json --quantization int8
```
After running the command, the converted model will be stored in the specified output directory.

![image info](../../images/c-translate/image1.png)

### Step 3: Transcribing an Audio File
Now that the Whisper model has been successfully converted, install the [`faster-whisper`](https://pypi.org/project/faster-whisper/) package to test it:
```bash
pip install faster-whisper
```
To load your locally converted model, use the following code:
```python
from faster_whisper import WhisperModel
model_size = "/content/whisper-tiny-int8"
model = WhisperModel(model_size, device="cpu", compute_type="int8", local_files_only=True)
```
**Note:** 
- Ensure `local_files_only=True` to load the model from the local directory. But In case you store your converted model in Hugging Face, you can set `local_files_only=False`.
- If you want to run it on GPU, change `device="cuda"`. This will significantly improve performance.

```python
segments, info = model.transcribe("/content/1_0.wav", beam_size=8)
print("Detected language '%s' with probability %f" % (info.language, info.language_probability))
for segment in segments:
    print("[%.2fs -> %.2fs] %s" % (segment.start, segment.end, segment.text))
```

This output was tested on an audio file of 3 minutes and 2 seconds, and it took 1 minute to transcribe. However, when tested on a GPU, it took only 5 seconds to transcribe—blazing fast! The output shows that the model does not transcribe the Khmer language well because it lacks sufficient training data, and it is a tiny model.

```
Detected language 'km' with probability 0.998886
[0.00s -> 30.00s]ក្រសួងសុខាភិបាលកាលពីថ្ងៃចិន្នបានធ្វើការអំពីនាលដល់បង់ប្អូនប្រជាពលរត់ទាំងឱ្យមានការប្រុមប្រយៈការពីសុខភាពពី
[30.00s -> 60.00s] ក្យមដូចជាក្រុមប្ដាសាយ ហូរសម្បរ ប្រលាក់បំពង្ករកកកន្តាស៍ ជួមមេនមេតភ្នោះមីតភ្នំពី ៦៦ឆ្នាំ ឬអ្នកមានពីរកម្ម ក
[60.00s -> 90.00s] ាពី ភាគច្រើន បានជាសាស្ប្បីឡើងវិញ គាត់ វាជាសាស្ត្របន្នស្មានថា ប្រហែល ១១២០ ទៅ ១២០ នៃភាគច្រើន គឺស្រាល ប៉ុន្ត
[90.00s -> 120.00s] ទីដែលមានមានរក បន្ទាប់មក ប៉ុន្មត្មម៉ុន ឬភ្នេះ ដ៏ល្លែងសញ្ញា នៃជំងឺនេះ រួមមាន ក៏ ក្រុងក្ដៅ ទឹងច្រម៉ុស ហូរសម្ប 
[120.00s -> 150.00s] កានអាណាម៉ៃ លានសម្អាតដៃឱ្យ បានមានញាប់ជាមួយសប្បូរ ឬទឹកឱ្យកដែលប៉ះពាល់ភ្នេកច្រុមមក និងមាត់ ប្រសិម្បល់មិនពាន
[150.00s -> 180.00s] ទឹងបរិខា បុរិភោគជាមួយអ្នកដទ្រី នឹងពាក្យសុំស្លៀប ពាក់សម្លៀបសម្លៀបបំពាក្ក្នសំស្រប ដើម្បីបង្ការភាពប្រជាកព
[180.00s -> 181.82s] សប្បនេះមិត្តសេរីការអាយ។
```

### Conclusion
Converting the Whisper model to C can significantly improve performance and memory usage, making it suitable for real-time transcription on low-resource devices. By leveraging the speed and efficiency of CTranslate2, you can achieve blazing-fast speech recognition.

Give it a try and optimize your own models! 🚀
```python
print("Thank you for reading!")
```