import {showScreen} from '../helpers/show-screen';
import {getScreen} from '../helpers/get-screen';
import {setNextLevel, isEndOfGame} from '../data/initial-game';

/**
 * Переход на следующий экран
 *
 * @param {Object} state - состояние игры
 */
export const showNextScreen = (state) => {
  const levelType = state.levels[state.level].type;
  const level = getScreen(levelType);

  const endOfGame = isEndOfGame(state);

  if (endOfGame) {
    const winScreen = getScreen(`win`);

    showScreen(winScreen(state));
  } else {
    showScreen(level(setNextLevel(state)));
  }
};

export const startNewGame = () => {
  const welcome = getScreen(`welcome`);

  showScreen(welcome());
};
