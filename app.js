var coutries = [];
fetch("http://api.dhsprogram.com/rest/dhs/countries")
  .then((response) => response.json())
  .then((data) => {
    const coutries1 = data["Data"];

    for (let i = 0; i < coutries1.length; i++) {
      coutries.push({ name: coutries1[i].CountryName });
    }
    console.log(coutries);
  });

const searchInput = document.querySelector(".search");
const sugsPanel = document.querySelector(".sug");

searchInput.addEventListener("keyup", function () {
  const input = searchInput.value;
  sugsPanel.innerHTML = "";

  const sugs = coutries.filter((country) => {
    return country.name
      .toLocaleLowerCase()
      .startsWith(input.toLocaleLowerCase());
  });
  sugs.forEach((sug) => {
    const div = document.createElement("div");
    div.innerHTML = sug.name;
    sugsPanel.appendChild(div);
  });
  if (input === "") {
    sugsPanel.innerHTML = "";
  }
});
