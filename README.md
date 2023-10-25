# Interactive Book Cover Part III
**What I’ve done this week**    
This week, I shifted the code I wrote last week into variables, and not hard code. I figured out the rest of the code, and I was able to follow last week's plans quite successfully (plants are for loops, flowers are for loops, dirt specks are for loops), except the other animals, which I decided to leave out for the sake of time and also difficulty of making good looking animals from simple shapes. Additionally, an unexpected pivot was the difficulty of executing the trapezoid, but after the discussion with you, I really liked the solution we came up with
  
**Description of Interactivity**   
Eyes move with the mouse, symbolizing the mole looking for someone to help him get a pair of pants.
  
The visitor can "paint" over a pant-shaped area on top of the mole, mimicking the creation of pants. I decided to leave the "pocket" color in, because the pockets are an integral part of the story and almost the very reason why the mole wanted the pants, so although I am liking the pants without the pocket, the story is more important. 

Overall I am very happy with the result, the eye movement and especially the brush effect were things that pushed me to gain a deeper understanding of the concepts we've learned. Additionally, trying to think of things in functions, and variables, also encouraged me to think more systematically about the code, and after Tuesday's office hours, I realized that I could be even more general to make the code even more malleable and scalable.
  
Below, I am sharing progress visuals from Figma (and one from my notebook), which is where I always start before creating anything visual in p5.js.    
[![G4iHux.png](https://imgpile.com/images/G4iHux.png)](https://imgpile.com/i/G4iHux)  
[![G4iVBL.png](https://imgpile.com/images/G4iVBL.png)](https://imgpile.com/i/G4iVBL)  
[![G4i8f1.png](https://imgpile.com/images/G4i8f1.png)](https://imgpile.com/i/G4i8f1)  
[![G4ioMj.png](https://imgpile.com/images/G4ioMj.png)](https://imgpile.com/i/G4ioMj)  
[![G4iqAo.png](https://imgpile.com/images/G4iqAo.png)](https://imgpile.com/i/G4iqAo)  
[![G4i2jC.jpg](https://imgpile.com/images/G4i2jC.jpg)](https://imgpile.com/i/G4i2jC)  
  
# Interactive Book Cover Part II
**What I’ve done this week**  
I have solidified my idea and decided to pivot slightly from my proposal last week. I based too much of my proposal on the ability to artistically recreate animals, and I don’t think that is very realistic. My updated idea is that I would like to have a beautifully vibrant nature background, and in the body area of the little mole, I would like to give the user the ability to draw pants on the little mole.

I worked on how (not yet completely) use p5 to recreate the likeness of the little mole, and also thought through the separation and layers of the background. I was trying to be 'smarter' about how I do it, but the way I was setting things up didn't work, or probably wasn't the best approach, so I just stuck to the trusted old shapes, but I know that there's a better way to do it and I want to make sure that I code in a smart, sustainable way, which I'll focus on that for next week. I also quite frankly felt a little overwhelmed the past two weeks with all the midterm projects + this class still having homework + midterms work, so I didn't get to allocate as much time as I would have liked and needed for this section of the assignment.

**description of the classes, objects or arrays, classes, custom functions**  

- Sky (solid color)  
- Sky layer 2 – flickering blues  
- Plant leaves:
  -   Class defining position, height, color, 
  -   Function - move (swaying in the wind)
  -   Function - draw (stem, leaves)
  
- Baby’s breath flower
  -   Class defining position, height, color, 
  -   Function - move (swaying in the wind)
  -   Function - draw (stem, leaves)
  
- Dandelions
  -   Class defining position, height
  - If then statement  - upon hover change yellow dandelion to white dandelion
- Daisies on the ground
  -   Class defining parameters
  -   Function draw
- Pile of dirt
  -   Class defining size and appearance
  -   For loop to create scattered rocks on the pile of dirt

- Brush to paint little mole’s pants
  -   Using arrays and the push function to create a brush-like effect, that will allow the viewer to paint over little mole’s body
  - Need to figure out how to have that happen only on the mole’s body
- Eye
  -   Function to have little mole’s eyes follow the mouse, as he is looking for someone to help him with the pants (i.e. the user)

- Other Animals
  -   mouseDragged function, the other animals (craw fish, bird & hedgehog) will peak out from the margins
  
  
  
# Interactive Book Cover Part I
**What book did you choose? What is it about?**  
I chose the book “How the mole got his pants”, a Czech childhood classic I was introduced to in kindergarten. Although this was first published as a short film, I got to know the story through a book. The book is about a little mole who sees a pair of overall pants on a laundry line. He becomes obsessed with the idea of getting a pair of such pants for himself, but does not know how to get them. As he searches and asks other animals for help, they tell him they can help him make those pants, all they’d need is a piece of fabric. The little mole struggles to find fabric, until the flax seed plant tells the little mole that if he helps take care of the plant, it will, in turn, help him turn flax into fibers and other animals will help him wave the fabric for his pants. In the end, the mole gets pants with big pockets, which he’s very happy about.
  
**What aspect of the book will you include in your cover?**  
I would like to include the vibrant background – possibly with some animation, where the plants would be wavering in the wind, the little mole himself, as well as 3 of the animals that helped him.
  
**Is it interactive? time-based? Both?**  
I am not yet sure which it should be, perhaps interactive. I would like the animals to come into the frame and help the little mole one by one. With each animal, the little mole will get a portion of his pants (1) threads (2) fabric scraps (3) final pants.
  
I took the concept into Procreate, and used the original book illustrations and sketching tools to map out the flow of the interaction.
	  

**What ideas would you like to explore or experiment with?**  
I think being able to code all of the components I want to + actually making visually appealing illustrations will be a big challenge here. It is almost like I am making a game. I would like the movements to look organic and playful.

**Are there aspects of your project that are related to any of the readings we’ve done?**  
At first glance, this project makes me think about the interaction reading (might also be a recency bias), but I am wondering whether having people click is considered enough of an interaction, and whether or not I’d even call this interactive?  
![LittleMole1.png](https://imgpile.com/images/D0bREb.png)  
![LittleMole2.png](https://imgpile.com/images/D0b5V8.png)  
![LittleMole3.png](https://imgpile.com/images/D0bdfl.png)  
![LittleMole4.png](https://imgpile.com/images/D0bwCS.png)  