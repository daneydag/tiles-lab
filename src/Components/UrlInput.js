import React, {Component} from 'react';

class UrlInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: null
    }
  };
  handleChange = (event) => {
    this.setState({"url": event.target.value});
  }

  render() {
    return (
        <li className="UrlInput cards-item">
            <div className="card">
              <div className="card-content">
                <div className="card-title">URL</div>
                <p className="card-text">
                  <div className="input btn-block">
                    <input type="url" placeholder="Type a URL here!" className="textInput" onChange={this.handleChange} />
                  </div>
                  <div className="output">
                    <label for="urlOutput">State:{this.state.url} </label>
                    <span name="urlOutput"><a href="http://" id="url" target="_blank" rel="noopener noreferrer">&nbsp;</a></span>
                  </div>
                </p>
              </div>
            </div>
          </li>
    )
  }
}

export default UrlInput;