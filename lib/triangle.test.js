// Test for the triangle class
const Shape = require('./shapes')

describe('Shape', () => {
    describe('render', () => {
        it('should return an empty string', () => {
            const shape = new Shape()
            expect(shape.render()).toBe('')
        })
    })
})