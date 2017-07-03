import assert from 'assert';
import {initialGame, setLives, setNextLevel} from './initial-game';

describe(`Модель игры`, () => {
  describe(`Жизни`, () => {
    it(`Жизни вообще работают`, () => {
      const game = Object.assign({}, {game: initialGame});
      assert.equal(2, setLives({game}, 2).game.lives);
    });

    it(`Выбрасывает ошибку, если поставили жизнь меньше нуля`, () => {
      const setErrorLive = () => {
        setLives(initialGame, -1);
      };

      assert.throws(setErrorLive);
    });
  });

  describe(`Смена уровня`, () => {
    it(`Выбрасывает ошибку, если следующего уровня нет`, () => {
      const setErrorLevel = () => {
        const game = {
          level: 20,
        };

        setNextLevel(game);
      };

      assert.throws(setErrorLevel);
    });

    it(`По умолчанию жизнь равна нулю`, () => {
      assert.equal(0, initialGame.level);
    });
  });
});
