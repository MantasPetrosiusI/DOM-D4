const randArray = [];
function generateRandom(){
    let rand = Math.floor(Math.random()*76+1);
    if(!randArray.includes(rand) && randArray.length < 6){
        randArray.push(rand);
        console.log(randArray)
    }
}

let wholeBoard = document.getElementById("board-list");
wholeBoard.addEventListener('generateRandom()', function(){
    let select = wholeBoard[randArray[randArray.length]];
    select.classList.toggle('selectedNum');
})
    const boardNumber = document.getElementById('noOfBoards').innerText;


function createUserBoard(){

        let userNumbers = [];
    for (let i = 0; i <24; i++) {
            let rand = Math.floor(Math.random()*76+1);
                if(!userNumbers.includes(rand)){
        userNumbers.push(rand);
                }else{
                    rand = Math.floor(Math.random()*76+1);
                    userNumbers.push(rand);
                    }
                }
    let boards = document.createElement('ul')
    boards.classList.add('user-list')
    for (let bingoNumbers = 1; bingoNumbers <=24; bingoNumbers++) {
        let userBingoNode = document.createElement("div");
        userBingoNode.classList.add("bingoNumber");
        userBingoNode.innerText = userNumbers[bingoNumbers-1];
        document.getElementById("container-board").appendChild(userBingoNode);
        }
        
}
    
function multipleBoards(){
    for (let i = 0; i < boardNumber; i++) {
        createUserBoard();
        console.log(boardNumber)
    }
}
   
function onLoadActions() {
  
    for (let bingoNumber = 1; bingoNumber <=76; bingoNumber++) {
      
      let bingoNumberNode = document.createElement("div");
  
      
      bingoNumberNode.classList.add("bingoNumber");
      bingoNumberNode.innerText = bingoNumber;
      document.getElementById("board-list").appendChild(bingoNumberNode);
    }
  }
  window.onload = onLoadActions;