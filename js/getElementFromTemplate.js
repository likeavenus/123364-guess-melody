/**
 * Возвращает содержимое шаблона
 *
 * @param {String} templateString — шаблонная строка
 *
 * @return {HTMLElement}
 */
export const getElementFromTemplate = (templateString) => {
  const container = document.createElement(`div`);

  container.innerHTML = templateString;

  return container.children[0].content;
};
