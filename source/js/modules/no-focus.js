const button = document.querySelectorAll('.button');

const disableFocus = () => {
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', () => {
      button[i].blur();
    });
  }
};

export {disableFocus};
