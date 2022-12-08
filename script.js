const randArray = [];
function generateRandom(){
    let rand = Math.floor(Math.random()*76+1);
    if(!randArray.includes(rand)){
        randArray.push(rand);
        console.log(randArray)
    }
}

function numberHighlighter(){
    let light = document.getElementsById('user-boards');
    for (let i = 0; i< light.length; i++) {
        if(randArray[randArray.length] === light[i].innerText){
            light[i].classList.add('selectedNum')
        }
    }
}

    const boardNumber = document.getElementsByClassName('userBoards')[0].value;
    console.log(boardNumber)
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
        
        for (let bingoNumbers = 1; bingoNumbers <=24;      bingoNumbers++) {
            let userBingoNode = document.createElement("div");
            userBingoNode.classList.add("bingoNumber");
            userBingoNode.innerText = userNumbers[bingoNumbers-1];
            document.getElementById("user-boards").appendChild(userBingoNode);
        }
        
}
    
function multipleBoards(){
    for (let i = 0; i < boardNumber; i++) {
        let boards = document.createElement('ul')
        boards.classList.add('user-list'+i)
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