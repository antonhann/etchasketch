const container = document.querySelector('.container')
changesize(10)
function promptz(){
    var x = parseInt(prompt("enter number: "))
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
            row.appendChild(box)
        }
        container.appendChild(row)
    }
    const boxes = document.querySelectorAll('.box')
    boxes.forEach((box) => {
    box.addEventListener('mouseover', function(){
        box.style.background = 'red'
    });
});
}

function cleargrid(){
    const boxes = document.querySelectorAll('.box')
    boxes.forEach((box) => {
        box.style.background = 'black'
    });
}