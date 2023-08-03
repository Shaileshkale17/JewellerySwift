fetch("URL").this;

const xValues = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
const yValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        data: yValues,
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      yAxes: [{ ticks: { min: 6, max: 16 } }],
    },
  },
});

// --------------arrow----------------

let Gold = false;
if (Gold == true) {
  document.getElementById("Gold-up-arrow").style.display = "none";
} else {
  document.getElementById("Gold-down-arrow").style.display = "none";
}
let Silver = true;
if (Silver == true) {
  document.getElementById("Silver-up-arrow").style.display = "none";
} else {
  document.getElementById("Silver-down-arrow").style.display = "none";
}
let Palladium = false;
if (Palladium == true) {
  document.getElementById("Palladium-up-arrow").style.display = "none";
} else {
  document.getElementById("Palladium-down-arrow").style.display = "none";
}

// --------------arrow----------------
fetch("")
  .then((date) => {
    return date.json(); //converted to object
  })
  .then((objectDate) => {
    console.log(objectDate[0].title);
    let tableDate = "";
    objectDate.map((values) => {
      tableDate += `<tr>
    <td>1</td>
    <td>Gold</td>
    <td>&#8377; 10,000</td>
    <td>24/07/2023</td>
    <td>
      <i class="bi bi-graph-up-arrow"></i>
      <i class="bi bi-graph-down-arrow"></i>
    </td>
  </tr>`;
    });
    document.getElementById("table-body-ToDay").innerHTML = tableDate;
  })
  .catch((err) => {
    console.log(err);
  });
