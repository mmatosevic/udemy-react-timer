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

        it('Should pause countdown on paused status', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.setCountdown(3);
            countdown.changeStatus('paused');

            setTimeout(() =>{
                expect(countdown.state.count).toBe(3);
                expect(countdown.state.countdownStatus).toBe('paused');
                done();
            }, 2000);
        });

        it('Should reset count on stopped status', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.setCountdown(3);
            countdown.changeStatus('stopped');

            setTimeout(() =>{
                expect(countdown.state.count).toBe(0);
                expect(countdown.state.countdownStatus).toBe('stopped');
                done();
            }, 1000);
        });

    });

});