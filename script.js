const board = document.querySelector('#board')
const SQUARES_NUMBER = 500;
const colors = ['#F08080','#7CFC00', '#F4A460', '#FF1493', '#006400','#00FFFF', '#FFD700', '#8B008B', '#FFE4E1', '#00BFFF','#FF4500','#800000','#778899']

for(let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColor(square)
    })
    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })



    board.append(square)

}

function setColor(element){
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element){
    element.style.background = `#1d1d1d`
    element.style.boxShadow = `0 0 2px #000`
}
function getRandomColor(){
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}