const dobInput = document.getElementById("dob");
const button = document.getElementById("btn");
const result = document.getElementById("result");

button.addEventListener("click", function () {

    let dobValue = dobInput.value;

    if (dobValue === "") {
        result.innerText = "Please select your birth date";
        return;
    }

    let birthDate = new Date(dobValue);
    let currentDate = new Date();

    let age = currentDate.getFullYear() - birthDate.getFullYear();

    let currentMonth = currentDate.getMonth();
    let birthMonth = birthDate.getMonth();

    if (
        currentMonth < birthMonth ||
        (currentMonth === birthMonth &&
        currentDate.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    result.innerText = "Your age is " + age + " years";
});