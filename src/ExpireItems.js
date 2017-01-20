import React from 'react';


//I don't even remember where all this came from!!
//May just be easier to start over.....

var ExpireItems = React.createClass({
    getDefaultProps() {
      return {
        delay: 1000
      };
    }

    getInitialState() {
      return {
        visible:true
      };
    }
    //Not sure I need this one unless I add the ability to edit
    componentWillReceiveProps(nextProps) {
      //resets the timer if children are changed
      //compare props in if statement
      if( ) {
        this.setTimer();
        this.setState({visible:true});
      }
    }

    componentDidMount() {
      this.setTimer();
    }

    setTimer() {
      //clears any existing timer
      this._timer !=null ? clearTimeout(this._timer) : null;
      //what are the _ for?

      //hide after 'delay' milliseconds(?)
      this._timer = setTimeout(function() {
        this.setState({visible: false});
        this._timer = null;
      }.bind(this), this.props.delay);
    }

    componentWillUnmount() {
      clearTimeout(this._timer);
    }

    render(){
      //return this.state.visible
      //? <div>{this.props.children}</div>
      //: <span />;
    }
});

export default ExpireItems;
