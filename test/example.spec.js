const expect = require('chai').expect;

// const MochaAllureReporter = require('allure-mocha');
// console.log(MochaAllureReporter);


// //const allurejs = require('allure-js-commons');
// const allureRuntime = require('allure-mocha/runtime');
// console(Mocha.Runner);
// const allureReporter = new MochaAllureReporter(allureRuntime);
// const MochaAllure = require('allure-mocha/dist/MochaAllure');
// console.log(allurejs);


describe('Test', () => {

    const { allure } = require("allure-mocha/runtime");

    it('should pass', () => {
        //const allure = new MochaAllure(allureReporter, allureRuntime);
        console.log(allure);
        allure.epic('something happening');
        //allure.story('tell me a story');
        allure.description('Hacking successful!');
        console.log(allure);
    });


    it('should fail', () => { 
        expect(0).to.equal(1);
    })

});
