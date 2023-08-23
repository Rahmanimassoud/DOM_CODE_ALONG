const header = document.querySelector('header');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const peopleList = document.getElementById('people-list')

let hideButton = document.getElementById('hideHeaderButton');

// change styles because I want to
// hideButton.style.fontSize = "40px";

hideButton.addEventListener("click", ()=>{
    // select the header
   
    console.log(header);
    // hide the header
    // 1.  hidden attribute
    // header.hidden = true;
    // 2. I could make a "hide" class (add to classlist)
    header.classList.add('hide');
    // 3. I could style.display = "none";
    // header.style.display = "none";
})

let showButton = document.getElementById("showHeaderButton");

showButton.addEventListener('click', () => {
    header.classList.remove('hide');
})


const signupForm = document.getElementById("signup-form")


signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("the form is submitting");
    
    
    // make an empty div
    // put name in that div
    const nameDiv = document.createElement('div');
    nameDiv.textContent = nameInput.value;
    // no home :(

    // make another empty div
    // put email in that div
    const emailDiv = document.createElement('div');
    emailDiv.textContent = emailInput.value;
    // no home :(
    // make an empty li 
    // put 2 divs in the li
    const personLi = document.createElement('li');
    personLi.appendChild(nameDiv);
    personLi.appendChild(emailDiv);
    console.log(personLi);
    // NO HOME! :(
    // put that li into the ul
    peopleList.appendChild(personLi)
})

const resetButton = document.getElementById('reset-button')
console.log(resetButton);

resetButton.addEventListener('click', ()=>{
    console.log(nameInput.value);
    nameInput.value = ""
    emailInput.value = ""
})