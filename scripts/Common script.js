//localStorage.removeItem('typeArray');
//localStorage.removeItem('opArray');
//localStorage.removeItem('gtArray');

let gtArray = JSON.parse(localStorage.getItem('gtArray2')) || [];

//gtDropDown();

let gtSelected = 'Main';
let mainArray =  JSON.parse(localStorage.getItem('mainArray')) || [];
let typeArray =JSON.parse(localStorage.getItem('typeArray')) || [];
let opArray = JSON.parse(localStorage.getItem('opArray')) || []

//mainDropDown ();
//typeDropDown();
//opDropDown();

/*------storing gtArray----------*/
function storeData(){
    if (gtSelected === 'Main'){
        localStorage.setItem('mainArray',JSON.stringify(mainArray));
    }else{
        localStorage.setItem(`gt${gtSelected}`,JSON.stringify(mainArray));
    }
}
/*-------------------End--------------------*/

/*------GT drop down----------*/
export function gtDropDown(elementClass){
    let html = '<option>Main</option>';
    gtArray.forEach((value)=>{
        html += `<option>${value}</option>`
    });
    document.querySelector(`.${elementClass}`).innerHTML = html;
}
/*-------------------End--------------------*/

/*------setting mainArray when GT changed----------*/
export function changeMainArray(elementClass){
    gtSelected = document.querySelector(`.${elementClass}`).value;
    if(gtSelected === 'Main'){
        mainArray =  JSON.parse(localStorage.getItem(`mainArray`)) || [];
    }else{
        mainArray =  JSON.parse(localStorage.getItem(`gt${gtSelected}`)) || [];
    }
}
/*-------------------End--------------------*/

/*------main component drop down----------*/
function mainDropDown (elementClass) {
    let html='<option data-component-id = "">Select Main</option>';
    mainArray.forEach((object)=>{
        html += `<option data-component-id = ${object.id}>${object.name}</option>`
    });
    //document.querySelector('.main-select').innerHTML = html;
    document.querySelector(`.${elementClass}`).innerHTML = html;            
}
/*-------------------End--------------------*/

/*------sub drop down----------*/
function subDropDown(mainComponentId,subElement) {
    let mainIndex;
    mainArray.forEach((object,index)=>{
        if(mainComponentId === object.id){
            mainIndex=index;
        }
    });
    
    let html = `<option data-component-id = "">Select Sub</option>`;
    mainArray[mainIndex].subComponent.forEach((object)=>{
        html += `<option data-component-id = ${object.id}>${object.name}</option>`
    });

    subElement.innerHTML = html;
}
/*-------------------End--------------------*/

/*------warning pop up----------*/
export function warningPopUp(warningMatter) {
    
    return new Promise((resolve) => {
        if(warningMatter){
            document.querySelector('.warning-matter').innerText = warningMatter;
        }else{
            document.querySelector('.warning-matter').innerText = 'Are You Sure?';
        }
        
        document.querySelector('.warning-popUp').style.display = 'grid';

        document.querySelector('.warning-yes-button').onclick = () => {
            document.querySelector('.warning-popUp').style.display = 'none';
            resolve('Yes');
        };

        document.querySelector('.warning-no-button').onclick = () => {
            document.querySelector('.warning-popUp').style.display = 'none';
            resolve('No');
        }
    });
}
/*-------------------End--------------------*/



/*-----------Type DropDown------------*/
/*function typeDropDown(){
    let html = '<option>Sub Type Select</option>';
    
    typeArray.forEach((object)=>{
         html += `<option>${object.type}</option>`
    });
                
    document.querySelector('.sub-type-select').innerHTML=html;
    document.querySelector('.assign-type-select').innerHTML=html;
}*/
/*-------------------End--------------------*/

function updateDataAttribute(selectElement) {
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const componentId = selectedOption.dataset.componentId;
    //alert(componentId)
    selectElement.setAttribute('data-component-id', componentId);
}


export function dateFormat(inputDate){
    
    const date = new Date(inputDate);
    
    // Options for formatting: day numeric, month short, year 2-digit
    const options = { day: '2-digit', month: 'short', year: '2-digit' };
    let formattedDate = date.toLocaleDateString('en-GB', options);
    if(formattedDate === 'Invalid Date'){
        formattedDate = inputDate;
    }
    return formattedDate; // Output: 16-04-2025
}

function setId (myArray){
    let rNumArray = [];
    myArray.forEach((object)=>{
        rNumArray.push(object.rNum)
    });
    
    let matching;
    let rNum;
    while(matching !== 'No'){
        matching=0;
        rNum = Math.floor(Math.random() * 100) + 1;
        rNumArray.forEach((num)=>{
            if(rNum === num){
                matching++;
            }
        })
        if(matching == 0){
            matching = 'No'
        }
    }
    return rNum;
}