// Tests for the shapes module
const Shape = require('./shapes')

describe('Shape', () => {
    describe('render', () => {
        it('should return an empty string', () => {
            const shape = new Shape()
            expect(shape.render()).toBe('')
        })
    })
})