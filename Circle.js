class Circle {
    constructor(x,y,radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = "blue";
        this.direct = 'left';
    }

    setColor(color){
        this.color = color;
    }

    moveRight(){
        this.x += 5;
    }

    moveLeft(){
        this.x -= 5;
    }

    render(canvas){
        // let ctx = document.getElementById("myCanvas").getContext('2d');
        let ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}
// let c = document.getElementById('myCanvas');
// let circle = new Circle(100,100,40);
// circle.render(c);

/*function createCircle() {
    let ctx = document.getElementById("myCanvas").getContext('2d');
    let circle = new Circle(500, 500, 80);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fill();
}*/
