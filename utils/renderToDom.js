const renderToDom = (divId, html) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = html;
  /* something that you can do instead of = html is += html
  this will it will append into your current html instead of replace */
};

export default renderToDom;
