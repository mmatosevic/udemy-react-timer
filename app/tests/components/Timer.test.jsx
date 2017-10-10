var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Timer = require('Timer');

describe('Timer', () => {

    it('Should exist', () => {
        expect(Timer).toExist();
    });

    describe('Render', () => {
        it('Should start in stopped state with zero count and render start button', () => {
            var timer = TestUtils.renderIntoDocument(<Timer/>);
            var $el = $(ReactDOM.findDOMNode(timer));

            expect(timer.state.count).toBe(0);
            expect(timer.state.countStatus).toBe('stopped');

            var $startButton = $el.find('button:contains(Start)');
            expect($startButton.length).toBe(1);
        });

        it('Should count up when started', (done) => {
            var timer = TestUtils.renderIntoDocument(<Timer/>);
            var $el = $(ReactDOM.findDOMNode(timer));
            var $startButton = $el.find('button:contains(Start)');
            TestUtils.Simulate.click($startButton[0]);

            expect(timer.state.countStatus).toBe('started');

            setTimeout(() => {
                expect(timer.state.count).toBe(2);
                done();
            }, 2500);
        });

        it('Should render pause counting when in paused state', (done) => {
            var timer = TestUtils.renderIntoDocument(<Timer/>);
            timer.statusChange('started');

            setTimeout(() => {
                expect(timer.state.countStatus).toBe('started');
                expect(timer.state.count).toBe(1);

                timer.statusChange('paused');
                setTimeout(() => {
                    expect(timer.state.countStatus).toBe('paused');
                    expect(timer.state.count).toBe(1);
                    done();
                }, 1500);

            }, 1100);
        });

        it('Should reset count and stop counting when stopped', (done) => {
            var timer = TestUtils.renderIntoDocument(<Timer/>);
            timer.statusChange('started');

            setTimeout(() => {
                expect(timer.state.countStatus).toBe('started');
                expect(timer.state.count).toBe(1);

                timer.statusChange('stopped');
                setTimeout(() => {
                    expect(timer.state.countStatus).toBe('stopped');
                    expect(timer.state.count).toBe(0);
                    done();
                }, 1500);

            }, 1100);
        });

    });

});