function emitWarningWithError() {
    const error = new Error('foo')
    error.name = 'name'
    error.message = 'foo'
    process.emitWarning(error)
}

function emitWarningWithString() {
    process.emitWarning('bar')
}

describe('emitWarning', () => {
    it('should not cause an error using Error', () => {
        emitWarningWithError();
    });

    it('should not cause an error using a string', () => {
        emitWarningWithString();
    });
});
