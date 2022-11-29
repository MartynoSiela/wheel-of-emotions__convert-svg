function updateCode() {
  document.querySelector("pre").textContent =
    document.querySelector("svg").outerHTML;
}

function convert() {
  let session = new SvgTextToPath(document.querySelector("svg"), {
    googleApiKey: "AIzaSyA8fYHulKFUv3XoBGML8lfo3zOozfml7JI",
  });
  session.replaceAll().then(function () {
    updateCode();
  });
}
