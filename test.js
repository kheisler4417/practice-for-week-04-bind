const Employee = require('./employee');

const johnWick = new Employee('John Wick', 'Dog Lover');

// Unbound version
setTimeout(function () {
    console.log('Unbound version:');
    const unboundSayName = johnWick.sayName;
    unboundSayName(); // This would print "undefined says hello." without using `bind`.
}, 2000);

// Bound version
setTimeout(function () {
    console.log('Bound version:');
    const boundSayName = johnWick.sayName.bind(johnWick);
    boundSayName(); // This will print "John Wick says hello." with `bind`.
}, 4000);

// Unbound version
setTimeout(function () {
    console.log('Unbound version:');
    const unboundSayOccupation = johnWick.sayOccupation;
    unboundSayOccupation(); // This would print "undefined is a undefined." without using `bind`.
}, 6000);

// Bound version
setTimeout(function () {
    console.log('Bound version:');
    const boundSayOccupation = johnWick.sayOccupation.bind(johnWick);
    boundSayOccupation(); // This will print "John Wick is a Dog Lover." with `bind`.
}, 8000);

//test
