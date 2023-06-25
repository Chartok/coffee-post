class Shape {
    constructor(color) {
        this.color = color;
    }

    render() {
        throw new Error('Render method must be implemented in the child class');
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

class Star extends Shape {
    render() {
        // A basic 5-point star
        return `<polygon points="50,5 20,99 95,39 5,39 80,99" fill="${this.color}" />`;
    }
}

class CrescentMoon extends Shape {
    render() {
        // A simple representation of a crescent moon using SVG `path`
        return `<path d="M50 100 Q70 0 50 0 Q70 100 50 100" fill="${this.color}" />`;
    }
}


module.exports = { Circle, Square, Triangle, Star, CrescentMoon };