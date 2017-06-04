export default Object.freeze({
  level: {
    'welcome': {
      title: `Правила игры`,
      text: `Правила просты&nbsp;— за&nbsp;2 минуты дать максимальное количество правильных ответов.
      Удачи!`,
    },
    'level-artist': {
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
    'level-genre': {
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
    'result-win': {
      title: `Вы настоящий меломан!`,
    },
    'result-lose': {
      title: `Вы проиграли`,
      text: `Ничего, вам повезет в следующий раз`,
    },
  },
  statistic: {
    time: 2,
    rightAnswers: 4,
    otherPlayersPercent: 80,
  },
});
