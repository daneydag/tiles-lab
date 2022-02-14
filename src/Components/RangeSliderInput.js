import React, {Component} from 'react';

class RangeSliderInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: null
    }
  };
  handleChange = (event) => {
    this.setState({"rangeslider": event.target.value});
  }

  render() {
    return (
        <li className="RangeInput cards-item">
        <div className="card">
          <div className="card-content">
            <div className="card-image"></div>
            <div className="card-title">Range Slider</div>
            <p className="card-text">
              <div className="input">
                <input type="range" className="rangeInput" onChange={this.handleChange} />
              </div>
              <div className="output">
                <label for="rangeOutput">State:{this.state.rangeslider} </label>
                <span name="rangeOutput"></span>
              </div>
            </p>
          </div>
        </div>
      </li>
    )
  }
}

export default RangeSliderInput;