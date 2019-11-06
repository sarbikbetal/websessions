document.getElementById('toggleLoader').addEventListener('click', () => {
  document.getElementById('loaderSpace')
    .removeChild(document.getElementById('loaderSpace')
      .firstElementChild);
})