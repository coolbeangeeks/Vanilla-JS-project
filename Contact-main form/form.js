const fisrtName=document.getElementById('firstName');
const LastName=document.getElementById('lastName');
const submitButtom=document.getElementById('sub');
const parentfName=document.getElementById('fst');
const parentLName=document.getElementById('lst');
const parentEmail=document.getElementById('email-child');
const parentMessage=document.getElementById('formid');
const errorMessage=parentMessage.lastElementChild;
const errorEmail=parentEmail.lastElementChild;
const errorlName=parentLName.lastElementChild;
const errorName=parentfName.lastElementChild;
const containsChar='@'
const containsChar2='.com'
const parentGeneral=document.getElementById('general-id-parent')
const errorQuery=parentGeneral.lastElementChild;
const selectedErrorMessage=document.querySelector('input[name="query-data"]:checked')
const checkedParent=document.getElementById('agr')
const checkedError=checkedParent.lastElementChild;

submitButtom.addEventListener('click',(event)=>{
    if(!fisrtName.value ||!LastName.value ||
        (!errorEmail.value.includes(containsChar)||!errorEmail.value.includes(containsChar2)) || 
        !selectedErrorMessage ||
        !errorMessage ||
        !checkedParent.checked){
        event.preventDefault();
        errorName.style.display="block"
        errorlName.style.display="block";
        errorEmail.style.display="block";
        errorQuery.style.display='block';
        errorMessage.style.display='block';
        checkedError.style.display='block'
    }
    else{
        errorName.style.display='none';
        errorlName.style.display='none';
        errorEmail.style.display='none'
    }

})

