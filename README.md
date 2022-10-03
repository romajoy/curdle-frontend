# Curdle
**Capstone Project for GA SEIR Cohort**

## Links
[Front End Repo] (https://github.com/romajoy/curdle-frontend)      
[Back End Repo] (https://github.com/romajoy/curdle-backend) 
     
[Curdle App (front)]  (https://curdle-project.onrender.com/)     
[Curdle Backend] (https://curdle-backend.herokuapp.com/)

### Technology Used
- Ruby     
- Rails     
- React     
- CSS     
- GitHub     
- Youtube    

### Process
I knew at the start of this project that I wanted to move away from the standard CRUD app that we have been making during past projects.  My original idea for a project was to make a Wordle clone, but with names of cheese, hence the name CURDLE.  The pun alone was inspiration enough to get me going.     
I spent most of the first week of the project watching GA tutuorials on Ruby and Rails, and learning how Ruby works and how it is used inside of Rails to build back and front end projects.  I also looked over MANY wordle clones in GitHub to understand the logic and functionality involved.  
        
Towards the end of the first week, I realized that the Wordle logic and set-up might be a bit out of reach for what I was hoping to accomplish in the remaining week.  I also was running into difficulty figuring out how to adopt Rails to the set-ups I was used to working with in React.  I gave myself a few more days of research (looking through GitHub, coding along with tutorials, reviewing notes) to get an idea of what I was hoping to do and ultimately decided to pivot on Tuesday away from a Wordle clone into a Hangman game.  
        
Through the help of a few code-alongs and GitHub projects (cited below), I was able to create a game similar to the original idea, and one with functionality and logic I could understand and replicate.     
I also was planning to learn Tailwind, but when I saw how simple my app would be, I realized that vanilla CSS was the best way to go.     

### Challenges
Deploying has been a challenge.  I was able to deploy my front-end on Render with ease, but when I attempted deploying my back-end, I ran into trouble.  Render took in my database but continued to fail deploying my back-end.  I remade my back-end a few times and ultimately was able to deploy it on Heroku, but in doing so I hit a wall in using it as a JSON file.     
     
I also ran into issues when trying to use my JSON of cheese names to call within my app and seed the name list.  I had a few attempts but was ultimately not able to solve the issue I ran into with my usual GET requests through axios to my back-end without breaking the functionality of my game.  So, I placed my wordlist within my React app inside my app.js.     
     

### Sources
Link to Youtube Build    
https://www.youtube.com/watch?v=jj0W8tYX_q8
     
Modified Original Product from vanilla to react:    
https://github.com/bradtraversy/vanillawebprojects/tree/master/hangman
     
GA Ruby/Rails Videos   
GA Rails Notes    
      
Learn Ruby on Rails:    
https://youtu.be/fmyvWz5TUWg    



