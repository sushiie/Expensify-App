import * as firebase from 'firebase';
import moment from 'moment';
import expenses from '../selectors/expenses';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// //child_removed

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_changed

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_added

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });


// // database.ref('expenses')
// //     .once('value')
// //     .then((snapshot) => {
// //         const expenses = [];
// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             })
// //         });
// //         console.log(expenses);
// //     });

// // database.ref('expenses').on('value', (snapshot) => {
// //     const expenses = [];
// //     snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         })
// //     });
// //     console.log(expenses);
// // }, (e) => {
// //     console.log('Error occured: ', e)
// // });

// database.ref('expenses').push({
//     description: 'Rent New',
//     note: 'Rent for July month',
//     amount: 1000,
//     createdAt: moment().valueOf()
// });


// // const onValueChange = database.ref().on('value', (snapshot) => {
// //     console.log(snapshot.val());
// // }, (e)=> {
// //     console.log('Error fetching data!')
// // });

// // setTimeout(() => {
// //     database.ref('age').set(29);
// // }, 3500);

// // setTimeout(() => {
// //     database.ref().off('value', onValueChange);
// // }, 7000);

// // setTimeout(() => {
// //     database.ref('age').set(30);
// // }, 10500);

// // database.ref().on('value', (snapshot) => {
// //     const dbRef = snapshot.val();
// //     console.log(`${dbRef.name} is a ${dbRef.job.title} at ${dbRef.job.company}`)
// // });

// // setTimeout(() => {
// //     database.ref().update({
// //         'job/title': 'Team Lead'
// //     });    
// // }, 15000);




// // database.ref('location/city')
// //     .once('value')
// //     .then((snapshot) => {
// //         console.log(snapshot.val());
// //     })
// //     .catch((e) => {
// //         console.log('Error fetching value', e);
// //     });

// // database.ref().set({
// //     name: 'David',
// //     age: 28,
// //     stressLevel: 6,
// //     job: {
// //         title: 'Software Developer',
// //         company: 'Google'
// //     },
// //     location: {
// //         city: 'New York',
// //         country: 'United States'
// //     }
// // }).then(() => {
// //     console.log('Data is saved!');
// // }).catch((e) => {
// //     console.log("Error Occured: ", e)
// // });


// // database.ref().update({
// //     stressLevel: 9,
// //     'job/company': 'Amazon',
// //     'location/city': 'Seattle'
// // });

// // database.ref('isSingle').remove().then(() => {
// //     console.log('isSingle attribute removed!!');
// // }).catch((e) => {
// //     console.log('Error orrucred while deleting', e);
// // });

