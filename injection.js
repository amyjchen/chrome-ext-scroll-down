document.body.scrollIntoView({ block: "end", inline: "nearest", behavior: "smooth" });
if (window.location.host === "docs.google.com") {
  for (let e of document.getElementsByClassName("kix-scrollareadocumentplugin")) e.scrollIntoView({ block: "end", inline: "nearest", behavior: "smooth" });
}
if (window.location.host === "drive.google.com") {
  for (let e of document.getElementsByTagName("c-wiz")) e.scrollIntoView({ block: "end", inline: "nearest", behavior: "smooth" });
}

if (window.location.host === "www.notion.so") {
  for (let e of document.getElementsByClassName("notion-scroller")) e.scrollIntoView({ block: "end", inline: "nearest", behavior: "smooth" });
  for (let e of document.getElementsByClassName("whenContentEditable")) e.scrollIntoView({ block: "end", inline: "nearest", behavior: "smooth" });
}
