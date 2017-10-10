var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
    getInitialState: () => {
        return {
            count: 0,
            countStatus: 'paused'
        }
    },
    componentDidUpdate: function(prevProps, prevState) {
        if(this.state.countStatus !== prevState.countStatus){
            this.countStatusChanged(this.state.countStatus);
        }
    },
    countStatusChanged: function(newCountStatus){
        switch(newCountStatus){
            case 'started':
                this.start();
                break;
            case 'stopped':
                this.setState({count: 0});
            case 'paused':
                clearInterval(this.timer);
                break;
        }
    },
    start: function() {
        this.timer = setInterval(() => {
            var newCount = this.state.count + 1;
            this.setState({
                count: newCount
            });
        }, 1000);
    },
    statusChange: function (newStatus) {
        this.setState({
            countStatus: newStatus
        })
    },
    componentWillUnmount: function() {
        clearInterval(this.timer);
    },
    render: function () {
        var { count, countStatus } = this.state;
        return (
            <div>
                <h1 className="page-title">Timer</h1>
                <Clock totalSeconds={count} />
                <Controls countdownStatus={countStatus} onStatusChange={this.statusChange} />
            </div>
        )
    }
})

module.exports = Timer;