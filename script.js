const btnElement = document.getElementById("btn");
const birthdayElement = document.getElementById("birthday");
const resultElement = document.getElementById("result");

btnElement.addEventListener("click", calculateAge);

function calculateAge(){
    const birthdayValue = birthdayElement.value;
    if(!birthdayValue){
        alert("Please enter your birthday!");
    } else{
        let age = getAge(birthdayValue);
        resultElement.innerText = `Your are ${age} ${age > 1 ? "years" : "year"} old!`
    }
}

function getAge(birthdayValue){
    const birthDate = new Date(birthdayValue);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    
    const months = currentDate.getMonth() - birthDate.getMonth();

    if((months < 0) || (months === 0) && (currentDate.getDate() < birthDate.getDate())){
        age--;
    }

    return age;
}
