let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');

//get total

function getTotal()
{
    if (price.value !=""){
        let result = (+price.value + +taxes.value + +ads.value)
        -discount.value;
        total.innerHTML = result;
        total.style.background = '#';
    }else{
        total.innerHTML = "";
        total.style.background = "##"
    }
}


// create product
let dataPro;
if(localStorage.product != null){
    dataPro = JSON.parse(localStorage.product)
}else{
     dataPro = [];

}



submit.onclick = function(){
    let newPro ={
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.value,
        count:count.value,
        category:category,
    }
    dataPro.push(newPro)
    localStorage.setItem('product',      JSON.stringify(dataPro)      )
    
    clearData()
    showData()
}











// clear inputs


function clearData(){
    title.value = '';
    price.value = '';
    taxes.value = '';
    discount.value = '';
    ads.value = '';
    total.value = '';
    count.value = '';
    category.value = '';

}





//read
function showData(){
    let table ='';
    for(let i = 0; i < dataPro.length;i++){
        table =`
        <tr>
        <th> ${i} </th>
        <th>${dataPro[i].title}</th>
        <th>${dataPro[i].price}</th>
        <th>${dataPro[i].taxes}</th>
        <th>${dataPro[i].ads} </th>
        <th>${dataPro[i].discount}</th>
        <th>${dataPro[i].total}</th>
        <th>${dataPro[i].category}</th>
        <th><button id-"Update">update</button></th>
        <th><button onclick="deleteData("${i}")" id="delete">delete</button></th>

        </tr>`
        
 
    }


    document.getElementById('tbody').innerHTML = table;
}
showData()



//count
//delete
function deleteData(){
    dataPro.splice(i,1);
    localStorage.product = JSON.stringify(dataPro);
    showData()
}





//update
//search
//clean data