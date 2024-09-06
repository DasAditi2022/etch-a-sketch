const userInput = document.querySelector(".user-input");
const  gridSize= document.querySelector("#grid-size");
const grid = document.querySelector(".grid");
const drawBtn = document.querySelector("#draw");
const eraseBtn = document.querySelector("#erase");
const colorPicker = document.querySelector("#colorPicker");
let color = "black"; //default drawing color
let isDrawing = false;

// START OF FUNCTION DEFINITIONS----->

//creating n cells in each row 
function createCells(row, n){
    color = colorPicker.value; 
    for(let i=0; i<n; i++){
        const cell = document.createElement("div");
        cell.setAttribute('class', 'cell');
        row.appendChild(cell);
        cell.addEventListener('mousedown', () => { //start drawing
            isDrawing = true;
            cell.style.backgroundColor = color;
        });

        cell.addEventListener('mousemove', () => { //only color when dragging
            if (isDrawing) {
                cell.style.backgroundColor = color;
            }
        });

        cell.addEventListener('mouseup', () => { //stop drawing
            isDrawing = false;
        });


    }
}

function createRows(n){
    toggleOnOff(drawBtn,true); //draw button is turned on by default
    toggleOnOff(eraseBtn,false); //erase button is turned off by default

    //creating n rows of the grid
    for(let i=0; i<n; i++){ 
        const row = document.createElement("div");
        row.setAttribute('class', 'row');
        grid.appendChild(row);

        //creating n cells in each row
        createCells(row, n);
    }
}

//function to display on and off status of a button
function toggleOnOff(btn,val){
    if(val==true){
        btn.style.backgroundColor = "white";
        btn.style.color = "black";
    }  
    else{
        btn.style.backgroundColor = "black";
        btn.style.color = "white";           
    } 
}

//<----- END OF FUNCTION DEFINITIONS

//INITIALIZATION FUNCTION----->

//initializing first 16X16 grid
createRows(16);

//<-----INITIALIZATION FUNCTION


//ACTION FOR SELECTING BUTTONS/INPUTS----->

//user selecting grid size
gridSize.addEventListener("keydown", ()=>{
    if(event.key=='Enter'){
        if(gridSize.value>100 || gridSize.value<2) { //error handling
            alert("Please choose a number from 2 to 100");
            gridSize.value = null;
            return;
        }
        while (grid.firstChild) { //need to delete old grid 
            grid.removeChild(grid.firstChild);
        }
        createRows(parseInt(gridSize.value)); //creating new grid
    }
});

//user clicks to draw
drawBtn.addEventListener("click",()=>{
    color = colorPicker.value;
    toggleOnOff(drawBtn,true);
    toggleOnOff(eraseBtn,false);

});

//user clicks to erase
eraseBtn.addEventListener("click",()=>{
    color = "white";
    toggleOnOff(eraseBtn,true);
    toggleOnOff(drawBtn,false);
});

//user clicks to select color
colorPicker.addEventListener("input", (event) => {
    color = event.target.value;
});

//<-----ACTION FOR SELECTING BUTTONS/INPUTS





