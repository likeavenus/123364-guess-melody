import {initialGame, stats, setAnswer, isEndOfGame, updateTime, setNextLevel} from '../data/initial-game';
import {showScreen} from '../helpers/show-screen';
import Timer from './timerView';
import Artist from './artistView';
import Genre from './genreView';
import app from '../app';

const view = {
  artist: Artist,
  genre: Genre,
};

export default class Game {
  constructor(quests) {
    this.game = initialGame;
    this.quests = quests;
    this.stats = stats;
  }

  get state() {
    const statistic = Object.assign({}, this.stats);

    return Object.assign({}, this.game, {quests: this.quests}, {stats: statistic});
  }

  get resultStats() {
    const time = this.game.time;

    return Object.assign({}, this.stats, {time});
  }

  init() {
    this.game = initialGame;
    this.stats = stats;
    this.startTimer();
    this.continueGame();
  }

  continueGame() {
    const QuestView = this.getQuestView();
    const state = this.getQuestState(this.game.level);

    const questView = new QuestView(state);

    questView.onClick = (answer) => {
      this.onAnswer(answer);
      this.showNextLevel();
    };

    showScreen(questView);
  }

  getQuestView() {
    const quest = this.getQuestState(this.game.level);

    return view[quest.type];
  }

  getQuestState(level) {
    return this.quests[level];
  }

  showNextLevel() {
    const quest = this.getQuestState(this.game.level + 1);
    const endGame = isEndOfGame(this.game.lives, quest);
    const isEnd = endGame[0];

    if (isEnd) {
      const endType = endGame[1];
      this.stopTimer();

      if (endType === `lives`) {
        app.endGame(this.resultStats, false);
      } else if (endType === `quests`) {
        app.endGame(this.resultStats, true);
      } else {
        throw new TypeError(`Нет типа ${endType}`);
      }
    } else {
      this.game = setNextLevel(this.game);
      this.continueGame();
    }
  }

  startTimer() {
    const timer = new Timer(this.game.time);
    const container = document.querySelector(`.main-timer`);

    timer.finishGame = () => {
      app.endGame(this.resultStats, false);
    };

    timer.updateTime = (animation) => {
      this.updateTime(animation.steps - animation.step);
    };

    container.appendChild(timer.element);
  }

  stopTimer() {
    document.querySelector(`.main-timer`).innerHTML = ``;
  }

  updateTime(newTime) {
    const newState = updateTime(this.state, newTime);

    this.updateState(newState);
  }

  onAnswer(answer) {
    const newState = setAnswer(this.state, answer);

    this.updateState(newState);
  }

  updateState(state) {
    this.game = {
      level: state.level,
      lives: state.lives,
      time: state.time,
    };
    this.levels = state.levels;
    this.stats = state.stats;
  }
}
