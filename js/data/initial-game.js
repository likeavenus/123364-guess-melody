export const initialGame = Object.freeze({
  lives: 3,
  level: 0,
  time: 120,
  rightAnswers: 0,
});

export const setLives = (state, lives) => {
  if (lives < 0) {
    throw new RangeError(`Жизнь не может быть меньше нуля`);
  }

  const newState = Object.assign({}, state);

  newState.game.lives = lives;

  return newState;
};

export const updateTime = (state, time) => {
  const game = Object.assign({}, state.game, {time});
  const newState = Object.assign({}, state, {game});

  return newState;
};

export const setNextLevel = (state) => {
  const nextLevel = state.game.level + 1;

  if (!state.quests[nextLevel]) {
    throw new RangeError(`Нет ${nextLevel + 1} уровня`);
  }

  const game = Object.assign({}, state.game);

  game.level = nextLevel;

  return game;
};

/**
 * @param {Number} lives
 * @param {*} NextQuest
 *
 * @return {Array} - [конец игры, причина окончания игры]
 */
export const isEndOfGame = (lives, NextQuest) => {
  if (lives === 0) {
    return [true, `lives`];
  } else if (!NextQuest) {
    return [true, `quests`];
  } else {
    return [false];
  }
};

export const setAnswer = (state, answer) => {
  const quest = state.quests[state.game.level];
  const correctAnswer = isCorrectAnswer(quest, answer);
  let game = null;

  if (correctAnswer) {
    game = setCorrectAnswerToStatistic(state);
  } else {
    game = setLives(state, state.game.lives - 1);
  }

  return game;
};

const isCorrectAnswer = (quest, answer) => {
  if (quest.type === `genre`) {
    return answer.every((item) => item === quest.genre);
  } else if (quest.type === `artist`) {
    return answer;
  } else {
    throw new TypeError(`Нет типа ${quest.type}`);
  }
};

export const setCorrectAnswerToStatistic = (state) => {
  const newState = Object.assign({}, state);

  newState.game.rightAnswers += 1;

  return newState;
};

export const getFormattedTimeText = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return `${minutes ? `${minutes} минут ` : ``}${seconds ? `${seconds} секунд ` : ``}`;
};

export const setTime = (state) => {
  const newState = Object.assign({}, state);

  newState.time = initialGame.time - newState.time;

  return newState;
};

// Задаю счетчиком айди своей статистики,
// чтобы удобно искать в массиве
let newStatCounter = 0;

export const getWinPersent = (state, stats) => {
  newStatCounter += 1;

  stats.push({
    id: newStatCounter,
    time: state.time,
    answers: state.rightAnswers,
  });

  const newStats = stats
    .sort((a, b) => b.answers - a.answers)
    .sort((a, b) => {
      if (a.answers === b.answers) {
        return a.time - b.time;
      } else {
        return b.answers - a.answers;
      }
    });

  const currentResultIndex = newStats.findIndex((item) => item.id === newStatCounter);
  const betterPlaceThanOther = newStats.length - (currentResultIndex + 1);
  const winPersent = betterPlaceThanOther / newStats.length * 100;
  const newState = Object.assign({}, state, {winPersent});

  return newState;
};

export const preprocessToSend = (game) => {
  const stateWithTime = setTime(game);

  return {time: stateWithTime.time, answers: game.rightAnswers};
};
