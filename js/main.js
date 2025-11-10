// js/main.js
document.addEventListener("DOMContentLoaded", function () {

  const singers = [
    {
      name: "Sleep Token",
      bestSong: "DYWTYLM",
      hometown: "London, England",
      img: "images/SleepToken.jpg"
    },
    {
      name: "Taylor Swift",
      bestSong: "Love Story",
      hometown: "Pennsylvania, USA",
      img: "images/TaylorSwift.jpg"
    },
    {
      name: "PLVTINUM",
      bestSong: "HEARTLESS (with Goody Grace)",
      hometown: "New York, USA",
      img: "images/PLVTINUM.jpg"
    },
    {
      name: "The Weeknd",
      bestSong: "One Right Now",
      hometown: "Toronto, Canada",
      img: "images/TheWeeknd.jpg"
    }
  ];

  const tableBody = document.querySelector("#singerTable tbody");
  const cardRow = document.querySelector("#cardRow");

  if (!tableBody) {
    console.warn("Cannot find #singerTable tbody — table population skipped");
    return;
  }
  if (!cardRow) {
    console.warn("Cannot find #cardRow — cards population skipped");
    return;
  }

  // Populate Bootstrap table
  if (singers && Array.isArray(singers)) {
    singers.forEach((singer) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${singer.name}</td>
        <td>${singer.bestSong}</td>
        <td>${singer.hometown}</td>
      `;
      tableBody.appendChild(row);
    });
  }

  // Populate Bootstrap cards
  if (singers && Array.isArray(singers)) {
    singers.forEach((singer) => {
      const col = document.createElement("div");
      col.className = "col-sm-6 col-md-4 col-lg-3";
      col.innerHTML = `
        <div class="card shadow h-100">
          <img src="${singer.img}" class="card-img-top" alt="${singer.name}" onerror="this.onerror=null; this.src='images/singer.jpg'">
          <div class="card-body text-center">
            <h5 class="card-title">${singer.name}</h5>
            <p class="card-text"><strong>Best Song:</strong> ${singer.bestSong}</p>
            <p class="text-muted">${singer.hometown}</p>
          </div>
        </div>
      `;
      cardRow.appendChild(col);
    });
  }

});