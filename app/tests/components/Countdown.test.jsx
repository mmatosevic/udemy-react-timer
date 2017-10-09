var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Countdown = require('Countdown');

describe('Countdown', () => {
    
    it('Should exist', () => {
        expect(Countdown).toExist();
    });

    describe('setCountdown', () => {
        it('Should set state to started and count down', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.setCountdown(10);

            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe('started');

            setTimeout(() => {
                expect(countdown.state.count).toBe(9);
                done();
            }, 1001);
        });

        it('Should not count down into negative', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.setCountdown(1);

            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                done();
            }, 3001);
        });
    });

});