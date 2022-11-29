function save_svg(filename, mimeType) {
  var parent = document.getElementById("result").innerHTML;
  parent = parent.replace(/&lt;/g, "<");
  parent = parent.replace(/&gt;/g, ">");
  parent = parent.replace(/&quot;/g, '"');
  parent = parent.replace(/&#39;/g, "'");
  parent = parent.replace(/&amp;/g, "&");
  var link = document.createElement("a");
  mimeType = mimeType || "image/svg+xml";

  link.setAttribute("download", filename);
  link.setAttribute("href", "data:" + mimeType + ";charset=utf-8," + parent);
  link.click();
}

var fileName = "sample.svg";
