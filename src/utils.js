import Cookies from "js-cookie";

export const makeId = type => type + "-" + Date.now();

export const dist = (a, b) => ((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2) ** 0.5;

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
