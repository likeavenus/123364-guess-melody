import LevelArtist from '../level-artist/controller';
import LevelGenre from '../level-genre/controller';
import ResultWin from '../result-win/controller';
import ResultLose from '../result-lose/controller';
import Welcome from '../welcome/controller';

export const getScreen = (type) => {
  switch (type) {
    case `artist`: {
      return LevelArtist;
    }

    case `genre`: {
      return LevelGenre;
    }

    case `win`: {
      return ResultWin;
    }

    case `lose`: {
      return ResultLose;
    }

    case `welcome`: {
      return Welcome;
    }

    default: {
      throw new Error(`Типа ${type} нет`);
    }
  }
};
