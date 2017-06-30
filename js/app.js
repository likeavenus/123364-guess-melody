import Welcome from './welcome/presenter';
import Game from './game/presenter';
import Result from './result/presenter';
import {getHash} from './helpers/location';

const route = {
  '': Welcome,
  'game': Game,
  'result': Result,
};

class Application {
  constructor() {

    window.onhashchange = () => {
      this.changeRoute();
    };
  }

  init() {
    this.changeRoute();
  }

  changeRoute() {
    const hash = getHash(location.hash);
    const presenter = new route[hash]();

    presenter.init();
  }

  start() {
    location.hash = ``;
  }

  startNewGame() {
    location.hash = `game`;
  }

  endGame(stats, status) {
    const stateObj = JSON.stringify({
      stats,
      status,
    });

    const encode = encodeURIComponent(stateObj);

    location.hash = `result=${encode}`;
  }
}

const app = new Application();

export default app;
