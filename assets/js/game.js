// Game States
// "WIN" - player robot has defeated all enemy-robots
//      *Fight all enemy-robots
//      *Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

//var playerInfo.name;
var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money:10
};

// function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

// You can also log multiple values at once like this console.log(playerInfo.name, playerInfo.attack, playerInfo.health);

var enemyInfo = [
    {
        name: "Roborto",
        attack: 12
    },
    {
        name: "Amy Android",
        attack: 13
    },
    {
        name: "Robo Trumble",
        attack: 14
    }
];


// fight function
var fight = function(enemy) {
    console.log(enemy);
    while (playerInfo.health > 0 && enemy.Health > 0) {
        // ask player if they'd like to fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // if player choses to skip confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        
            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
                // subtract money from playerInfo.money for skipping
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerInfo.money", playerInfo.money);
                break;
                }
            }
            
            //generate random damage value based on player's attack power
            //remove enemy's health by subtracting the amount set in the playerInfo.attack variable
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
            enemy.Health = Math.max(0, enemy.Health - damage);
            console.log(
                playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.Health + " health remaining.");
                
            // check enemy's health
            if (enemy.Health <= 0) {
                window.alert(enemy.name + " has died!");

                // award player money for winning
                playerInfo.money = playerInfo.money + 20;
                //leave while() loop since enemy is dead
                break;
            } else {
                window.alert(enemy.name + " still has " + enemy.Health + " health left.");
            }
    
            //generate random damage value based on player's attack power
            //remove player's health by subtracting the amount set in the enemy.attack variable
            var damage = randomNumber(enemy.attack - 3, enemy.attack);
            playerInfo.health = Math.max(0, playerInfo.health - damage);
            console.log(
                enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");
    
            //check player's health
            if (playerInfo.health <= 0) {
                window.alert(playerInfo.name + " has died!");
                // keave while() loop if player is dead
                break;
            } else {
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
            }
        } // end of while loop
    }; //end of fight function
  
// run this function to start game 
var startGame = function() {
    //reset player stats
    playerInfo.health = 100;
    playerInfo.attack = 10;
    playerInfo.money = 10;

// fight each enemy by looping over them and fighting them one at a time
for(var i = 0; i < enemyInfo.length; i++) {
    // if player is still alive, keep fighting
    if (playerInfo.health > 0) {
        // let player know what round they are in
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
   
    //pick new enemy to fight based onthe index of teh enemy.names array    
    var pickedEnemyObj = enemyInfo[i];

    // reset enemy.Health before starting new fight
    pickedEnemyObj.health = randomNumber(40, 60);

    //use debugger to pause script from running and check what's going on at the moment in the code
    // debugger;

    // pass the pickedenemy.name Variable's value into the fight function where it will assume the value of the enemy.name parameter
    fight(pickedEnemyObj);

    // if player is alive and we're not at last enemy in the array
    if (playerInfo.health > 0 && i < enemyInfo.length -1) {
        // ask if player wants to use the store before next round
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
        
        // if yes, take them to the store() function
        if (storeConfirm){
        shop();
    }
}
}
// if player isn't alive, stop the game
else{
    window.alert('You have lost your robot in battle! Game Over!');
    break;
}
}
//after loop ends, we are either out of playerInfo.health or enemies to fight, so run the endGame function
endGame();
};


//function to end the entire game
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");
    
    // if player is still alive, player wins!
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }

    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        // restart the game
        startGame();
    }
    else{
        window.alert("Thank you for playing Robot Gladiators! Come Back soon!");
    }
};

var shop = function() {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
       "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice." 
    );

    // use switch to carry out action
    switch (shopOptionPrompt) {
        case "REFILL": //new case
        case "refill":
            if (playerInfo.money >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars");

            //increase health and decrease money
            playerInfo.health = playerInfo.health + 20;
            playerInfo.money = playerInfo.money - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }

            break;
        case "UPGRADE": // new case    
        case "upgrade":
            if (playerInfo.money >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");

            //increase attack and decrease money
            playerInfo.attack - playerAtack + 6;
            playerInfo.money = playerInfo.money - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }

            break;
        case "LEAVE": //new case
        case "leave":
            window.alert("Leaving the store.");

            // do nothing, so function will end
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");

            //call shop() again to force player to pick a valid option
            shop();
            break;

    }
};

// start first game when page loads
startGame();