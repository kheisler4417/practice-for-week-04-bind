const Employee = require('./employee');

const johnWick = new Employee('John Wick', 'Dog Lover');

// Unbound version of sayName (will print "undefined says hello")
setTimeout(johnWick.sayName, 2000);

// Bound version of sayName (will print "John Wick says hello")
setTimeout(johnWick.sayName.bind(johnWick), 2000);

// Unbound version of sayOccupation (will print "undefined is a undefined")
setTimeout(johnWick.sayOccupation, 3000);

// Bound version of sayOccupation (will print "John Wick is a Dog Lover")
setTimeout(johnWick.sayOccupation.bind(johnWick), 3000);
