class Form
{
    constructor()
    {
        // creating the variables
        this.title = createElement('h3');
        this.button1 = createButton("single player");
        this.button2 = createButton("multi player");
    }

    display()
    {
        textSize(20);
        fill("black");
        if(gameState == 0)
        {
            // changing the background
            background(formBg);
        }
        // defining the title 
        this.title.html("Bike Racing Game");

        // putting the title,button1, and button2's postioions
        this.title.position(325,50);

        this.button1.position(250,150);
        this.button2.position(450,150);
        
        this.button1.mousePressed(() =>{
            // if button1 is pressed gameState updates to 1
            gameState = 1
            
            // and updates database
            database.ref("/").update({
                'gameState': 1
            })
        })

        this.button2.mousePressed(() =>{
            // if button2 is pressed gameState changes to 2
            gameState = 2
            
            // and database updates
            database.ref("/").update({
                'gameState': 2
            })
            
            // player count increments
            playerCount++;
            //defining player.index and player.lane
            player.index = playerCount;
            player.lane = playerCount;

            // updating the databse
            player.update();
            
            database.ref("/").update({
                'playerCount': playerCount
            })
        })
    }

    // creating a function to hide the form
    hide()
    {
        this.button1.hide();
        this.button2.hide();
        this.title.hide();
    }
}