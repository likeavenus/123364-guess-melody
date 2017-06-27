import {getElementFromTemplate} from './getElementFromTemplate';

export default class AbstractView {
  get template() {
    throw new Error(`Шаблон не задан`);
  }

  get element() {
    if (!this._element) {
      this._element = this.render();
      this.bind();
    }

    return this._element;
  }

  render() {
    return getElementFromTemplate(this.template);
  }
}
