import React, {Component} from 'react';

class Button extends Component {
      render(){
          return(
            <div className={`colums-${this.props.cols}`}>
                 <Button className="calc-button" onClick={() => this.props.action(this.props.sysmbol)}>{this.props.symbol}</Button>
                 
             </div> 
          )
      }
}

export default Button;