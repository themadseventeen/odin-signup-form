function handleInputChange(event: Event, password_1_field: HTMLInputElement, match: HTMLLabelElement): void {
    const target = event.target as HTMLInputElement;
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

function main(): void {
    console.log("LMOA");
    let password_1_field = document.getElementById("password_1") as HTMLInputElement;
    let password_2_field = document.getElementById("password_2") as HTMLInputElement;
    let no_match = document.getElementById("match") as HTMLLabelElement;
    console.log(no_match);

    password_2_field.addEventListener('input', (event) => handleInputChange(event, password_1_field, no_match));
}

main();