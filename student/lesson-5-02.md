---
layout: minimal-home
title: "Lesson 5.02: EarSketch Music"
permalink: /student/lesson-5-02/
teacher_url: /docs/lesson_plans/units/5_unit/02_lesson/lesson.html
unit: 5
prev_url: /student/lesson-5-01/
prev_title: "5.01"
next_url: /student/lesson-5-03/
next_title: "5.03"
---
{% raw %}## What you will learn

* Define and identify: **rhythm**, **beat**, **tempo**, **measures**, `setEffect()`, `makeBeat()`
* Demonstrate beats using the functions
* Demonstrate a loop through items in a list

## Reading

* Associated Reading in EarSketch

## Do Now

1. Read through and participate in the following lessons in [EarSketch Editor]

      - 1.2.0 [Rhythm](https://earsketch.gatech.edu/earsketch2/#?curriculum=1-2-0)
      - 1.4.0 [Using Effect in EarSketch - setEffect()](https://earsketch.gatech.edu/earsketch2/#?curriculum=1-4-0)
      - 1.7.1 [Copyright](https://earsketch.gatech.edu/earsketch2/#?curriculum=1-7-1)
      - 2.11 [Making Custom Beats: makeBeat](https://earsketch.gatech.edu/earsketch2/#?curriculum=2-3-0&language=python)

2. In your notebook, write down answers the following questions:
      - What are three examples of effects used in music production and available in EarSketch?
      - Write down how you would use the `setEffect()` function to change the volume level of track 4 to a value of `-15.0`.
      - For most songs, how many beats make up one measure?
      - What is the purpose of the `0`, `+`, and `-` symbols when used in an EarSketch beat strings

[EarSketch Editor]: http://earsketch.gatech.edu/earsketch2/

## Lab

### Beat Strings

#### In your Notebook

Beat strings are made up of combinations of three different characters
In your Notebook, Explain the rhythmic meaning of each of the characters

1. "0”
2. “+”
3. “-”

#### Lab Activity

Create a new EarSketch project using the following requirements

1. Include your name and a project description at the top of the file.
2. This project should have 4 tracks and be 12 measures in length.
3. Each track should use a different/unique audio sample.
4. Create 4 variables that hold audio loop constants.
5. Create 1 variable that holds a beat string.
6. On one track, use the makeBeat() function with your beat string.
  
    * Your beat string rhythm should repeat for all 12 measures of the project.

7. Use the `setEffect()` function for at least one track.
8. Make sure to use comments that outline and describe your code.

#### Copyright Note

The above is taken from the earsketch teaching resources.

## Check your understanding

Pick an answer for each question. You can try again until you get it right.

<div class="quiz" markdown="1">

<div class="q" data-answer="d" markdown="1">
**1. What is tempo?**

- The number of tracks in a song
- The length of a song in measures
- The pattern of a beat string
- The speed of the music, in beats per minute

<p class="why">Tempo sets how fast the beats go by, measured in beats per minute (BPM).</p>
</div>

<div class="q" data-answer="a" markdown="1">
**2. What is the job of `makeBeat()`?**

- Build a rhythm on a track from a beat string
- Change the volume of a track
- Define a new variable
- Add a copyright notice

<p class="why"><code>makeBeat()</code> turns a beat string into a rhythm on a track using a sound you give it.</p>
</div>

<div class="q" data-answer="c" markdown="1">
**3. What does `setEffect()` do?**

- Creates a new beat string
- Starts a loop
- Changes how a track sounds, such as its volume

<p class="why"><code>setEffect()</code> adjusts a track's sound with an effect like volume instead of adding new audio.</p>
</div>

</div>

## Downloads

* [Lab (PDF)]({% endraw %}{{ '/docs/lesson_plans/units/5_unit/02_lesson/lab.pdf' | relative_url }}{% raw %})
* [Lab (editable Word)]({% endraw %}{{ '/docs/lesson_plans/units/5_unit/02_lesson/lab.docx' | relative_url }}{% raw %})
{% endraw %}
