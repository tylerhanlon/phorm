function Customer (fname, lname, em, ph) {
    this.firstName = fname;
    this.lastName = lname;
    this.email = em;
    this.phone = ph;
}

var $form = $("#signup-page-form")
$form.addEventListener('submit', submitForm);

function submitForm(event){
    event.preventDefault();
    customer = new Customer($("#fname").val(), $("#lname").val(), $("#email").val(), $("#phone").val());    
}

// const form = $("#signup-page-form").submit(function() {
//     event.preventDefault();
//     customer = new Customer($("#fname").val(), $("#lname").val(), $("#email").val(), $("#phone").val());
//     alert("Thank you for providing your contact information. Here is the information we have received: \n" + customer.firstName + '\n' + customer.lastName + '\n' + customer.email + '\n' + customer.phone);
// })