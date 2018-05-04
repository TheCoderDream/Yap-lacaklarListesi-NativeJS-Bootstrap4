// get the form and add submit event listener

document.getElementById('toDoForm').addEventListener('submit',formSubmit);


function formSubmit(e){

// get the input field

    let inputItem = document.getElementById('item');
    console.log(inputItem);

    // value of the item from the form input

    let valueOfInput = inputItem.value;

    console.log(valueOfInput);

    // empty string is always false
    if(valueOfInput){

        addItem(valueOfInput);
    }

e.preventDefault();
}

function addItem(text) {
    console.log(text);

    let listOfItems = document.getElementById('item-list');

    let liElement = document.createElement('li');
    liElement.setAttribute('class','list-group-item');
    liElement.classList.add('d-flex');
    liElement.classList.add('flex-row');
    liElement.classList.add('justify-content-between');

    // create a new paragrafg

    let pOfList = document.createElement('p');
    pOfList.innerText = text;
    liElement.appendChild(pOfList);



    // Bootstrap button group div

    let buttonGroupDiv = document.createElement('div');

    buttonGroupDiv.setAttribute('class','btn-group btn-grp');

    console.log(buttonGroupDiv);

    // list buttons
    // delete button
    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('class','btn btn-danger');
    deleteButton.onclick =  deleteItem;
    console.log(deleteButton);

    // create a icon and append it to the delete button
    let iconOfDeleteBtn = document.createElement('i');
    iconOfDeleteBtn.setAttribute('class','fa fa-trash');

    deleteButton.appendChild(iconOfDeleteBtn);

    // success button
    let successButton = document.createElement('button');
    successButton.setAttribute('class','btn btn-outline-success ml-2');
    successButton.onclick = checkItem;

    // create a icon and append it to the delete button
    let iconOfSuccessBtn = document.createElement('i');
    iconOfSuccessBtn.setAttribute('class','fa fa-check');
    successButton.appendChild(iconOfSuccessBtn);

    // add thoese buttonn to the li element

    buttonGroupDiv.appendChild(deleteButton);
    buttonGroupDiv.appendChild(successButton);

    liElement.appendChild(buttonGroupDiv);

    // add li to the unorderd list

    listOfItems.insertBefore(liElement,listOfItems.childNodes[0]);


}

function deleteItem() {
    let item = this.parentNode.parentNode;
    itemParent = item.parentNode;

    itemParent.removeChild(item);
    console.log(parent);

}

function checkItem() {

    console.log(this.getAttribute('class'));

    if(this.getAttribute('class') ==='btn btn-outline-success ml-2' ){
        this.setAttribute('class','btn btn-success ml-2');
    }else {
        this.setAttribute('class','btn btn-outline-success ml-2');
    }


}