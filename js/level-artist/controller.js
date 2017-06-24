import LevelArtist from './view';
import {showNextScreen} from '../helpers/game';

export default (state) => {
  const levelArtist = new LevelArtist(state);

  levelArtist.onClick = () => {
    showNextScreen(state);
  };

  return levelArtist;
};
