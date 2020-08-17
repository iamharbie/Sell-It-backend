const Realm = require("realm");

// Define your models and their properties
const CarSchema = {
  name: "Car",
  properties: {
    make: "string",
    model: "string",
    miles: { type: "int", default: 0 },
  },
};
const UserSchema = {
  name: "User",
  properties: {
    email: "string",
    password: "string",
    // cars:     'Car[]', // a list of Cars
    // picture:  'data?'  // optional property
  },
};

const realm = new Realm({ schema: [UserSchema] });

// Realm.open({ schema: [UserSchema], inMemory: true })
//   .then((realm) => {
//     // Create Realm objects and write to local storage
//     realm.write(() => {
//       const mySelf = realm.create("User", {
//         email: "mi_harby@live.com",
//         password: "abcdef",
//       });
//     });

//     // Query Realm for all cars with a high mileage
//     // const cars = realm.objects('Car').filtered('miles > 1000');

//     // // Will return a Results object with our 1 car
//     // cars.length // => 1

//     // // Add another car
//     // realm.write(() => {
//     //   const myCar = realm.create('Car', {
//     //     make: 'Ford',
//     //     model: 'Focus',
//     //     miles: 2000,
//     //   });
//     // });

//     // // Query results are updated in realtime
//     // cars.length // => 2

//     // Remember to close the realm when finished.
//     realm.close();
//   })
//   .catch((error) => {
//     console.log(error);
//   });

export default realm;
