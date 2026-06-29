// check if the triangle is equilateral, isoceles or scalene
a=80;
b=50;
c=50;
if(a===b===c){
    console.log('eqilateral');
    
}else if(a===b||b===c||c===a){
    console.log('isoceles');

}else{
    console.log('scalene');
}