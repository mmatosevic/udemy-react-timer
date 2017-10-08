var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
    getInitialState: () => {
        return {count: 0}
    },
    setCountdown: function(seconds) {
        this.setState({
            count: seconds
        });
    },
    render: function() {
        var {count} = this.state;
        return (
            <div>
                <Clock totalSeconds={count}/>
                <CountdownForm onSetCountdown={this.setCountdown}/>
            </div>
        )
    }
})

module.exports = Countdown;