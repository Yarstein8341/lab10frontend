class Shape {
    static total = 100;

    constructor(a) {
        this.a = a;
    }

    static fill() {
        Shape.total = 100;
        document.getElementById('result').innerText = 'Фарбу заправлено до 100%';
        document.getElementById('shape').innerHTML = '';
    }

    draw() {
        if (Shape.total <= 0) {
            document.getElementById('result').innerText = 'Недостатньо фарби для малювання.';
            return;
        }

        if (this.a > Shape.total) {
            document.getElementById('result').innerText = `Недостатньо фарби для намальовання фігури розміром ${this.a}.`;
            return;
        }

        Shape.total -= this.a;
        document.getElementById('result').innerText = `Фігура розміром ${this.a} нарисована. Залишилося фарби: ${Shape.total}.`;

        const shapeElement = document.createElement('div');
        shapeElement.classList.add('square');
        document.getElementById('shape').appendChild(shapeElement);
    }
}

function drawShape() {
    const size = parseInt(document.getElementById('size').value);
    const shape = new Shape(size);
    shape.draw();
}

function fillPaint() {
    Shape.fill();
}