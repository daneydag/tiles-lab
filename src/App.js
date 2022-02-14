import React, {Component} from 'react';
import './App.css';
import TextInput from './Components/TextInput';
import DateInput from './Components/DateInput';
import NumberInput from './Components/NumberInput';
import ButtonInput from './Components/ButtonInput';
import CheckboxInput from './Components/CheckBoxInput';
import UrlInput from './Components/UrlInput';
import SelectInput from './Components/SelectInput';
import RadioInput from './Components/RadioInput';
import RangeSliderInput from './Components/RangeSliderInput';
import ColorInput from './Components/ColorInput';
class App extends Component  {
  render() {
    return (
      <div className="container">
        <ul className="cards">
          <TextInput />
          <DateInput />
          <NumberInput/>
          <ButtonInput/>
          <CheckboxInput/>
          <SelectInput/>
          <RadioInput/>
          <RangeSliderInput/>
          <ColorInput/>
          <UrlInput/>
        </ul>
      </div>
    );
  }
}

export default App;
