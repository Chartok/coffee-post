const Text = require('./Text');

test('should throw if text exceeds 3 characters', () => {
    expect(() => new Text('LONG', 'black')).toThrow(new Error('Text must not exceed 3 characters.'));
});