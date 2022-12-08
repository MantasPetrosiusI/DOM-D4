function onLoadActions() {
  
    for (let bingoNumber = 1; bingoNumber <=76; bingoNumber++) {
      
      let bingoNumberNode = document.createElement("div");
  
      
      bingoNumberNode.classList.add("bingoNumber");
      bingoNumberNode.innerText = bingoNumber;
      document.getElementById("board-list").appendChild(bingoNumberNode);
    }
  }

const randArray = [];
function generateRandom(){
    let rand = Math.floor((Math.random()*76)+1);
    if(!randArray.includes(rand)){
        randArray.push(rand);
        console.log(randArray)
        numberHighlighter(rand);
    }
}

function numberHighlighter(num){

    document.getElementById('board-list').querySelectorAll('div')[num].style.backgroundColor = "lightsalmon";
    document.getElementById('user-boards').querySelectorAll('div')[num].style.backgroundColor = "lightgray";
}
function userNumGenerator(){
    let userNumbers = [];
         for (let i = 0; i <24; i++) {
            let rand = Math.floor(Math.random()*76+1);
                if(!userNumbers.includes(rand)){
                    userNumbers.push(rand);
                }else{
                    rand = Math.floor((Math.random()*76)+1);
                    userNumbers.push(rand);
                }
            }
            return userNumbers;
}
function createUserBoard(){
        let nums = userNumGenerator();
        for (let bingoNumbers = 1; bingoNumbers <=24;      bingoNumbers++) {
            let userBingoNode = document.createElement("div");
            userBingoNode.classList.add("bingoNumber")
            userBingoNode.innerText = nums[bingoNumbers-1];
            let userboard = document.createElement('div');
            userboard.id = "user-board";
            document.getElementById('user-boards').appendChild(userboard);
            userboard.appendChild(userBingoNode);
        }
        
}
    
function multipleBoards(){
    const boardNumber = document.getElementsByClassName('userBoards')[0].value;
    console.log(boardNumber)
    for (let i = 0; i < boardNumber; i++) {
        createUserBoard();
    }
}
   

  window.onload = onLoadActions;