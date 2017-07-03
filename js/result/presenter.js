import win from './winView';
import lose from './loseView';
import {showScreen} from '../helpers/show-screen';
import {getHashObject} from '../helpers/location';
import app from '../app';

const view = {
  WIN: win,
  LOSE: lose,
};

export default class Result {
  constructor() {
    this.view = null;

    const params = getHashObject(location.hash);
    const isEmptyParams = !Object.keys(params).length;

    this.state = isEmptyParams ? {} : params.stats;
    this.isWin = isEmptyParams ? false : params.status;
  }

  init() {
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
