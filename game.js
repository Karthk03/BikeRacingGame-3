class Game
{
    constructor()
    {
        this.track = loadImage("Images/Track Final.png");
    }

    play()
    {
        form.hide();

        image(this.track,displayWidth*4,displayHeight)
        if(gameState == 1)
        {
            bike1 = createSprite()
            bike1.addImage(bikeIMG1);
            bike1.x = player.distance+50
            bike1.y = 100*player.lane
            bike1.scale = 0.5

            camera.position.x = player.distace;

            if(keyDown("RIGHT_ARROW"))
            {
                player.distance+=20
            }
            
            if(frameCount%50==0)
            {
                rand = Math.round(randomNumber(0,4))

                obsticalArrPos++

                obstical[obsticalArrPos] = createSprite();
                obstical[obsticalArrPos].y = 100*rand;
                obstical[obsticalArrPos].x = player.distance+150;
                obstical[obsticalArrPos].addImage(obsticalIMG);
            }

            for(let i=obsticalArrPos;i>=0;i--)
            {
                if(obsticalArrPos[i]!= null)
                {
                    if(bike1.collide(obstical[i]))
                    {
                        gameState = 3;
                        updateGameState(gameState);
                    }
                }
            }

            player.update();
        }
        else if(gameState == 2)
        {
            if(playerCount<4)
            {
                textSize(20);
                fill("black");
                text("please wait for players to join",300,200);
            }
            else
            {
                Player.getPlayerInfo();
                var index = 0;

                bike1 = createSprite()
                bike1.addImage(BikeIMG1);

                bike2 = createSprite()
                bike2.addImage(BikeIMG2);

                bike3 = createSprite()
                bike3.addImage(BikeIMG3);

                bike4 = createSprite()
                bike4.addImage(BikeIMG4);
                    
                allPlayers2 = allPlayers

                for(let i in allPlayers2)
                {
                    if(allPlayers2[i-1]!= null)
                    {
                        if(allPlayers2[i]<allPlayers2[i-1])
                        {
                            allPlayers2[i-1] = allPlayers2[i];
                            allPlayers2[i] = allPlayers[i-1];
                        }
                    }
                }

                bike[bike1,bike2,bike3,bike4];

                if(keyIsDown("RIGHT"))
                {
                    player.distance+=20
                }


                if(frameCount%50==0)
                {
                    rand = Math.round(randomNumber(0,4))

                    obsticalArrPos++

                    obstical[obsticalArrPos] = createSprite();
                    obstical[obsticalArrPos].y = 100*rand;
                    obstical[obsticalArrPos].x = allPlayers2[4].distance+150;
                    obstical[obsticalArrPos].addImage(obsticalIMG);
                }

                for(let i in obstical)
                {
                    for(let j in allPlayers)
                    {
                        allPlayers[j].collide(obstical[i]);
                    }
                }


                for(let i in allPlayers)
                {
                    index++
                    bike[index--].x = allPlayer[i].distace;
                    bike[index--].y = 100*allPlayer[i].lane;

                    if(index == player.index)
                    {
                        fill("red");
                        ellipse(allPlayer[index].distace-30,100*allPlayer[index].lane,50,50);
                    }
                }
                player.update();
            }
        }
    }
}