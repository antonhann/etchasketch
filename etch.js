window.onload = function(){
    const container = document.querySelector('.container')
    const htmlbox = "<div class = 'box'></div>"
    let webbox = ''
    let n = 5
    const button = document.querySelector('.prompt')
    button.addEventListener('click', function(){
        n = parseInt(prompt("Enter a number: "))
        for (let i = 0; i < n; i++){
            webbox += htmlbox
        }
        for (let i = 0; i < n; i++){
            const grid = '<div class = "row">' + webbox + '</div>'
            container.innerHTML += grid
        }
        const boxes = document.querySelectorAll('.box')
        boxes.forEach((box) => {
            box.addEventListener('mouseover', function(){
                box.style.background = 'red'
            });
        });
    });
};