const container = document.querySelector('.container')
changesize(10)
function promptz(){
    do{
        var x = parseInt(prompt("enter number (1-64): "))
        console.log(x)
    } while(x < 0 || x >= 65 || !x)
    changesize(x)
}
function changesize(n){
    const elements = document.getElementsByClassName("row");
    while (elements.length > 0) elements[0].remove();
    for (let i = 0; i < n; i++){
        var row = document.createElement('div')
        row.className = 'row'
        for (let i = 0; i < n; i++){
            var box = document.createElement('div')
            box.className = 'box'
            width = (600/n) + 'px'
            box.style.width = width
            box.style.height = width
            row.appendChild(box)
        }
        container.appendChild(row)
    }
    const boxes = document.querySelectorAll('.box')
    boxes.forEach((box) => {
    box.addEventListener('mouseover', function(){
        box.style.background = 'black'
    });
});
}

function cleargrid(){
    const boxes = document.querySelectorAll('.box')
    boxes.forEach((box) => {
        box.style.background = 'white'
        box.addEventListener('mouseover', function(){
            box.style.background = 'black'
    });
    });
    const button = document.querySelector('#random')
    button.style.background = 'white'
    
}

function randomcolor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    const boxes = document.querySelectorAll('.box')
    boxes.forEach((box) => {
    box.addEventListener('mouseover', function(){
        box.style.background = color
    });
    });
    const button = document.querySelector('#random')
    button.style.background = color
}