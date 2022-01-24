# Assignment 1 - Hello World: GitHub and d3  
Author: James Plante (jplante@wpi.edu)  
[Website Link](http://jwplante.com/a1-ghd3/)
## Description
This is an interactive drawing of a house at night with stars in the sky -- but with a twist. As it turns out in this drawing the stars are actually alien ships that have been spying on the earth. So, when you click on the sky, a ship will show itself by speeding off-screen. Additionally, for realism, if you click on the window of the house, the lights will toggle inside the house.

For the purposes of the assignment, the following elements of the page are the following shapes.
1. Circles - The stars and the moon
2. Rectangles - The skybox, ground, body of the house, and the window
3. Polygons - The roof of the house
4. Lines - The frame of the window

## Technical Achievement Desription
- **Randomized Ship Locations** - When the drawing is generated the ships will be in a random spot every time. In the code, a random dataset is generated on every refresh. The size of each star is also randomized.
- **Dragging the Moon** - Users are able to drag the moon across the sky using the mouse. In the underlying implementation, I leared how to use `d3.drag()` to capture mouse events and make the drawing change.

## Design Achievement Description 
- **Minimalist Artstyle** - Although, I'm not an artisitc person, I tried to make an aethetically pleasing drawing using the shapes I had available. I really liked how the yellow light of inside the house contrasts with the dark exterior of the drawing.

