/**
 * Возвращает содержимое шаблона
 *
 * @param {String} templateString — шаблонная строка
 *
 * @return {HTMLElement}
 */
export const getElementFromTemplate = (templateString) => {
  const container = document.createElement(`template`);

  container.innerHTML = templateString;

  return container.content;
};
