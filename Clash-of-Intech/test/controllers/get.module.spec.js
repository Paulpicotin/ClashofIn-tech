const {expect} = require('chai');
const proxyquire = require('proxyquire');
const sinon = require('sinon');
const test = require('sinon-test')(sinon);

const path = '../../controllers/get.modules.js';

const ModulePolicy = {
    hasAccessRight(){}
};

const Module = {
    getById(){}
};

const res = {
        status () { return res},
        send (){},
        json (){}
};


describe('get.module.js', () => {
    it("should call status(401) when user as a argument when everything is fine", test(async function () {   
        const controller = proxyquire(path, {
            '../models/module.model.js':module,
            '../models/policies/module.policy.js':ModulePolicy
        })

        const req = {
            params: {id: 1},
            session: {userId: 3}
        }

        const fakeModule = {
            id: req.params.id,
            name: 'test module'
        }

        const json = this.spy(res, 'json')

        const modulePolicyMock = this.mock(ModulePolicy)
        .expects('hasAccessRight')
        .resolves(true)

        const moduleMock = this.mock(Module)
        .expects('getById')
        .resolves(fakeModule)

        await controller(req, res)

        expect(json.calledWith(fakeModule)).to.equal(true)
    })),

    it ("should call status(401) when hasaccess return false ", test(async function () {
        /*get.module.spec.js => la test unitaire qui va verifier  hasAccessModule*/
        const controller = proxyquire(path, {
            
            '../models/policies/module.policy.js':ModulePolicy
        })

        const req = {
            params: {id: 1},
            session: {userId: 3}
        }

        const fakeModule = {
            id: req.params.id,
            name: 'test module'
        }

        const access = this.spy(res, 'access')

        const modulePolicyMock = this.mock(ModulePolicy)
        .expects('hasAccessRight')
        .resolves(false)

        await controller(req, res)

        expect(access.calledWith("not authorized")).to.equal(true);
    }))
}