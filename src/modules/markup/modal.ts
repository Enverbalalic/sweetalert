import CLASS_NAMES from '../class-list';

const {
  MODAL,
  X_BUTTON,
} = CLASS_NAMES;

export const modalMarkup: string = `
  <div class="${MODAL} asdasd" role="dialog" aria-modal="true"><div onclick="hideModal()" class="${X_BUTTON}">X</div>` +
  // Icon

  // Title

  // Text

  // Content

  // Buttons

  `</div>`
;

export default modalMarkup;

