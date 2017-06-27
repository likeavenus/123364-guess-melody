import {showScreen} from '../helpers/show-screen';
import {getScreen} from '../helpers/get-screen';
import {setNextLevel, isEndOfGame} from '../data/initial-game';
import initializeTimer from '../timer/controller';

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

export const beginGame = (state) => {
  const timerContainer = document.querySelector(`.main-timer`);
  initializeTimer(state, timerContainer);

  showNextScreen(state);
};

export const endGame = () => {
  const loseScreen = getScreen(`lose`);
  const timerContainer = document.querySelector(`.main-timer`);
  timerContainer.innerHTML = ``;

  showScreen(loseScreen());
};

export const winGame = (state) => {
  const winScreen = getScreen(`win`);

  showScreen(winScreen(state));
};
