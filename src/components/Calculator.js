import React from 'react';
import { store } from '../index.js';
import { actionInput } from '../redux/actions';
import Buttons from './Buttons.js';
import { OutputContainer, OperationContainer } from './Display.js';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
  }
  handleKeydown(e) {
    store.dispatch(actionInput(e.key));
  }

  render() {
    console.log('rendering <Calculator/>');

    return (
      <>
        <OutputContainer />
        <Buttons />
        <OperationContainer />
      </>
    );
  }
}

export default Calculator;
