function validatePassword(password) {
  if (password.length < 6) {
    alert("Password should be at least of 6 character.");
    return false;
  }

  if (!password.charAt(0).match(/[a-z]/i)) {
    alert("Password should be start with alphabet.");
    return false;
  }

  if (!password.charAt(password.length - 1).match(/[0-9]/i)) {
    alert("Password should be end with digits.");
    return false;
  }

  return true;
}

function validateForm() {
  /** Validating Name */
  const name = document.getElementById("name").value;
  if (name.length <= 0) {
    alert("Full Name is Required!!");
    return false;
  }

  /**
   * Validating Email and Regex explanation
   *
   * [a-z0-9_\-\.]  --- Include Any character. number, dot, dash and underscore
   * \@             --- After that include @
   * ([a-z]+){2,4}  --- Include 2 to 4 any character for domain extension
   */
  const email = document.getElementById("email").value;
  if (!email.match(/^([a-z0-9_\-\.])+\@([a-z0-9_\-\.])+\.([a-z]+){2,4}$/i)) {
    alert("Valid Email Address is Required.");
    return false;
  }

  /** Validating Age */
  const password = document.getElementById("password").value;
  if (!validatePassword(password)) {
    return false;
  }

  /** Validate Age */
  const age = document.getElementById("age").value;
  if (!isNaN(age)) {
    if (!(parseInt(age) >= 8 && parseInt(age) <= 60)) {
      alert("Age should be in between 8 and 60.");
      return false;
    }
  } else {
    alert("Please enter the age between 8 and 60.");
    return false;
  }

  /** Success Form Validation */
  alert("Form Submitted Successfully!!!");
  return true;
}
