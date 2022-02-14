import React, {Component} from 'react';

  class ButtonInput extends Component {
    constructor(props) {
      super(props);
      this.state = {
        button:"true"
      }
    };
  
    handlebutton = () => {
    
        if (this.state.button === "true"){
            this.setState({button:"false"})
        }
        else{
            this.setState({button: "true"})
        }
      }


render() {
    return(
        <li className="ButtonInput cards-item">
        <div className="card">
          <div className="card-content">
            <div className="card-title">Button</div>
            <p className="card-text">
              <div className="input btn-block">
                <input type="button" value="Click me!" className="btn" 
                onClick={this.handlebutton}/>
              </div>
              <div className="output">
                <label for="buttonOutput">State:{this.state.button} </label>
                <span name="buttonOutput"></span>
              </div>
            </p>
          </div>
        </div>
      </li>
    );
  }
}
export default ButtonInput;
