import AbstractView from '../helpers/abstract-view';
import initializePlayer from '../helpers/player';

export default class LevelGenre extends AbstractView {
  constructor(state) {
    super();

    this.quest = state;
    this.sendButton = null;
    this.answerCheckboxes = null;
  }

  get template() {
    return `
      <section class="main main--level main--level-genre">
        <h2 class="title">${this.quest.question}</h2>
        <form class="genre">
        ${this.quest.answers.map((answer, i) => `
          <div class="genre-answer">
            <div class="player-wrapper"></div>
            <input type="checkbox" name="answer" value="${answer.genre}" id="${i}-${answer.genre}">
            <label ${this.quest.genre === answer.genre ? `style="background-color: red"` : ``} class="genre-answer-check" for="${i}-${answer.genre}"></label>
          </div>
        `).join(``)}
          <button class="genre-answer-send" type="submit" disabled>Ответить</button>
        </form>
      </section>
    `.trim();
  }

  bind() {
    const element = this.element;
    this.sendButton = element.querySelector(`.genre-answer-send`);
    this.answerCheckboxes = element.querySelectorAll(`input[type="checkbox"]`);
    const players = this.element.querySelectorAll(`.player-wrapper`);
    const audio = [];

    Array.from(players).forEach((player, i) => audio.push(initializePlayer(player, this.quest.answers[i].src)));

    Array.from(this.answerCheckboxes).forEach((input) => {
      input.addEventListener(`change`, () => {
        this.validateForm();
      });
    });

    this.sendButton.addEventListener(`click`, (e) => {
      e.preventDefault();

      const answers = this.getAnswers();

      audio.forEach((destroyAudio) => destroyAudio());

      this.onClick(answers);
    });
  }

  validateForm() {
    this.sendButton.disabled = !this.isSomeCheckboxChecked();
  }

  isSomeCheckboxChecked() {
    return Array.from(this.answerCheckboxes).some((checkbox) => {
      return checkbox.checked;
    });
  }

  getAnswers() {
    return Array.from(this.answerCheckboxes).filter((checkbox) => {
      return checkbox.checked;
    }).map((checkbox) => {
      return checkbox.value;
    }).sort((a, b) => a - b);
  }
}
