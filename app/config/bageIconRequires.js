const bageMarker = require("../img/bage-princ-big.png");
const bageMarker2 = require("../img/bage-princ2-big.png");
const bageMarker3 = require("../img/bage-princ3-big.png");
const bageMarker4 = require("../img/bage-princ4-big.png");
const bageIcon = require("../img/icon-bage-princ.png");
const bageIcon2 = require("../img/icon-bage-princ2.png");
const bageIcon3 = require("../img/icon-bage-princ3.png");
const bageIcon4 = require("../img/icon-bage-princ4.png");

const bageZooMarker = require("../img/bage-zoo-big.png");
const bageZooMarker2 = require("../img/bage-zoo2-big.png");
const bageZooMarker3 = require("../img/bage-zoo3-big.png");
const bageZooMarker4 = require("../img/bage-zoo4-big.png");

const bageZooIcon = require("../img/icon-bage-zoo.png");
const bageZooIcon2 = require("../img/icon-bage-zoo2.png");
const bageZooIcon3 = require("../img/icon-bage-zoo3.png");
const bageZooIcon4 = require("../img/icon-bage-zoo4.png");

export function getBageIcon(index) {
  switch (index) {
    case 0:
      return bageIcon;
    case 1:
      return bageIcon2;
    case 2:
      return bageIcon3;
    case 3:
      return bageIcon4;

    default:
      return bageIcon;
  }
}

export function getBageZooIcon(index) {
  switch (index) {
    case 0:
      return bageZooIcon;
    case 1:
      return bageZooIcon2;
    case 2:
      return bageZooIcon3;
    case 3:
      return bageZooIcon4;

    default:
      return bageZooIcon;
  }
}
export function getBageMarker(index) {
  switch (index) {
    case 0:
      return bageMarker;
    case 1:
      return bageMarker2;
    case 2:
      return bageMarker3;
    case 3:
      return bageMarker4;

    default:
      return bageMarker;
  }
}
export function getBageZooMarker(index) {
  switch (index) {
    case 0:
      return bageZooMarker;
    case 1:
      return bageZooMarker2;
    case 2:
      return bageZooMarker3;
    case 3:
      return bageZooMarker4;

    default:
      return bageZooMarker;
  }
}
