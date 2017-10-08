var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', () => {
    it('Should exist', () => {
        expect(Clock).toExist();
    });

    describe('render', () => {
        it('Should render clock to output', () => {
            var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
            var $el = $(ReactDOM.findDOMNode(clock));
            var actualText = $el.find('.clock-text').text();
            expect(actualText).toBe('01:02');
        });
    });

    describe('formatSeconds', () => {
        it('Should format secodns less than 10 minutes', () => {
            var clock = TestUtils.renderIntoDocument(<Clock/>);
            var seconds = 61;
            var expected = '01:01';
            var actual = clock.formatSeconds(seconds);
            expect(actual).toBe(expected);
        });
    });
});