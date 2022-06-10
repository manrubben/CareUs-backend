const request = require('supertest')
const expect = require('chai').expect
const {app, db} = require('../index')

before((done) => {
    db.sequelize.sync()
    done()
})

describe('Prueba', () => {
    it('should return true', () => {
        const numero = 2;
        expect(numero).to.equal(2)
    })
})
