import Timer from './view';
import {endGame} from '../helpers/game';

export default (state, container) => {
  const timer = new Timer(state);

  container.appendChild(timer.element);

  timer.finishGame = () => {
    endGame();
  };

  return timer;
};
