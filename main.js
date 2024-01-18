function submitForm() {
    // Get form data
    var formData = {
        name: document.forms["restaurantForm"]["name"].value,
        email: document.forms["restaurantForm"]["email"].value,
        phone: document.forms["restaurantForm"]["phone"].value,
        message: document.forms["restaurantForm"]["message"].value
    };


    var message = "Form Submitted:\n\n";
    for (var key in formData) {
        message += key + ": " + formData[key] + "\n";
    }

    alert(message);

    // Reset the form
    document.getElementById("restaurantForm").reset();
};