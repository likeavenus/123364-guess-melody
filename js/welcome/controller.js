import Welcome from './view';
import {initialGame} from '../data/initial-game';
import {showNextScreen} from '../helpers/game';

export default () => {
  const welcome = new Welcome();

  welcome.onClick = () => {
    showNextScreen(initialGame);
  };

  return welcome;
};
