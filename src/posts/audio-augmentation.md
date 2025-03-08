---
title: Audio Augmentation Techniques for Deep Learning
description: A comprehensive guide to audio data augmentation techniques for deep learning models.
date: '2025-02-20'
categories:
  - machine-learning
  - deep-learning
  - pytorch
  - numpy
published: true
---

Audio augmentation is a powerful technique used in machine learning and deep learning to artificially expand and diversify audio datasets. This process involves creating modified versions of existing audio samples by applying various transformations, without changing the underlying content or label of the audio.

**Why is it important to know how to augment audio?**  
Audio augmentation increases the dataset size, improves model generalization, is more cost-effective than extracting more data, and facilitates transfer learning.

### 1. Noise Injection
Noise injection is a common technique used to make audio data more robust to environmental noise. It involves adding random noise to the audio signal to simulate real-world conditions.  
To generate noise, various types of distributions can be used. In this case, we focus on two types: the normal distribution and the uniform distribution.

| Normal Distribution                                | Uniform Distribution                           |
| -------------------------------------------------- | ---------------------------------------------- |
| Depicted as a bell curve.                          | Depicted as a flat, horizontal line.           |
| Probability is concentrated around the mean.       | Probability is spread evenly across a range.   |
| Values closer to the mean are more likely.         | All values within the range are equally likely.|
| Represented by a peak at the mean, with tails.     | Represented by a flat line indicating constant probability. |
| Gaussian noise is generated using the normal distribution. | Uniform noise is generated using the uniform distribution. |

![image info](../../images/audio-augmentation/image1.png)
#### Comparison of Normal and Uniform Distributions
> Gaussian Noise is like a constant hum: It's a background noise, like the air conditioner running. It's less disruptive and easier for the student to tune out and still understand the teacher.

![image info](../../images/audio-augmentation/image2.png)

> Uniform Noise is like a sudden clap: It's a loud, disruptive sound that suddenly interrupts the teacher's voice. This makes it hard for the student (Whisper) to follow what the teacher is saying.

![image info](../../images/audio-augmentation/image3.png)


#### Formula:
$$
Noisy Signal = Original Signal + (Noise Amplitude * Random Noise)
$$

#### Code Example:
Plotting the original signal and the augmented signal:
```python
def _plot_signal_and_augmented_signal(signal, augmented_signal, sr):
    fig, ax = plt.subplots(ncols=2, figsize=(15, 4))
    librosa.display.waveshow(signal, sr=sr, ax=ax[0])
    ax[0].set(title="Original signal")
    librosa.display.waveshow(augmented_signal, sr=sr, ax=ax[1])
    ax[1].set(title="Augmentation signal")
    plt.show()
```
Generating Gaussian noise:
```python
def add_white_noise(signal, noise_percentage_factor):
    noise = np.random.normal(loc=0, scale=signal.std(), size=signal.shape)
    augmented_signal = signal + noise * noise_percentage_factor
    return augmented_signal
```
`signal`:  A NumPy array representing the audio signal.
`noise_percentage_factor`: A float value representing the amplitude of the noise to be added.

#### Why use the signal's standard deviation for the noise scale?
Because we want our random number have good spread off to the original audio.
- The **standard deviation** of the signal is used as the scale to ensure the random noise has a **spread proportional to the original audio signal**.
- This approach maintains a realistic noise level, preventing the noise from being too weak or too dominant compared to the signal.
- A noise scale based on the standard deviation results in a more **natural and balanced augmentation**, preserving the signal's characteristics while introducing randomness.

#### Why is μ = 0 used in np.random.normal for adding noise?
- No Bias: Keeps the noise centered around zero, preventing upward or downward shifts in the signal.
- Equal Fluctuations: Ensures noise adds both positive and negative values equally.
- Preserves Signal Integrity: Avoids distorting the overall amplitude of the signal.
- Realistic Noise: Mimics natural white noise, which has no directional bias.

### 2. Time Stretching Audio
Time stretching audio refers to the process of manipulating an audio file to change its playback speed, making it longer or shorter, without altering its pitch, essentially allowing you to play a sound at a different tempo while maintaining its original tone quality; commonly used in music production to fit audio clips to a desired tempo or create creative effects.
```python
def time_stretch(signal, time_stretch_rate):
    """Time stretching using librosa"""
    augmented_signal = librosa.effects.time_stretch(signal, rate=time_stretch_rate)  # Specify rate
    return augmented_signal
```
`signal`: A NumPy array representing the audio signal.
`time_stretch_rate`: A float value representing the rate at which the audio signal should be stretched.

`time_stretch_rate > 1`: : the signal will be compressed (shortened) (fast). 
![image info](../../images/audio-augmentation/image4.png)
`time_stretch_rate < 1`: : the signal will be expanded (lengthened) (slow).
![image info](../../images/audio-augmentation/image5.png)

### 3. Pitch Scaling
Pitch scaling is a technique that changes the pitch of an audio clip without affecting its speed. It's used to adjust the pitch of a sound, for example, to lower the pitch of a person speaking with a high voice.
```python
def pitch_scale(signal, sr, num_semitones):
    """Pitch scaling using librosa"""
    augmented_signal = librosa.effects.pitch_shift(signal, sr=sr, n_steps= num_semitones)
    return augmented_signal
```
- **`signal`** – Audio signal as a NumPy array.
- **`sr`** – Sampling rate of the audio (e.g., 44,100 Hz).
- **`num_semitones`** – Number of semitones to shift:
    - `+4` → Raise pitch by 4 semitones.
    - `3` → Lower pitch by 3 semitones.

### 4. Random Gain
Random Gain in audio refers to a process where the volume of an audio signal is randomly increased or decreased by a variable factor, essentially applying a random amplification to the sound, often used in audio data augmentation to make machine learning models more robust to variations in volume levels.

```python
def random_gain(signal, min_factor=0.1, max_factor=0.12):
    gain_rate = random.uniform(min_factor, max_factor)
    augmented_signal = signal * gain_rate
    return augmented_signal
``` 
- **`signal`** – Audio signal (NumPy array).
- **`min_factor`** – Minimum scaling factor (e.g., `0.5` reduces volume).
- **`max_factor`** – Maximum scaling factor (e.g., `1.5` increases volume).

### 5. Inverting polarity
Inverting polarity flips the audio waveform vertically, making peaks turn into troughs and vice versa. This keeps the sound the same but can help with phase correction or audio cancellation when combined with the original signal.
![image info](../../images/audio-augmentation/image6.png)

The positive amplitude values of the audio waveform become negative, and the negative values become positive.
- **Noise removal and cancellation** through phase inversion.
- **Fixing phase issues** in stereo or multi-channel audio.
- **Vocal removal** for karaoke or instrumental tracks.
- **Creating unique sound effects** for creative applications.
- **Reducing audio feedback** in live performances.

```python
def invert_polarity(signal):
    return signal * -1,
```

### 6. Combining Augmentation Techniques
Combining multiple augmentation techniques can further diversify the dataset and improve the model's robustness. For example, you can apply noise injection, time stretching, and pitch scaling together to create a more varied dataset.

```python
print("Thank you for reading!")
```