export const initialGame = Object.freeze({
  lives: 3,
  level: 0,
  time: 120,
  levels: [
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
  ],
  statistic: {
    time: 2,
    rightAnswers: 0,
    otherPlayersPercent: 80,
  },
});

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

export const isEndOfGame = (state) => {
  if (state.lives === 0) {
    return [true, `endLives`];
  }

  // Если следующего уровня нет, значит конец игры
  try {
    setNextLevel(state);
    return [false];
  } catch (error) {
    return [true, `endQuests`];
  }
};

export const setAnswer = (state, answer) => {
  const quest = state.levels[state.level - 1];
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

  game.statistic.rightAnswers += 1;

  return game;
};
