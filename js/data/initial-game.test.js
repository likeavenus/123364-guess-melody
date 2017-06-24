import assert from 'assert';
import {initialGame, setLives, setNextLevel} from './initial-game';

describe(`Модель игры`, () => {
  describe(`Жизни`, () => {
    it(`Жизни вообще работают`, () => {
      assert.equal(2, setLives(initialGame, 2).lives);
    });

    it(`Выбрасывает ошибку, если поставили жизнь меньше нуля`, () => {
      const setErrorLive = () => {
        setLives(initialGame, -1);
      };

      assert.throws(setErrorLive);
    });
  });

  describe(`Смена уровня`, () => {
    it(`Уровни вообще меняются`, () => {
      assert.equal(1, setNextLevel(initialGame).level);
    });

    it(`Выбрасывает ошибку, если следующего уровня нет`, () => {
      const setErrorLevel = () => {
        setNextLevel(initialGame, 20);
      };

      assert.throws(setErrorLevel);
    });

    it(`По умолчанию жизнь равна нулю`, () => {
      assert.equal(0, initialGame.level);
    });
  });
});
