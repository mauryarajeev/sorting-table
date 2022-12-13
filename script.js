const table = document.getElementById('sortTable');
const headers = table.querySelectorAll('th');
const rows = table.querySelectorAll('tr');

headers.forEach((header,headerIndex)=>{
    header.addEventListener('click',()=>{
        sortColumn(headerIndex);
    });
});

// Transform the content of given cell in given column
const transform = function (index, content) {
    // Get the data type of column
    const type = headers[index].getAttribute('type');
    switch (type) {
        case 'number':
            return parseFloat(content);
        case 'string':
        default:
            return content;
    }
};

// Track sort directions
let directions = Array(headers.length).fill("");
console.log(directions);

function sortColumn(headerIndex){
    
    //Check the direction asc or desc
    const direction = directions[headerIndex] || 'asc';
    const multiplier = (direction=='asc')? 1 :-1;
    changeIcon(direction,headerIndex);
    //lets make new instance of rows
    let arrayRows = Array.from(rows);      
    arrayRows.shift();//Exclude header
    
    let newRows = Array.from(arrayRows);
    newRows.sort(function(rowA,rowB){
        //Get the content of cells
        const cellA = rowA.querySelectorAll('td')[headerIndex].innerHTML;
        const cellB = rowB.querySelectorAll('td')[headerIndex].innerHTML;
        let a = transform(headerIndex,cellA);        
        let b = transform(headerIndex,cellB);        

        if(a>b)
            return 1*multiplier;
        else if(a<b)
            return -1*multiplier;
        else
            return 0;
    });    
     //Remove old rows
     let tbody = document.getElementsByTagName("tbody");
     rows.forEach((row,index)=>{
        if(index!=0)
            tbody[0].removeChild(row);
     });
     //Append new row
     newRows.forEach((newRow)=>{
         tbody[0].appendChild(newRow);
     });

     // Reverse the direction
    directions[headerIndex] = direction === 'asc' ? 'desc' : 'asc';
    // console.log(directions);
}
function changeIcon(direction,index)
{
    // inactive all icons
    for(let i=0;i<headers.length;i++){
        headers[i].childNodes[1].className='';//Removing all classes
    }
    
    let className;
    if(direction=="desc")
    {
        //headers[index].childNodes[1].classList.add('fa-solid','fa-caret-down','active');
        headers[index].childNodes[1].className = ('fa-solid fa-caret-down active');
    }else{
        //headers[index].childNodes[1].classList.add('fa-solid','fa-caret-up','active');
        headers[index].childNodes[1].className = ('fa-solid fa-caret-up active');
    }    
}

var Order_type = document.getElementsByClassName("Oder-Type");
for(let i = 0; i<Order_type.length;i++){
    let s = Order_type[i].innerHTML;
    s = s.replace('Delivery', `<span style="color:red">Delivery</span>`);
    s = s.replace('Dine In', `<span style="color:blue">Dine In</span>`);
    s = s.replace('Take Away', `<span style="color:yellow">Take Away</span>`);
    Order_type[i].innerHTML = s;
} 


var Order_status = document.getElementsByClassName("Order_status");
for(let i = 0; i<Order_status.length;i++){
    let s = Order_status[i].innerHTML;
    s = s.replace('Order Updated', `<span style="color:purple">Order Updated</span>`);
    s = s.replace('New Order', `<span style="color:red">New Order</span>`);
    Order_status[i].innerHTML = s;
} 

var Payment = document.getElementsByClassName("Payment");
for(let i = 0; i<Payment.length;i++){
    let s = Payment[i].innerHTML;
    s = s.replace('Unpaid', `<span style="color:red">Unpaid</span>`);
    s = s.replace('Paid', `<span style="color:green">Paid</span>`);
    Payment[i].innerHTML = s;
} 

function myFunction() {
    var input, filter, table, tr, td, cell, i, j;
    input = document.getElementById("myInput2");
    filter = input.value.toUpperCase();
    table = document.getElementById("sortTable");
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
      // Hide the row initially.
      tr[i].style.display = "none";
    
      td = tr[i].getElementsByTagName("td");
      for (var j = 0; j < td.length; j++) {
        cell = tr[i].getElementsByTagName("td")[j];
        if (cell) {
          if (cell.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
            break;
          } 
        }
      }
    }
  }


function myFunction2() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }




