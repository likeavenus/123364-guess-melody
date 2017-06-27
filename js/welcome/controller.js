import Welcome from './view';
import {initialGame} from '../data/initial-game';
import {beginGame} from '../helpers/game';

export default () => {
  const welcome = new Welcome();

  welcome.onClick = () => {
    beginGame(initialGame);
  };

  return welcome;
};
