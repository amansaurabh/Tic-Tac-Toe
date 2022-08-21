const boxes = Array.from(document.getElementsByClassName("box"));
const playText = document.getElementById("playText")

const spaces = [null, null, null, null, null, null, null, null, null]
const O_text = 'O';
const X_text = 'X';

let currentPlayer = O_text;



const drawBox = () => {

    boxes.forEach((box, index) => {
        let styleString = '';
        if(index < 3){
            styleString += "border-bottom: 3px solid var(--purple);";
        }
        if(index % 3 === 0){
            styleString += "border-right: 3px solid var(--purple);";
        }
        if(index % 3 === 2){
            styleString += "border-left: 3px solid var(--purple);";
        }
        if(index > 5){
            styleString += "border-top: 3px solid var(--purple);";
        }
        box.style = styleString;
        box.addEventListener("click", boxClicked)
    })
}



const boxClicked = (e) => {
    const id = e.target.id;
    if(!spaces[id]){
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;

        if(playerHasWon()){
            playText.innerText = `${currentPlayer} has won!`
        }
        currentPlayer = currentPlayer === O_text ? X_text : O_text;
    }
}

const playerHasWon = () => {
    if(spaces[0] === currentPlayer){
        if(spaces[1] === currentPlayer && spaces[2] === currentPlayer){
            return true;
        }

        if(spaces[3] === currentPlayer && spaces[6] === currentPlayer){
            return true;
        }

        if(spaces[4] === currentPlayer && spaces[8] === currentPlayer){
            return true;
        }
    }
    else if(spaces[8] === currentPlayer){
        if(spaces[2] === currentPlayer && spaces[5] === currentPlayer){
            return true;
        }

        if(spaces[6] === currentPlayer && spaces[7] === currentPlayer){
            return true;
        }
    }
    if(spaces[4] === currentPlayer){
        if(spaces[1] === currentPlayer && spaces[7] === currentPlayer){
            return true;
        }
        if(spaces[3] === currentPlayer && spaces[5] === currentPlayer){
            return true;
        }
        if(spaces[2] === currentPlayer && spaces[6] === currentPlayer){
            return true;
        }
    }
}

drawBox();
