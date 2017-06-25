export const initialGame = Object.freeze({
  lives: 3,
  level: 0,
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
    }
  ],
  statistic: {
    time: 2,
    rightAnswers: 4,
    otherPlayersPercent: 80,
  },
});

export const setLives = (state, lives) => {
  if (lives < 0) {
    throw new Error(`Жизнь не может быть меньше нуля`);
  }

  const game = Object.assign({}, state);

  game.lives = lives;

  return game;
};

export const setNextLevel = (state, level = null) => {
  const nextLevel = level || state.level + 1;

  if (!state.levels[nextLevel]) {
    throw new Error(`Нет ${nextLevel} уровня`);
  }

  const game = Object.assign({}, state);

  game.level = nextLevel;

  return game;
};
