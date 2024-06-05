const addBtn=document.getElementById("add");
const clearBtn=document.getElementById("delete");
let itemText=document.getElementById('item');
let itemPrice=document.getElementById('Expense');
const containers=document.getElementById('data-container');
const errorMessage = document.getElementById('errorMessage');

let itemNameValue;
let itemPriceValue;
if(containers){
addBtn.addEventListener('click',getvalue);
clearBtn.addEventListener('click',clearAll);
}
function getvalue(){
    itemNameValue=itemText.value;
    itemPriceValue=itemPrice.value;
    if(itemNameValue===''|| itemPriceValue===''){
        errorMessage.style.display = "block";
    }
    else{
        const newDiv=document.createElement("div");
    newDiv.textContent=`${itemNameValue}: ${itemPriceValue}`;
    newDiv.classList.add('newdiv');
    containers.appendChild(newDiv);
    containers.style.display="block";
    itemText.value="";
    itemPrice.value="";
    document.addEventListener("keydown", function(event) {
        if (event.key === "Enter" && (itemText.value===''||itemPrice.value==='')){
            event.preventDefault();
        }
    });

    }
    
}
function clearAll(){
    containers.innerHTML='';
    containers.style.display='none';

}
