import LevelArtist from './view';
import {showNextScreen} from '../helpers/game';
import {setAnswer} from '../data/initial-game';

export default (state) => {
  const levelArtist = new LevelArtist(state);

  levelArtist.onClick = (currentState, answer) => {
    const newState = setAnswer(currentState, answer);

    showNextScreen(newState);
  };

  return levelArtist;
};
