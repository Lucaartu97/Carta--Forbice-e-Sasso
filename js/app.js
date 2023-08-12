const message = document.querySelector('.message');
        const score = document.querySelector('.score');
        const buttons = document.querySelectorAll('button');
        const winnerScores = [0,0];
        
        //add event listeners to buttons
        for ( let i = 0 ; i < buttons.length ; i++){
            buttons[i].addEventListener('click', playGame);
        }

        function playGame(e){
            //setup player's selection
            let playerSelection = e.target.innerText;
            //setup a random number to select for computer
            //selects a number between 0 and 1 (1 not-inclusive)
            let computerSelection = Math.random();

            //if computerSelection is less than .34, computer selects Rock
            if (computerSelection < .34){
                computerSelection = 'Sasso';
            } else if (computerSelection <= .67){
                computerSelection = 'Carta';
            } else {
                computerSelection = 'Forbici';
            }
            
            //setup a function to compare winners and return result
            let result = checkWinner(playerSelection, computerSelection);

            //output scores to the DOM
            if (result === nome){
                result += ' hai vinto !';
                //update score
                winnerScores[0]++;
            }

            if (result === 'Computer'){
                result += ' ha vinto, riprova !';
                winnerScores[1]++;
            }

            if (result === 'Pareggio'){
                result += '. Avete fatto la stessa scelta'
            }

            //output score into Score DIV
            score.innerHTML = ' ' + nome + '[ ' + winnerScores[0]+ ' ]' + ' Computer: [ ' + winnerScores[1] + ' ]';

            //output player and computer's selections
            messenger(' ' + nome + ' <strong> ' + playerSelection + '</strong> Computer: <strong>' + computerSelection + '</strong><br>' + result);
        }

        function messenger(selectionMessage){
            message.innerHTML = selectionMessage;
        }

        function checkWinner(player, computer){
            if (player === computer){
                return 'Avete fatto la stessa scelta';
            }

            if (player === 'Carta'){
                if(computer === 'Forbici'){
                    return 'Computer';
                } else {
                    return nome;
                }
            }

            if (player === 'Sasso'){
                if (computer === 'Carta'){
                    return 'Computer';
                } else {
                    return nome;
                }
            }

            if (player === 'Forbici'){
                if (computer === 'Sasso'){
                    return 'Computer';
                } else {
                    return nome;
                }
            }
        }