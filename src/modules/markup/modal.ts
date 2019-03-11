import CLASS_NAMES from '../class-list';

const {
  MODAL,
  X_BUTTON,
} = CLASS_NAMES;

export const modalMarkup: string = `
  <div class="${MODAL}" role="dialog" aria-modal="true"><div class="${X_BUTTON}">X</div>` +
  // Icon

  // Title

  // Text

  // Content

  // Buttons

  `</div>`
;

export default modalMarkup;

