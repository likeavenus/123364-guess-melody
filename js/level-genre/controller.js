import LevelGenre from './view';
import {showNextScreen} from '../helpers/game';
import {setAnswer} from '../data/initial-game';

export default (state) => {
  const levelGenre = new LevelGenre(state);

  levelGenre.onClick = (currentState, answer) => {
    const newState = setAnswer(currentState, answer);

    showNextScreen(newState);
  };

  return levelGenre;
};
