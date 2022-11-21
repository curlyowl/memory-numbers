import React, { useState, useEffect } from 'react';
import './App.css';
import { FieldNumber } from './components/FieldNumber';
import { KEY_CODE_ARROW_LEFT, KEY_CODE_ARROW_RIGHT } from "./constants";

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

function App() {
  const [fieldNumbers, setField] = useState([random(2, 8), random(2, 8), random(2, 8)]);
  const [rightAnswer, setRightAnswer] = useState(0);

  const match = () => {
    const firstNum = fieldNumbers[0];
    const lastNum = fieldNumbers[fieldNumbers.length - 1];

    if (firstNum === lastNum) setRightAnswer(rightAnswer + 1);
    else setRightAnswer(0);

    setField((oldField) => [...oldField.slice(1), random(2, 8)]);
  }

  const dontMatch = () => {
    const firstNum = fieldNumbers[0];
    const lastNum = fieldNumbers[fieldNumbers.length - 1];

    if (firstNum !== lastNum) setRightAnswer(rightAnswer + 1);
    else setRightAnswer(0);

    setField((oldField) => [...oldField.slice(1), random(2, 8)]);
  }

  const onKeyUp = (e: any) => {
    if (e.keyCode === KEY_CODE_ARROW_LEFT) match();
    if (e.keyCode === KEY_CODE_ARROW_RIGHT) dontMatch();
  }

  useEffect(() => {
    document.addEventListener('keyup', onKeyUp);

    return () => {
      document.removeEventListener('keyup', onKeyUp);
    }
  }, [onKeyUp]);

  return (
    <div className="App">
      <div>
        <h4>Совпадает ли цифра на крайне карточке сверху с цифрой на крайней карточке снизу?</h4>
      </div>
      <div className="field">
        {fieldNumbers.map((number, index) => <FieldNumber rightAnswers={rightAnswer} isLastItem={index === fieldNumbers.length - 1} key={index} number={number} />)}
      </div>
      <div>
        <button onClick={match}>Да</button>
        <button onClick={dontMatch}>Нет</button>
      </div>
    </div>
  );
}

export default App;
