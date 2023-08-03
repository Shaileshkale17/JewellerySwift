// fetch data to datebase in API
fetch("").then((date) => {
    return date.json(); //converted to object
  }).then((objectDate) => {
    console.log(objectDate[0].title);
    let tableDate = "";
    objectDate.map((values) => {
      tableDate += `<tr>
      <td>01</td>
      <td><img src="image/B-2.jpg" alt=""></td>
      <td>&#8377; 10,000</td>
      <td>Germany</td>
      <td>Germany</td>
      <td>Germany</td>
      <td>Germany</td>
      <td><button><i class="bi bi-trash3"></i></button><button><i class="bi bi-trash3"></i></button></td>
  </tr>`;
    });
    document.getElementById("table-body").innerHTML = tableDate;
  }).catch((err) => {
    console.log(err);
  });




