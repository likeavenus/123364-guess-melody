import {initialGame, levels, stats, setAnswer, isEndOfGame, updateTime} from '../data/initial-game';
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
  constructor() {
    this.game = initialGame;
    this.levels = levels;
    this.stats = stats;

    this.startTimer();
  }

  get state() {
    return Object.assign({}, this.game, {levels: this.levels}, {stats: this.stats});
  }

  init() {
    const QuestView = this.getQuestView();
    const state = this.getQuestState();

    const questView = new QuestView(state);

    questView.onClick = (answer) => {
      this.onAnswer(answer);
      this.showNextLevel();
    };

    showScreen(questView);
  }

  getQuestView() {
    const quest = this.getQuestState();

    return view[quest.type];
  }

  getQuestState() {
    const level = this.game.level;

    return this.levels[level];
  }

  showNextLevel() {
    this.game.level += 1;

    const quest = this.getQuestState();
    const endGame = isEndOfGame(this.game.lives, quest);
    const isEnd = endGame[0];

    if (isEnd) {
      const endType = endGame[1];
      this.stopTimer();

      if (endType === `lives`) {
        app.endGame(this.state, false);
      } else if (endType === `quests`) {
        app.endGame(this.state, true);
      } else {
        throw new TypeError(`Нет типа ${endType}`);
      }
    } else {
      this.init();
    }
  }

  startTimer() {
    const timer = new Timer(this.game.time);
    const container = document.querySelector(`.main-timer`);

    timer.finishGame = () => {
      app.endGame(this.state, false);
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
