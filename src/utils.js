import Cookies from "js-cookie";

export const makeId = type => type + "-" + Date.now();

export const vec = {
  add: (x, y) => [x[0] + y[0], x[1] + y[1]],
  sub: (x, y) => [x[0] - y[0], x[1] - y[1]],
  prd: (x, y) => [x[0] * y[0], x[1] * y[1]],
  div: (x, y) => [x[0] / y[0], x[1] / y[1]],
  scl: (a, x) => [a * x[0], a * x[1]],
  len: x => (x[0] ** 2 + x[1] ** 2) ** 0.5
};

export const pt = {
  move: (basePt, dist, dir) => {
    const trig = [Math.cos(dir), Math.sin(dir)];
    return vec.add(basePt, vec.scl(dist, trig));
  },
  dirToward: (ptA, ptB) => {
    const oShiftPt = vec.sub(ptB, ptA);
    return Math.atan2(oShiftPt[1], oShiftPt[0]);
  },
  moveToward: (basePt, dist, refPt) => {
    const dir = pt.dirToward(basePt, refPt);
    return pt.move(basePt, dist, dir);
  }
};

export const persistence = {
  save: state => {
    Cookies.set("graph", JSON.stringify(state));
  },
  load: () => {
    const stringState = Cookies.get("graph");
    return stringState ? JSON.parse(stringState) : {};
  },
  clear: () => {
    Cookies.remove("graph");
  }
};

export const download = () => {
  const svg = document.getElementsByClassName("Sheet")[0].outerHTML;
  const a = document.createElement("a");
  a.href = encodeURI("data:image/svg," + svg);
  a.download = "graph.svg";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
