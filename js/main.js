const menu = document.querySelector(".menu-btn");
const links = document.querySelector("#links");

menu.addEventListener("click", () =>{
    if(!links.classList.contains("show-menu")) {
        links.classList.add("show-menu");
    }
    else {
        links.classList.remove("show-menu");
    }
})


let nom = document.getElementsByName("nom")[0];
let nomSpan = document.querySelector(".Nom + span");
let telnum = document.getElementsByName("telnum")[0];
let telnumSpan = document.querySelector(".telnum + span");
let email = document.getElementsByName("email")[0];
let emailSpan = document.querySelector(".email + span");

let emailIsTouched = false;
let emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

nom.addEventListener('input', function(e) {
    if (e.currentTarget.value.length > 22) {
        e.currentTarget.classList.add("inputerror");
        nomSpan.textContent = "the name must be less than 22 character";
    }

    else {
        e.currentTarget.classList.remove("inputerror");
        e.currentTarget.classList.add("inputValid");
        nomSpan.textContent = "";      
    }
})

nom.addEventListener('blur', function(e) {
    if (e.currentTarget.value.length < 3) {
        e.currentTarget.classList.add("inputerror");
        nomSpan.textContent = "the name must be greater than 3 character"; 
    }
    else if (e.currentTarget.value.length > 3 && e.currentTarget.value.length < 22){
        e.currentTarget.classList.add("inputValid");
        nomSpan.textContent = "";
    }
})



email.addEventListener('blur', function(e) {
    if (!(emailRegex.test(e.currentTarget.value))) {
        e.currentTarget.classList.add("inputerror");
        emailSpan.textContent = "the email is not valid";
    }
})

email.addEventListener('input', function(e){
    if (emailRegex.test(e.currentTarget.value)) {
        e.currentTarget.classList.remove("inputerror");
        e.currentTarget.classList.add("inputValid");
        emailSpan.textContent = "";
    }
})


// telephone number validation
let telRegex = /^[0-9]$/;
telnum.addEventListener('blur', function(e) {
    if (!(telRegex.test(e.currentTarget.value))) {
        e.currentTarget.classList.add("inputerror");
        telnumSpan.textContent = "only number are accepted";
    }
})

telnum.addEventListener('input', function(e){
    if (telRegex.test(e.currentTarget.value)) {
        e.currentTarget.classList.remove("inputerror");
        e.currentTarget.classList.add("inputValid");
        telnumSpan.textContent = "";
        
    }
    else {
        e.currentTarget.classList.add("inputerror");
        telnumSpan.textContent = "only number are accepted";        
    }
})


































// // the form validation

// function FormValidation() {
//     this.state = {
//         nom: '',
//         telnum: '',
//         email: '',
//         touched : {
//             nom : false,
//             telnum: false,
//             email: false
//         }
//     }

//     this.handleBlur = field => event => {
//         this.state.touched[field] =  true;
//         console.log(field + " touched is " + this.state.touched[field]);
//     }
//     this.handleInput = field => event => {
//         this.state[field] = event.currentTarget.value;
//     } 

//     this.validate = function(nom, telnum, email) {
//         const errors = {
//             nom: '',
//             telnum: '',
//             email: ''
//         }
//         let nameSpan = document.querySelector(".Nom + span");
//         let telnumSpan = document.querySelector(".telnum + span");
//         let emailSpan = document.querySelector(".Email + span");


//         // validate name
//         if (this.state.touched[nom] && (this.state[nom].length < 6)) {
//             errors.nom = "the num must be greater than 6 characte";
//             nameSpan.textContent = errors.nom;
//         }
//         else if ((this.state[nom].length > 22))
//         {
//             errors.nom = "the num must be less than 22";
//             nameSpan.textContent = errors.nom;
//         }
//         else {
//             errors.nom = '';
//             nameSpan.textContent = errors.nom;
//         }
    
    
//     // validate numero of the telephone;
//         const regex = /^[0-9]+$/;
//         if (this.state.touched[telnum] && !(regex.test(this.state[telnum])))
//         {
//             errors.telnum = "the phone number must contain only numbers";
//             telnumSpan.textContent = errors.telnum;
//         }
//         else {
//             errors.telnum = '';
//             telnumSpan.textContent = errors.telnum;
//         }

//         const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
//         if (this.state.touched[email] && !(emailRegex.test(this.state[email]))) {
//             errors.email = "the email is not valid";
//             emailSpan.textContent = errors.email;
//         }
//         else {
//             errors.email = '';
//             emailSpan.textContent = errors.email;
//         }
//     }
// }



// let Val = new FormValidation();

// // for display errors;


// let nom = document.getElementsByName("nom")[0];
// let email = document.getElementsByName("email")[0];
// let telnum = document.getElementsByName("telnum")[0];



// email.onblur = Val.handleBlur(email.name);
// email.oninput = Val.handleInput(email.name);
// email.oninput = Val.validate(nom.name, telnum.name, email.name);

// nom.onblur = Val.handleBlur(nom.name);
// nom.oninput = Val.handleInput(nom.name);
// nom.oninput = Val.validate(nom.name, telnum.name, email.name);


// telnum.onblur = Val.handleBlur(telnum.name);
// telnum.oninput = Val.handleInput(telnum.name);
// telnum.oninput = Val.validate(nom.name, telnum.name, email.name);























