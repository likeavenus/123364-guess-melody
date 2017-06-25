import ResultLose from './view';
import {startNewGame} from '../helpers/game';

export default (state) => {
  const resultLose = new ResultLose(state);

  resultLose.onClick = () => {
    startNewGame();
  };

  return resultLose;
};
