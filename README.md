# Assignment details
For assignment 1, I went through a couple of iterations when trying to decide how to incorporate lines, rectangles, circles, and paths while also maintaining a technical or design achievement. To start, I had just worked on creating rectangles and circles of various sizes, colors, and events before my cat, as usual, decided to sit in front of my monitor and prevent me from continuing. I decided to use her for inspiration for the technical and design achievements, but I also wanted to make it look like I only did the very basic requirement of the assignment. Therefore, the user initially sees a large square which can be clicked to remove. Then a large circle appears, also clickable to remove. And finally, the user sees an orange cat with circles and rectangles used to make the eyes, paths used to make the face, nose, and mouth, and lines used to make the mouth and whiskers. The eyes, face, mouth, and nose are of various colors (orange, green, black, red, and pink). (Notably, my cat is very fluffy and black, therefore this is a rather inaccurate portrayal of her). The screenshots below are for each of the three steps for reaching the cat (rectangle, circle, cat). Here is the link for the github pages: 

![Rectangle](link "clickable rectangle")
![Circle](link "clickable circle")
![Cat](link "nonclickable cat")

# Technical/design achievements
I have two technical achievements. First is that I used events to unveil deeper components of the visualization (rectangle -> circle -> cat). This was an uncertian process at first because I used the same event (click) on layer components and was unsure if clicking the rectangle would remove both the rectangle **and** the circle (it did not). I feel this has taught me more about how events work in d3. Additionally, cats are not made of straight lines. In fact, cats often don't even look like they're put together properly, therefore I used Bezier curves for the cats head and mouth (aside from the ears). This was challenging because there are multiple components in a Bezier curve that dictate where it starts/ends and the arc of the curve. I'll be honest, it was mostly a lot of guess-and-check with x,y coordinates to get the curve shapes that I wanted.

My design achievement is simply that I structured the shapes we were supposed to use into one cohesive image that is fairly identifiable as a cat. 

GitHub Details
---

- Fork the GitHub Repository for Assignment 1. You now have a copy associated with your username.
- Make changes to index.html to fulfill the project requirements. 
- Make sure your "main" branch matches your "gh-pages" branch. See the GitHub Guides referenced above if you need help.
- Edit the README.md with a link to your gh-pages site "http://YourUsernameGoesHere.github.io/01-ghd3/index.html".

Submission Details
---
- To submit, make a [Pull Request](https://help.github.com/articles/using-pull-requests/) on the original repository.
- Note: name your pull request using the following scheme: 
```
a1-your Gh username-your first name-your lastname

```


- README Quality
    - A description of what you have created. 1-2 screenshots are recommended for the README.  
    - A working link to the hosted files (usually the gh-pages 'live' url)  
    - Section for Technical and Design Achievements

Technical Achievement Desription -- 12  
Design Achievement Description -- 12