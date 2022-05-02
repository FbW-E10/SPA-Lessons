const dataToSend= {
    username: 'John', email: 'john@example', class: 255
}

console.log(dataToSend)

const response = JSON.stringify(dataToSend);

console.log(response)

//---------------------------------------------------

const student = JSON.parse(response);



console.log(student)


//localStorage

localStorage.setItem("age", 25);  // you can replace localStorage with sessionStorage 
localStorage.getItem('age')
localStorage.removeItem('age')
localStorage.clear();