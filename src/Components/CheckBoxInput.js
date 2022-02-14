import React, {Component} from 'react';

class CheckboxInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: null
    }
  };
  handleChange = (event) => {
    this.setState({"checkbox": event.target.value});
  }

  render() {
    return (
        <li className="CheckboxInput cards-item">
        <div className="card">
          <div className="card-content">
            <div className="card-title">Checkbox</div>
            <p className="card-text">
              <div className="input" onChange={this.handleChange}>
                <input type="checkbox" name="checkboxInput" value="1" className="checkboxInput" />
                <input type="checkbox" name="checkboxInput" value="2" className="checkboxInput" />
                <input type="checkbox" name="checkboxInput" value="3" className="checkboxInput" />
                <input type="checkbox" name="checkboxInput" value="4" className="checkboxInput" />
                <input type="checkbox" name="checkboxInput" value="5" className="checkboxInput" />
              </div>
              <div className="output">
                <label for="checkboxOutput">Count:{this.state.checkbox} </label>
                <span name="checkboxOutput"></span>
              </div>
            </p>
          </div>
        </div>
      </li>
    )
  }
}

export default CheckboxInput;