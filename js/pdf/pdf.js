/*window.onload = function () {
    document.getElementById("download")
        .addEventListener("click", () => {
            const invoice = this.document.getElementById("invoice");
            console.log(invoice);
            console.log(window);
            var opt = {
                margin: 1,
                filename: 'myfile.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(invoice).set(opt).save();
        })
}*/


const options = {
  margin: 0.5,
  filename: 'invoice.pdf',
  image: { 
    type: 'jpeg', 
    quality: 500
  },
  html2canvas: { 
    scale: 1 
  },
  jsPDF: { 
    unit: 'in', 
    format: 'letter', 
  }
}

$('.btn-download').click(function(e){
  e.preventDefault();
  const element = document.getElementById('invoice');
  html2pdf().from(element).set(options).save();
});


function printDiv(divName) {
 var printContents = document.getElementById(divName).innerHTML;
 var originalContents = document.body.innerHTML;

 document.body.innerHTML = printContents;

 window.print();

 document.body.innerHTML = originalContents;
}
