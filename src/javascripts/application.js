window.onload = function(){
    let form = $('form');
    let name = $('#name')[0];
    let surname = $('#surname')[0];
    let age = $('#age')[0];
    let tbody = $('tbody')[0];
    let smallError = $('#error');
    let rowWithDatas = undefined;
    let arrayOfElements = [name, surname, age];

    const checkStringSize = (array) => {
        let newArrayChecked = array.filter(element => {
            return element.value.length > 0;
        });

        return array.length === newArrayChecked.length ? true : false;
    };

    const checkIfIsNaN = (element) => {
        return isNaN(parseInt(element.value)) ? true : false;
    };

    const cleanStringsInInputs = (array) => {
        array = array.map(element => {
            element.value = "";
        });
    };

    form.submit(function(event){        
        if(checkStringSize(arrayOfElements) && checkIfIsNaN(name) && checkIfIsNaN(surname) && !checkIfIsNaN(age)){
            rowWithDatas = $(`<tr class="border-right-table"><td class="border-right-table">${name.value}</td><td class="border-right-table">${surname.value}</td><td>${age.value}</td></tr>`);
            tbody.append(rowWithDatas[0]);
            smallError.addClass('display-none');
            cleanStringsInInputs(arrayOfElements);
        } else{
            smallError.removeClass('display-none');
        }

        event.preventDefault();
    });
};