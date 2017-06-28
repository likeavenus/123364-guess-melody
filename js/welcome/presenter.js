import WelcomeView from './view';
import {showScreen} from '../helpers/show-screen';
import App from '../app';

class Welcome {
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

const welcome = new Welcome();

export default welcome;
