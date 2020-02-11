const readlineSync = require('readline-sync')
console.clear()
console.log( "Welcome to Coraline's Game" );
console.log( "What do you want Coraline to do?" );
let option = readlineSync.question( "Options: play in the rain, play with Wybie, go through the little door " );

switch(option) {
    case "play in the rain":
        console.log( "this is so boring, what would you like Coraline to do next?" );
        let option1_1 = readlineSync.question( "Options: visit the neighbors, go shopping with mom " );
        switch(option1_1) {
            case "Visit the neighbors":
                console.log( "Misses April Spink and Miriam Forcible are crazy ladies, what would you like Coraline to do next?" );
                let option1_2 = readlineSync.question( "Options: visit Mr. Bobinsky, go back home " );
                switch(option1_2) {
                    case "visit Mr. Bobinsky":
                        console.log( "The jumping mouse have a messae for Coraline: 'Do not go through little door'");
                        break;
                    case "go back home":
                        console.log( "Coraline goes back home");
                        break;
                    default: 
                }
                break;
            case "go shopping with mom":
            console.log( "Coraline wants green gloves for school but mom ignores her.");
                } 
                break;
    case "play with Wybie":
        console.log( "Coraline takes funny pictures to Wybie, what would you like Coraline to do next?" );
        let option1_2 = readlineSync.question( "Options: play with Wybie's cat, search for a well " );
        switch(option1_2) {
            case "play with Wybie's cat":
                console.log( "Wybie's Cat is a wild cat and doesn't play with humans.");
                break;
            case "search for a well":
                console.log("Coraline uses a dowsing rod of poison oak so she gets a rash.");
                break;
            default: 
        }
        break;
    case "go through the little door":
        console.log( "Coraline goes through the little door, what would you like Coraline to do next?" );
        let option3_1 = readlineSync.question( "Options: stay with the other mom, kill the other mom " );
        switch(option3_1) {
            case "stay with the other mom":
                console.log( "Coraline get's button eyes. Game Over!!!" );
                break;
            case "kill the other mom":
                console.log( "Coraline is not a killer, what would you like her to do next?" );
                let option3_2 = readlineSync.question( "Options: have dinner with other parents, go back home " );
                switch(option3_2) {
                    case "have dinner with other parents":
                        console.log( "Coraline drinks a mango milshake" );
                        break;
                    case "go back home":
                        console.log("Coraline is back home with her real parents, she is safe!!!");
                        break;
                          default: 
                        } 
                      break;
                } 
                break;
            default: 
            console.log( "Start again, and make sure to type each option correctly!" );
        }