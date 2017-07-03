import win from './winView';
import lose from './loseView';
import {showScreen} from '../helpers/show-screen';
import {getHashObject} from '../helpers/location';
import {setTime, getWinPersent} from '../data/initial-game';
import app from '../app';

const view = {
  WIN: win,
  LOSE: lose,
};

export default class Result {
  constructor(stats) {
    this.view = null;
    this.stats = stats;
  }

  init() {
    const params = getHashObject(location.hash);
    const isEmptyParams = !Object.keys(params).length;

    this.state = isEmptyParams ? {} : params.state;
    this.isWin = isEmptyParams ? false : params.status;

    if (this.isWin) {
      this.state = setTime(this.state);
      this.state = getWinPersent(this.state, this.stats);
    }

    this.view = this.setView(this.isWin);

    this.view.onClick = () => {
      app.startNewGame();
    };

    showScreen(this.view);
  }

  setView(isWin) {
    if (isWin) {
      return new view.WIN(this.state);
    } else {
      return new view.LOSE(this.state);
    }
  }
}
