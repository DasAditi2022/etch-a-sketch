const userInput = document.querySelector(".user-input");
const  gridSize= document.querySelector("#grid-size");
const grid = document.querySelector(".grid");
const drawBtn = document.querySelector("#draw");
const eraseBtn = document.querySelector("#erase");
let color = "black";

function createCells(row, n){
    color = "black";
    for(let i=0; i<n; i++){
        const cell = document.createElement("div");
        cell.setAttribute('class', 'cell');
        row.appendChild(cell);
        cell.addEventListener("dragover",()=>{
            cell.style.backgroundColor = color; 
        });
    }
}

function createRows(n){
    for(let i=0; i<n; i++){
        const row = document.createElement("div");
        row.setAttribute('class', 'row');
        grid.appendChild(row);
        createCells(row, n);
    }
}

function selected(btn){
    if(btn.backgroundColor==="black"){
        btn.style.backgroundColor = "white";
        btn.style.color = "black";
    }
    else{
        btn.style.backgroundColor = "black";
        btn.style.color = "white";        
    }    
}

createRows(16);

gridSize.addEventListener("keydown", ()=>{
    if(event.key=='Enter'){
        if(gridSize.value>100 || gridSize.value<2) {
            alert("Please choose a number from 2 to 100");
            gridSize.value = null;
            return;
        }
        while (grid.firstChild) {
            grid.removeChild(grid.firstChild);
        }
        createRows(parseInt(gridSize.value));
    }
});

drawBtn.addEventListener("click",()=>{
    color = "black";
    selected(drawBtn);
})
eraseBtn.addEventListener("click",()=>{
    color = "white";
    selected(eraseBtn);
})





