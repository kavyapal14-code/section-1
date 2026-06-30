const arr=['hello',27,false,null];
console.log(Array.isArray(arr));

const movies =[  'don','chava', 'dhurandhar' , 'cocktail', 'raz' ];
console.log(movies[3]);
console.log(movies.indexOf('don'));
console.log(movies.at(-2));

movies[2]='batman';
console.log(movies);

// slicing
console.log(movies.slice(1,4 ));
console.log(movies.slice(-3,-1));
console.log(movies.slice(-3));
console.log(movies.slice(-3,50));  
//  used in page initiation like in amazon few pages are shown first

// adding and removing elements in array
movies.push('jungle');
// adds elements at the end of array
console.log(movies);

// adds element at the start of array
movies.unshift('flash');
console.log(movies);

// removes the element at end of array
movies.pop();
console.log(movies);

// removes the element at stat of array
movies.shift();
console.log(movies);

// removing elements 
movies.splice(2,2);
// splice(first index from where to remove, no. of elements to be removed)

movies.splice(2,2,'superman','aquaman');


 //replacing elements
// replacing elements with as many elements u want
// splice function- performs many funtions

movies.splice(2,0,'Superman')//insert
console.log(movies);












