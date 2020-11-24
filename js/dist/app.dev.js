"use strict";

/**
 * @name modApp
 * @version 0.0.1
 * @author @DevKhris */
var sites = document.querySelectorAll("ul li a");
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = sites[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var site = _step.value;
    site.addEventListener("click", smoothScrolling);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

function smoothScrolling(e) {
  e.preventDefault();
  var href = this.getAttribute("href");
  console.log(href);
  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
    alignToTop: true
  });
}