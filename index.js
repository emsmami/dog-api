'use strict';

function getTheDoggies() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(responseJson => displayTheDoggies(responseJson))
        .catch(error => console.log(error));
       // .catch(alert('I have a bad feelings about this. Try again later.'));
}

function displayTheDoggies(responseJson) {
    console.log(responseJson);
    $('.results').removeClass('hidden');
    $('.results').append(
        `<img src="${responseJson.message}" class="dog">`
            );  
    }



function chooserListener() {
    $('form').submit(event=> {
        event.preventDefault();
        let numberOfDogs = $('#display-num').val();
        console.log(numberOfDogs);
        $('img').remove();
        for(let i=0; i < numberOfDogs; i++){
        getTheDoggies(numberOfDogs);
        }
    });
}



$(function() {
    console.log('Gearing up to get some dog pics for you! Waiting impatiently on your choice...');
    chooserListener ();
})