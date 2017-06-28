export const initialGame = Object.freeze({
  lives: 3,
  level: 0,
  time: 120,
});

export const levels = [
  {
    type: `artist`,
    title: `Кто исполняет эту песню?`,
    answers: [
      {
        id: 1,
        imageSrc: ``,
        label: `Пелагея`,
      },
      {
        id: 2,
        imageSrc: ``,
        label: `Краснознаменная дивизия имени моей бабушки`,
      },
      {
        id: 3,
        imageSrc: ``,
        label: `Lorde`,
      },
    ],
    answer: [2],
  },
  {
    type: `genre`,
    title: `Выберите инди-рок треки`,
    answers: [
      {
        id: 1,
        audio: ``,
      },
      {
        id: 2,
        audio: ``,
      },
      {
        id: 3,
        audio: ``,
      },
      {
        id: 4,
        audio: ``,
      },
    ],
    answer: [4],
  },
  {
    type: `artist`,
    title: `Кто исполняет эту песню?`,
    answers: [
      {
        id: 1,
        imageSrc: ``,
        label: `Пелагея`,
      },
      {
        id: 2,
        imageSrc: ``,
        label: `Краснознаменная дивизия имени моей бабушки`,
      },
      {
        id: 3,
        imageSrc: ``,
        label: `Lorde`,
      },
    ],
    answer: [2],
  },
  {
    type: `genre`,
    title: `Выберите инди-рок треки`,
    answers: [
      {
        id: 1,
        audio: ``,
      },
      {
        id: 2,
        audio: ``,
      },
      {
        id: 3,
        audio: ``,
      },
      {
        id: 4,
        audio: ``,
      },
    ],
    answer: [4],
  },
  {
    type: `artist`,
    title: `Кто исполняет эту песню?`,
    answers: [
      {
        id: 1,
        imageSrc: ``,
        label: `Пелагея`,
      },
      {
        id: 2,
        imageSrc: ``,
        label: `Краснознаменная дивизия имени моей бабушки`,
      },
      {
        id: 3,
        imageSrc: ``,
        label: `Lorde`,
      },
    ],
    answer: [2],
  },
  {
    type: `genre`,
    title: `Выберите инди-рок треки`,
    answers: [
      {
        id: 1,
        audio: ``,
      },
      {
        id: 2,
        audio: ``,
      },
      {
        id: 3,
        audio: ``,
      },
      {
        id: 4,
        audio: ``,
      },
    ],
    answer: [4],
  },
  {
    type: `artist`,
    title: `Кто исполняет эту песню?`,
    answers: [
      {
        id: 1,
        imageSrc: ``,
        label: `Пелагея`,
      },
      {
        id: 2,
        imageSrc: ``,
        label: `Краснознаменная дивизия имени моей бабушки`,
      },
      {
        id: 3,
        imageSrc: ``,
        label: `Lorde`,
      },
    ],
    answer: [2],
  },
  {
    type: `genre`,
    title: `Выберите инди-рок треки`,
    answers: [
      {
        id: 1,
        audio: ``,
      },
      {
        id: 2,
        audio: ``,
      },
      {
        id: 3,
        audio: ``,
      },
      {
        id: 4,
        audio: ``,
      },
    ],
    answer: [4],
  },
  {
    type: `artist`,
    title: `Кто исполняет эту песню?`,
    answers: [
      {
        id: 1,
        imageSrc: ``,
        label: `Пелагея`,
      },
      {
        id: 2,
        imageSrc: ``,
        label: `Краснознаменная дивизия имени моей бабушки`,
      },
      {
        id: 3,
        imageSrc: ``,
        label: `Lorde`,
      },
    ],
    answer: [2],
  },
  {
    type: `genre`,
    title: `Выберите инди-рок треки`,
    answers: [
      {
        id: 1,
        audio: ``,
      },
      {
        id: 2,
        audio: ``,
      },
      {
        id: 3,
        audio: ``,
      },
      {
        id: 4,
        audio: ``,
      },
    ],
    answer: [4],
  }
];

export const stats = {
  time: 2,
  rightAnswers: 0,
  otherPlayersPercent: 80,
};

export const setLives = (state, lives) => {
  if (lives < 0) {
    throw new RangeError(`Жизнь не может быть меньше нуля`);
  }

  const game = Object.assign({}, state);

  game.lives = lives;

  return game;
};

export const updateTime = (state, time) => {
  const game = Object.assign({}, state, {time});

  return game;
};

export const setNextLevel = (state, level = null) => {
  const nextLevel = level || state.level + 1;

  if (!state.levels[nextLevel]) {
    throw new RangeError(`Нет ${nextLevel + 1} уровня`);
  }

  const game = Object.assign({}, state);

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
  const quest = state.levels[state.level];
  const correctAnswer = quest.answer;
  let game = null;

  if (isCorrectAnswer(correctAnswer, answer)) {
    game = setCorrectAnswerToStatistic(state);
  } else {
    game = setLives(state, state.lives - 1);
  }

  return game;
};

const isCorrectAnswer = (correctAnswer, answer) => {
  const userAnswer = answer.sort((a, b) => {
    return a - b;
  });

  return correctAnswer.every((item, i) => {
    return item === userAnswer[i];
  });
};

export const setCorrectAnswerToStatistic = (state) => {
  const game = Object.assign({}, state);

  game.stats.rightAnswers += 1;

  return game;
};

export const getFormattedTimeText = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return `${minutes ? `${minutes} минут ` : ``}${seconds ? `${seconds} секунд ` : ``}`;
};

export const setTime = (state) => {
  const newState = Object.assign({}, state);
  const time = newState.time;

  newState.stats.time = initialGame.time - time;

  return newState;
};
