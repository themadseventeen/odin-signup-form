function handleInputChange(event, password_1_field, match) {
    var target = event.target;
    if (target.value !== "") {
        if (password_1_field.value !== target.value) {
            match.style.visibility = "visible";
            target.setCustomValidity("Passwords don't match");
            password_1_field.setCustomValidity("Passwords don't match");
        }
        else {
            match.style.visibility = "hidden";
            target.setCustomValidity("");
            password_1_field.setCustomValidity("");
        }
    }
    else {
        match.style.visibility = "hidden";
        target.setCustomValidity("");
        password_1_field.setCustomValidity("");
    }
    // console.log(target.value === password_1_field.value);
}
function main() {
    console.log("LMOA");
    var password_1_field = document.getElementById("password_1");
    var password_2_field = document.getElementById("password_2");
    var no_match = document.getElementById("match");
    console.log(no_match);
    password_2_field.addEventListener('input', function (event) { return handleInputChange(event, password_1_field, no_match); });
}
main();
