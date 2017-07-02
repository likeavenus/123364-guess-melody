import Welcome from './welcome/presenter';
import Game from './game/presenter';
import Result from './result/presenter';
import {getHash} from './helpers/location';
import Model from './data/model';

class Application {
  constructor() {
    this.model = new Model();

    window.onhashchange = () => {
      this.changeRoute();
    };
  }

  init() {
    this.model.load()
      .then((data) => {
        this.initRoutes(data);
        this.changeRoute();
      });
  }

  initRoutes(data) {
    this.routes = {
      '': new Welcome(),
      'game': new Game(data.quests),
      'result': new Result(data.stats),
    };
  }

  changeRoute() {
    const hash = getHash(location.hash);
    const presenter = this.routes[hash];

    presenter.init();
  }

  start() {
    location.hash = ``;
  }

  startNewGame() {
    location.hash = `game`;
  }

  endGame(state, status) {
    const stateObj = JSON.stringify({
      state,
      status,
    });

    const encode = encodeURIComponent(stateObj);

    location.hash = `result=${encode}`;
  }
}

const app = new Application();

export default app;
