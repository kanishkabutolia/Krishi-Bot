function setLang(language, iconPath) {
  document.getElementById("selected-lang").innerHTML =
    `<img src="${iconPath}" class="Icon"> ${language}`;
}
