// Validate all membership form fields are entered, submit form and show alert, reset form --------

function membershipValidate() {
    console.log("Checking");
    var fields = ["First Name", "User Name"]
    var i;
    var l = fields.length;
    var fieldname;

    // for loop to check if each field name is empty, ""; if not generate alert and reset form ----
    for (i = 0; i < l; i++) {
        fieldname = fields[i];
        if (document.forms["membershipForm"][fieldname].value === "") {
            alert(fieldname + " can not be empty");
            return false;
        }
    }
    document.getElementById("membershipForm").reset();
    return alert("Your details have been submitted!");

};

// Data Picker Initialization
$('.datepicker').datepicker({
    inline: true
});