var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
    getInitialState: () => {
        return {
            count: 0,
            countdownStatus: 'stopped'
        }
    },
    componentDidUpdate: function(previousProps, previousState) {
        if(this.state.countdownStatus !== previousState.countdownStatus){
            switch(this.state.countdownStatus) {
                case 'started':
                    this.startTimer(); 
                    break;
                case 'stopped':
                    this.setState({count: 0});
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },
    startTimer: function() {
        this.timer = setInterval(() => {
            var newCount = this.state.count-1;
            this.setState({
                count: newCount >= 0 ? newCount : 0
            });

        }, 1000);
    },
    setCountdown: function(seconds) {
        this.setState({
            count: seconds,
            countdownStatus: 'started'
        });
    },
    changeStatus: function(newSatus) {
        this.setState({
            countdownStatus: newSatus
        });
    },
    render: function() {
        var {count} = this.state;
        var renderControlSection = () => {
            if(this.state.countdownStatus === 'stopped'){
                return <CountdownForm onSetCountdown={this.setCountdown}/>
            }
            return <Controls countdownStatus={this.state.countdownStatus} onStatusChange={this.changeStatus}/>
        };

        return (
            <div>
                <Clock totalSeconds={count}/>
                {renderControlSection()}
            </div>
        )
    }
})

module.exports = Countdown;