"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create_button = void 0;

const create_button = () => {
  let div = document.createElement("div");
  div.innerHTML = "<button>Click Me</button>";
  return div;
};

exports.create_button = create_button;