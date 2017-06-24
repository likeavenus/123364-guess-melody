import LevelGenre from './view';
import {showNextScreen} from '../helpers/game';

export default (state) => {
  const levelArtist = new LevelGenre(state);

  levelArtist.onClick = () => {
    showNextScreen(state);
  };

  return levelArtist;
};
