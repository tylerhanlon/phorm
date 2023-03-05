function Customer (fname, lname, em, ph) {
    this.firstName = fname;
    this.lastName = lname;
    this.email = em;
    this.phone = ph;
}

const form = $("#signup-page-form").submit(function() {
    customer = new Customer($("#fname").val(), $("#lname").val(), $("#email").val(), $("#phone").val());
    alert("Thank you for providing your contact information. Here is the information we have received: \n" + customer.firstName + '\n' + customer.lastName + '\n' + customer.email + '\n' + customer.phone);
})