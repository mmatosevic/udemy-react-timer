var React = require('react');

var Clock = React.createClass({
    getDefaultProps: function() {
        totalSeconds: 0
    },
    propTypes: {
        totalSeconds: React.PropTypes.number
    },
    padNumber: function(n){
        if(n < 10) return "0" + n;
        return n;
    },
    formatSeconds: function(seconds) {
        var s = seconds % 60;
        var m = Math.floor(seconds / 60);
        return this.padNumber(m) + ':' + this.padNumber(s);
    },
    render: function() {
        var {totalSeconds} = this.props;
        var secondsText = this.formatSeconds(totalSeconds);
        return (
            <div className="clock">
                <span className="clock-text">{secondsText}</span>
            </div>
        )
    }
});

module.exports = Clock;