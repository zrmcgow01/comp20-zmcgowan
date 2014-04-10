Assignment 5: 2048-gamecenter
By: Zach McGowan
Date: 4/10/14

To the best of my knowledge, very aspect of the project is correctly implemented.  I updated
game_manager.js from the 2048 repository starting on line 89, in the function actuate().
I decided to include the time stamp within the this file, even though it was not 
required by the assignment page.  The URL of my Heroku app is https://shielded-scrubland-1755.herokuapp.com
I got conceptual help from Connor and debugging help from Jasper.  I spent about 15 hours working on this project.
The score and grid in Gabriele Cirulli's 2048 are stored in a function called GameManager.  The grid is stored
in a member of the object called "grid", and score in a member called "score".  Within all of the functions
that are a prototype of GameManager, these are refered to by this.grid and this.score respectively.
A jQuery post was used on line 99 of game_manager.js, with some more modifications made before it to 
prepare the data to be sent.  This was the only file I modified of Gabrielle Cirulli's to send the 
data from the game to my database.  web.js, my Heroku application, did the rest of the work.  A handler for
POST on /submit.json checked that the mandatory members are present and inserts it into the MongoDB database.
On a GET request to / and /scores.json, the data is retrieved from the Mongo database, sorted, and structured
as necessary.  A Procfile was pushed to my Heroku app in order for it to work correctly, this is in the 
ZIP file in 2048-gamecenter.  Also in the ZIP file (besides web.js) is node_modules and package.json.
