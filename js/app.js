import Welcome from './welcome/presenter';
import Game from './game/presenter';
import Result from './result/presenter';
import {getHash} from './helpers/location';

class Application {
  constructor() {

    window.onhashchange = () => {
      this.changeRoute();
    };
  }

  init() {
    window.fetch(`https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody/questions`)
      .then((response) => response.json())
      .then((quests) => {
        this.initRoutes(quests);
        this.changeRoute();
      });
  }

  initRoutes(data) {
    this.routes = {
      '': new Welcome(),
      'game': new Game(data),
      'result': new Result(),
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
