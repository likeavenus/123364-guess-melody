import welcome from './welcome/presenter';
import game from './game/presenter';
import result from './result/presenter';

const presenter = {
  WELCOME: welcome,
  GAME: game,
  RESULT: result,
};

class Application {
  start() {
    presenter.WELCOME.init();
  }

  startNewGame() {
    const newGame = new presenter.GAME();

    newGame.init();
  }

  endGame(state, status) {
    const gameResult = new presenter.RESULT(state, status);

    gameResult.init();
  }
}

const app = new Application();

export default app;
