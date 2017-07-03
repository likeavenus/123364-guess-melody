import WelcomeView from './view';
import {showScreen} from '../helpers/show-screen';
import App from '../app';

export default class Welcome {
  constructor() {
    this.view = new WelcomeView();
  }

  init() {
    showScreen(this.view);

    this.view.onClick = () => {
      App.startNewGame();
    };
  }
}
