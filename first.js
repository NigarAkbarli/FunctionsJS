function getNumberFromUser(message){
    let userValue;
    let flag = false;

    do{
        if(flag){
            alert('You have to enter the number!');
        }
        userValue = +prompt(message);
        flag = true;
    }
    while(isNaN(userValue))

    return userValue;
}

//5th
function solveEquation(a4,b4,c4){
    const discriminant = b4 * b4 - 4 * a4 * c4;
    let root1, root2;
    if (discriminant > 0) {
        root1 = (-b4 + Math.sqrt(discriminant)) / (2 * a4);
        root2 = (-b4 - Math.sqrt(discriminant)) / (2 * a4);
      } else if (discriminant == 0) {
        root1 = (-b4 + Math.sqrt(discriminant)) / (2 * a4);
        root2 = root1;
      } else {
        root1 = `Roots are not real number`;
        root2 = ` `;
      }
      return root1+' '+ root2;
}
const a4 = getNumberFromUser("Please, enter the value for A:");
const b4 = getNumberFromUser("Please, enter the value for B:");
const c4 = getNumberFromUser("Please, enter the value for C:");
console.log(`The solution of equation:`+solveEquation(a4,b4,c4));
