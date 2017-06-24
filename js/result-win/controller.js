import ResultWin from './view';
import {startNewGame} from '../helpers/game';

export default (state) => {
  const resultWin = new ResultWin(state);

  resultWin.onClick = () => {
    startNewGame();
  };

  return resultWin;
};
