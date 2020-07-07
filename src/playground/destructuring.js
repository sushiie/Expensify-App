//
//// Oject Restructuring
//
// const person = {
//     name: 'Susheel',
//     age: 29,
//     location: {
//         city: 'Noida',
//         temp: 90
//     }
// };

// const { name: firstName = 'Anonymous', age} = person;
// const { city, temp: temprature } = person.location;

// console.log(`${firstName} is ${age}`);

// if (city && temprature) {
//     console.log(`It's ${temprature} in ${city}`);
// }


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);   //Penguin, Self-Published


//
// Array Destructuring
// 

const address = ['E-119 Sarojini Nagar', 'Shimla', 'Himachal Pradesh', '110023'];

const [, , state = 'India'] = address;

console.log(`You are in ${state}.`);

const item = ['Coffee (Iced)', '$3.00', '$3.50', '$3.75'];

const [menuItem, , mediumPrice] = item;

console.log(`A medium ${menuItem} costs ${mediumPrice}.`);