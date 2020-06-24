# Tamagotchi

This is a game based on the pocket keychain game developed in the 90's.  In the game you have to care for a digital pet.  If you neglect any of it's basic needs it dies. 

User Stories

In the original game the pet usually starts as an egg.  The beginning screen should include text telling the player the name of the game as well as an image of an egg.  You want the player to be able to name the pet.  There should be a button that will allow them to do that.

Once the player has given the pet a name they should hatch the egg.  After naming the pet, a button should appear that will allow them to hatch the egg. 

Once the egg is hatched, some new buttons and status bars should appear.  The status bars should be: hunger, tiredness, and boredom.  Next to each there should be a bar that includes 10 points. At the start, each of these should start at 5.  There should also be a spot to keep track of the pet's age.  The buttons should be the specific actions to take care of the pet: feed, sleep, wake up, and play.

Once the egg hatches a timer should start.  At regular intervals, the hunger, tiredness, and boredom bars will go up by 1.  If any of these bars reaches 10 the pet dies. The age should also increase at a specific interval.

The feed button should make the hunger bar go down to 2.  If hunger is below 5 it should go to 1.  If hunger is at 1 it would go to 0. If hunger is at 0, the player has overfed the pet and it dies.

The play button should work the same way as the feed button.  The boredom bar goes down to 2. If it is below 5, it would go to 1.  If it is at 1, it goes to 0.  If boredom is at 0, the player has overworked their pet and it dies.

The sleep and wake up buttons should work differently. When the sleep button is pressed, the hunger and boredom bars stop moving.  At a specific interval, the tiredness bar will go down by 1. If the tiredness bar hits 0 the pet doesn't die.  When the player deicdes the pet is done sleeping, they can hit the wake up button.  Once they do, all the status bars will start to go up like normal.

As the pet reaches certain ages it could gain new abilities, like evolving or giving birth.

When the pet dies, the timer, status bars, and age should all stop.  The pet image should change to an image to show the pet is dead.  Also, a statement should pop up that says that the pet died.  There should also be a new button that asks if the player would like to play again.

When play again is pressed, all the original settings should be restored and the game starts over.      