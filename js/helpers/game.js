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
  const isEnd = endOfGame[0];

  if (isEnd) {
    const endType = endOfGame[1];

    if (endType === `endLives`) {
      endGame();
    } else if (endType === `endQuests`) {
      winGame(state);
    }
  } else {
    showScreen(level(setNextLevel(state)));
  }
};

export const startNewGame = () => {
  const welcome = getScreen(`welcome`);

  showScreen(welcome());
};

export const endGame = () => {
  const loseScreen = getScreen(`lose`);

  showScreen(loseScreen());
};

export const winGame = (state) => {
  const winScreen = getScreen(`win`);

  showScreen(winScreen(state));
};
