let shopList = []


function addToList(itemName, itemPrice, itemQuantity){


    shopList.push({id:shopList.length + 1 ,name:itemName, price:itemPrice, quantity: itemQuantity})
    displayShop()

}

function editItem(index1){

    
    let indexNum = parseInt(index1) 
    let itemIndex = shopList.findIndex(item => item.id == indexNum)
    let item = shopList[itemIndex]
    console.log("Item in row",item)



    let row = document.getElementById(`row-${item.id}`)
    console.log("Item Row is", row)


    row.innerHTML = `
    <td><input type="text" class="form-control" id="edit-name-${item.id}" value="${item.name}"></td>
    <td><input type="number" class="form-control" id="edit-price-${item.id}" value="${item.price}"></td>
    <td>
        <input type="number" class="form-control" id="edit-quantity-${item.id}" value="${item.quantity}">
        <span class="btn btn-success btn-sm ms-2 mt-2" onclick="saveItem('${item.id}')">Save</span>
        <span class="btn btn-info btn-sm ms-2 mt-2" onclick="cancelEdit('${item.id}')">Cancel</span>
    </td>
`;



    editE = document.getElementById('btnE')
    editD = document.getElementById('btnD')

    editE.setAttribute('hidden', '')
    editD.setAttribute('hidden', '')

}
function saveItem(index) {
    let itemIndex = shopList.findIndex(item => item.id === parseInt(index));
    let item = shopList[itemIndex];

    item.name = document.getElementById(`edit-name-${item.id}`).value;
    item.price = document.getElementById(`edit-price-${item.id}`).value;
    item.quantity = document.getElementById(`edit-quantity-${item.id}`).value;

    displayShop();

    alertS = document.getElementById('alertSuccess');
    alertS.textContent = 'An Item Was Updated In Your Shopping List!';
    alertS.setAttribute('style', 'display:block');
    $(alertS).fadeOut(3000);
}

function cancelEdit(index) {
    displayShop();
}



function deleteItem(index){

    console.log(index)
    let info = shopList.findIndex(item => item.id === parseInt(index))
    console.log("Checking Log",info)
    shopList.splice(info,1)


    alertD = document.getElementById('alertDanger')
    alertD.textContent = 'A Shopping List Item Was Deleted'
    alertD.setAttribute('style', 'display:block')
    $(alertD).fadeOut(3000)

    displayShop()


}


function displayShop(){


    console.log(shopList)
    


    let itemsInner = ``
    for(let i = 0; i < shopList.length; i++){

        itemsInner +=`
        
         <tr id="row-${shopList[i].id}">
                    <td>${shopList[i].name}</td>
                    <td>${shopList[i].price}</td>
                    <td>${shopList[i].quantity}
                    <span id="btnE" class="btn btn-warning btn-sm ms-2" onclick="editItem('${shopList[i].id}')">Edit</span>
                    <span id="btnD" class="btn btn-danger btn-sm ms-2" onclick="deleteItem('${shopList[i].id}')">Delete</span>

                    </td>

        </tr>


        `

    }

    document.getElementById('tbody').innerHTML = itemsInner

}


document.getElementById('enter').addEventListener('click', (event) =>{
    event.preventDefault()

    itemName = document.getElementById('item').value
    itemPrice = document.getElementById('price').value
    itemQuantity = document.getElementById('quantity'). value

    if(itemName && itemPrice && itemQuantity){

        alertS = document.getElementById('alertSuccess')
        addToList(itemName,itemPrice, itemQuantity)
        console.log(shopList)

        document.getElementById('item').value = ''
        document.getElementById('price').value = ''
        document.getElementById('quantity').value = ''

        alertS.setAttribute('style', 'display:block')
        $(alertS).fadeOut(3000);


    }
    else{

        alertD = document.getElementById('alertDanger')
        alertD.setAttribute('style', 'display:block')
        $(alertD).fadeOut(3000)


    }




})


