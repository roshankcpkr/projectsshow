(() => {
    const canvas = document.getElementById('painting')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const context = canvas.getContext('2d')

    let previousPoint = { x: 0, y: 0 }
    let isDrawing = false

    function getDistance(previousPoint, currentPoint) {
        return Math.sqrt((previousPoint.x - currentPoint.x) ** 2 + (previousPoint.y - currentPoint.y) ** 2)
    }

    function onMouseMove({ pageX, pageY }) {
        if (isDrawing) {
            console.log('on mouse move')
            const currentPoint = { x: pageX, y: pageY }

            context.beginPath()

            context.lineCap = 'round' 
            context.lineJoin = 'round'
            const distance = getDistance(previousPoint, currentPoint)
            const opacity = Math.min(0.5, 1 / distance)
            context.lineWidth = Math.random() / distance * 40
            context.strokeStyle = `rgba(${changeColor(document.querySelector(".active").id)},${opacity})`

            context.moveTo(previousPoint.x, previousPoint.y)
            context.lineTo(currentPoint.x, currentPoint.y)

            context.stroke()
            context.closePath()

            previousPoint = currentPoint
        }
    }

    function run() {
        // canvas.addEventListener('mousedown', mouseDown)
        // canvas.addEventListener('mouseup', mouseUp)
        canvas.addEventListener('mousedown', (() => {
            isDrawing = true
        }))
        canvas.addEventListener('mousemove', onMouseMove)
        canvas.addEventListener('mouseup', (() => {
            isDrawing = false
        }))


    }
    run()
})();

const button = document.querySelectorAll(".button");
const selectColor = (elem) => {
    removeActiveCircleColor();
    elem.classList.add("active");
};
  
const removeActiveCircleColor = () => {
    button.forEach((circle) => {
      circle.classList.remove("active");
    });
};

function changeColor(color){
    if (color=='red'){
        return '255,0,0';
    }else if(color=='blue'){
        return '0,0,255';
    }else if(color=='green'){
        return '0,255,0';
    }else if(color=='gray'){
        return '100,100,100';
    }else if(color=='black'){
        return '0,0,0';
    }
}