let table = new DataTable("#myTable"); //jquery.dataTables

let Product = []; //get data in inside of function array
function myfunction() {
  let photo = document.getElementById("ProductPhoto").value;
  let Product_name = document.getElementById("ProductName").value;
  let Product_price = document.getElementById("ProductPrice").value;
  let Product_Description = document.getElementById("ProductDescription").value;
  let Product_Location = document.getElementById("ProductLocation").value;
  let page_Name = document.getElementById("pageName").value;
  const ProductPush = [];
  // push only  single data
  ProductPush.push({
    id: Product.length + 1,
    Product_Photo: photo,
    Product_name: Product_name,
    Product_price: Product_price,
    Product_Description: Product_Description,
    Product_Location: Product_Location,
    page_Name: page_Name,
  });
  Product.push(...ProductPush); //using ... method to pass main array(product)
}

BuildTable(Product)
// print the Data in table
function BuildTable(data) {
  let table = document.getElementById('table-body');
  for (let i = 0; i < data.length; i++) {
    let row = `
    <tr>
                        <td>${data[i].id}</td>
                        <td><img src="${data[i].Product_Photo}" alt="" /></td>
                        <td>&#8377; ${data[i].Product_name}</td>
                        <td>${data[i].Product_price}</td>
                        <td>${data[i].Product_Description}</td>
                        <td>${data[i].Product_Location}</td>
                        <td>${data[i].page_Name}</td>
                        <td>
                            <button><i class="bi bi-check-lg"></i></button><button><i class="bi bi-trash3"></i></button>
                        </td>
                    </tr>`
                    table.innerHTML += row
                    console.log(data[i].id);
                    console.log("kjfdghtoi");
  }
}
console.log("out");