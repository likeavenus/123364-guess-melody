import ResultLose from './view';
import {showNextScreen} from '../helpers/game';

export default (state) => {
  const resultLose = new ResultLose(state);

  resultLose.onClick = () => {
    // showNextScreen(state);
  };

  return resultLose;
};
