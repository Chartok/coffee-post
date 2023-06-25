class Text extends Shape { // Text class now extends from Shape and gets color handling from it.
    constructor(text, color) {
        super(color);
        if (text.length > 3) {
            throw new Error("Text must not exceed 3 characters.");
        }
        this.text = text;
    }

    render() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>`;
    }
}

module.exports = Text;