import win from './winView';
import lose from './loseView';
import {showScreen} from '../helpers/show-screen';
import app from '../app';

const view = {
  WIN: win,
  LOSE: lose,
};

export default class Result {
  constructor(state, isWin) {
    this.view = null;
    this.state = state;
    this.isWin = isWin;
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
