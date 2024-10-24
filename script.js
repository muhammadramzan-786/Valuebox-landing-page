
const loginBtn = document.querySelector(".loginBtn");

function loginPage() {
  window.location.href = "dashboardLogin.html";
}


// persoanl Information sign Up Form Page JS
const circles = document.querySelectorAll(".circle")
const progressBar = document.querySelector(".indicator")
const progressBarInner = progressBar.querySelector(".inner")
const buttons = document.querySelectorAll("button");

let currentStep = 2;

circles[0].classList.add("completed");
circles[1].classList.add("active");

const initialProgressPercentage = 33.3333;
progressBar.style.width = `${initialProgressPercentage}%`;
progressBarInner.style.backgroundColor = "#12B76A";

// Check if the Account Approval page is present

const accountApprovalSection = document.querySelector(".accountApprovalPage");

if (accountApprovalSection) {
  const circles = accountApprovalSection.querySelectorAll(".circle"),
    progressBar = accountApprovalSection.querySelector(".indicator"),
    progressBarInner = progressBar.querySelector(".inner"); // Target inner element for color

  // Mark first three circles as completed and remove any active state
  circles.forEach((circle, index) => {
    if (index < 3) {
      circle.classList.add("completed"); // Mark steps 1, 2, 3 as completed
      circle.classList.remove("active"); // Ensure the 'active' class is removed
    } else if (index === 3) {
      circle.classList.add("active"); // Mark step 4 as active
    }
  });

  // Set the progress bar to 99%
  progressBar.style.width = "99%"; // Set progress bar width to 99%
  progressBarInner.style.backgroundColor = "#12B76A"; // Set the color to green
}

// const updateSteps = (e) => {
//   // Update current step based on the button clicked
//   if (e.target.id === "next") {
//     if (currentStep < circles.length) currentStep++; // Move forward
//   } else {
//     if (currentStep > 1) currentStep--; // Move backward
//   }

//   // Loop through circles and set class based on currentStep
//   circles.forEach((circle, index) => {
//     circle.classList.remove("active", "completed"); // Reset classes
//     if (index < currentStep - 1) {
//       circle.classList.add("completed"); // Mark as completed
//     } else if (index === currentStep - 1) {
//       circle.classList.add("active"); // Mark as active
//     }
//   });

//   // Update progress bar width based on the current step
//   const progressPercentage = ((currentStep - 1) / (circles.length - 1)) * 100;
//   progressBar.style.width = `${progressPercentage}%`;
//   progressBarInner.style.backgroundColor = "#12B76A"; // Set progress bar color

//   // Disable buttons at first and last step
//   buttons[0].disabled = currentStep === 1; // Disable "Prev" button
//   buttons[1].disabled = currentStep === circles.length; // Disable "Next" button
// };

// // Event listeners for Next and Prev buttons
// buttons.forEach((button) => {
//   button.addEventListener("click", updateSteps);
// });

// Initialize steps on page load

document.addEventListener("DOMContentLoaded", function () {
  // Initialize intl-tel-input for the first phone input
  const phoneInput = document.querySelector("#personalPhoneNumber");
  const itiPhone = window.intlTelInput(phoneInput, {
    autoPlaceholder: "polite",
    separateDialCode: true,
    initialCountry: "pk",
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.3/js/utils.js",
  });

  // Initialize intl-tel-input for the second phone input
  const contactInput = document.querySelector("#contactMobile");
  const itiContact = window.intlTelInput(contactInput, {
    autoPlaceholder: "polite",
    separateDialCode: true,
    initialCountry: "pk",
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.3/js/utils.js",
  });

  // Add form validation logic for both phone inputs
  const formValidation = FormValidation.formValidation(
    document.getElementById("demoForm"),
    {
      fields: {
        phone: {
          validators: {
            notEmpty: {
              message: "The phone number is required",
            },
            callback: {
              message: "The phone number is not valid",
              callback: function (value, validator, $field) {
                return itiPhone.isValidNumber();
              },
            },
          },
        },
        contactMobile: {
          validators: {
            notEmpty: {
              message: "The mobile number is required",
            },
            callback: {
              message: "The mobile number is not valid",
              callback: function (value, validator, $field) {
                return itiContact.isValidNumber();
              },
            },
          },
        },
      },
      plugins: {
        internationalTelephoneInput:
          new FormValidation.plugins.InternationalTelephoneInput({
            field: "phone",
            message: "The phone number is not valid",
            hiddenPhoneInput: "fullPhoneNumber",
            utilsScript:
              "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.3/js/utils.js",
          }),
        internationalTelephoneInput:
          new FormValidation.plugins.InternationalTelephoneInput({
            field: "contactMobile",
            message: "The mobile number is not valid",
            hiddenPhoneInput: "fullContactNumber",
            utilsScript:
              "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.3/js/utils.js",
          }),
      },
    }
  );
});

document
  .getElementById("warehouseAddressCheck")
  .addEventListener("change", function () {
    const warehouseAddress = document.querySelector(".warehouseAddress");

    if (this.checked) {
      warehouseAddress.style.display = "none"; // Hide the address when checked
    } else {
      warehouseAddress.style.display = "block"; // Show the address when unchecked
    }
  });

document
  .getElementById("returnAddressCheck")
  .addEventListener("change", function () {
    const returnAddress = document.querySelector(".returnAddress");

    if (this.checked) {
      returnAddress.style.display = "none"; // Hide the address when checked
    } else {
      returnAddress.style.display = "block"; // Show the address when unchecked
    }
  });

document
  .getElementById("bussinessWarehouseAddress")
  .addEventListener("change", function () {
    const bussWarehouseAddress = document.querySelector(
      ".bussWarehouseAddress"
    );

    if (this.checked) {
      bussWarehouseAddress.style.display = "none"; // Hide the address when checked
    } else {
      bussWarehouseAddress.style.display = "block"; // Show the address when unchecked
    }
  });
document
  .getElementById("bussReturnAddressCheck")
  .addEventListener("change", function () {
    const bussReturnAddress = document.querySelector(".bussReturnAddress");

    if (this.checked) {
      bussReturnAddress.style.display = "none"; // Hide the address when checked
    } else {
      bussReturnAddress.style.display = "block"; // Show the address when unchecked
    }
  });

// bank cheque Photo
function bankChequePhoto() {
  const fileInput = document.getElementById("chequeCopy");
  const bankCheckCopy = document.getElementById("bankCheckCopy");

  if (fileInput.files.length > 0) {
    const fileName = fileInput.files[0].name;
    const fileNameWithoutExtension = fileName.split(".")[0];
    const extension = fileName.split(".").pop();
    bankCheckCopy.textContent = `File Name: ${fileNameWithoutExtension}, Extension: ${extension}`;
  } else {
    bankCheckCopy.textContent = "No file chosen";
  }
}

// bank Check Fields
const bankDetailSection = document.querySelectorAll(
  ".bankDetail .bankRequired"
);
const submitButton = document.getElementById("bussAccNxtBtnSubmit");

function checkBankFields() {
  let allFieldsFilled = true;

  bankDetailSection.forEach((input) => {
    if (input.type === "file") {
      if (input.files.length === 0) {
        allFieldsFilled = false; // No file selected
      } else {
        const fileType = input.files[0].type.split("/")[0];
        if (fileType !== "image") {
          allFieldsFilled = false; // Invalid file type
          alert("Please upload a valid image file.");
        }
      }
    } else {
      if (input.value.trim() === "") {
        allFieldsFilled = false; // Empty text input
      }
    }
  });

  // Enable button only if all fields are filled and a valid image is selected
  submitButton.disabled = !allFieldsFilled;
}

// Add event listeners to each input field, including file input
bankDetailSection.forEach((input) => {
  if (input.type === "file") {
    input.addEventListener("change", checkBankFields);
  } else {
    input.addEventListener("input", checkBankFields);
  }
});

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector(".bankDetail").style.display = "none";

  const selectedRadio = document.querySelector(
    'input[name="individualForm"]:checked'
  );

  if (selectedRadio) {
    document.querySelector(".BusinessInInfoIndForm").style.display = "block"; // Show the next section for individual
  } else {
    document.querySelector(".BusinessInfoBussAccForm").style.display = "block"; // Show the next section for business
  }
});

// Get all submit buttons with the class 'nextBtn'

function getFrontSidePhoto() {
  const fileInput = document.getElementById("cnicFrontSidePhoto");
  const frontSidePhoto = document.getElementById("frontSidePhoto");
  // Get the file name without the extension
  const fileName = fileInput.files[0]
    ? fileInput.files[0].name
    : "No file chosen";
  const fileNameWithoutExtension = fileInput.files[0]
    ? fileName.split(".")[0]
    : "";
  const extension = fileInput.files[0] ? fileName.split(".")[1] : "";
  frontSidePhoto.textContent = `File Name: ${fileNameWithoutExtension}, Extension: ${extension}`;
}

function getBackSidePhoto() {
  const fileInput = document.getElementById("cnicFrontBackPhoto");
  const backSidePhoto = document.getElementById("backSidePhoto");
  // Get the file name without the extension
  const fileName = fileInput.files[0]
    ? fileInput.files[0].name
    : "No file chosen";
  const fileNameWithoutExtension = fileInput.files[0]
    ? fileName.split(".")[0]
    : "";
  const extension = fileInput.files[0] ? fileName.split(".")[1] : "";
  backSidePhoto.textContent = `File Name: ${fileNameWithoutExtension}, Extension: ${extension}`;
}
const personalNextBtn = document.getElementById("personalNextBtn");
let inputs = document.querySelectorAll(".personalInfoForm .required");

function checkPerInfoFields() {
  let allFieldsFilled = true;

  inputs.forEach((input) => {
    if (input.type === "file") {
      if (input.files.length === 0) {
        allFieldsFilled = false; // No file selected
      } else {
        const fileType = input.files[0].type;
        const fileSize = input.files[0].size;
        const errorMsgTag =
          input.id === "cnicFrontSidePhoto"
            ? document.getElementById("frontSidePhoto")
            : document.getElementById("backSidePhoto");
        // Accept both image and PDF file types
        if (
          fileType !== "image/jpeg" &&
          fileType !== "image/png" &&
          fileType !== "application/pdf"
        ) {
          allFieldsFilled = false; // Invalid file type
          errorMsgTag.innerHTML = `<span style="color: red;">You can upload only JPG, JPEG, PNG, and PDF formats.</span>`;
        } else if (fileSize > 2097152) {
          // 2 MB = 2097152 bytes
          allFieldsFilled = false; // File too large
        }
      }
    } else {
      if (input.value.trim() === "") {
        allFieldsFilled = false; // Empty text input
      }
    }
  });

  // Enable button only if all fields are filled and valid images are selected
  personalNextBtn.disabled = !allFieldsFilled;
}

// Function to handle CNIC front side image upload
function getFrontSidePhoto() {
  const input = document.getElementById("cnicFrontSidePhoto");
  const file = input.files[0]; // Get the first selected file
  const fileSize = file.size / (1024 * 1024); // Convert size to MB
  const fileName = file.name;
  const frontSidePhotoMsg = document.getElementById("frontSidePhoto");

  if (fileSize > 2) {
    // Show red alert if size is more than 2 MB
    frontSidePhotoMsg.innerHTML = `<span style="color: red;">The selected file (${fileName}) is too large. Please upload a file smaller than 2 MB.</span>`;
    input.value = ""; // Clear the input
  } else {
    // Show file name if valid
    frontSidePhotoMsg.innerHTML = `Selected: ${fileName}`;
  }
}

// Function to handle CNIC back side image upload
function getBackSidePhoto() {
  const input = document.getElementById("cnicFrontBackPhoto");
  const file = input.files[0]; // Get the first selected file
  const fileSize = file.size / (1024 * 1024); // Convert size to MB
  const fileName = file.name;
  const backSidePhotoMsg = document.getElementById("backSidePhoto");

  if (fileSize > 2) {
    // Show red alert if size is more than 2 MB
    backSidePhotoMsg.innerHTML = `<span style="color: red;">The selected file (${fileName}) is too large. Please upload a file smaller than 2 MB.</span>`;
    input.value = ""; // Clear the input
  } else {
    // Show file name if valid
    backSidePhotoMsg.innerHTML = `Selected: ${fileName}`;
  }
}

inputs.forEach((input) => {
  if (input.type === "file") {
    input.addEventListener("change", checkPerInfoFields);
  } else {
    input.addEventListener("input", checkPerInfoFields);
  }
});


document.getElementById("personalPhoneNumber").addEventListener("input", function (event) {
  // Remove all non-numeric characters from input
  let input = event.target.value.replace(/\D/g, '');
  let formattedInput = '';

  // Format the input as XXX-XXXXXXX (only one hyphen after the first 3 digits)
  if (input.length > 0) {
      formattedInput += input.substring(0, 3);
  }
  if (input.length > 3) {
      formattedInput += '-' + input.substring(3);
  }

  // Set the formatted value back to the input field
  event.target.value = formattedInput;
});

document.getElementById("cnicNumber").addEventListener("input", function (event) {
  let input = event.target.value.replace(/\D/g, ''); // Remove all non-numeric characters
  let formattedInput = '';

  // Format the input as XXXXX-XXXXXXX-X
  if (input.length > 0) {
      formattedInput += input.substring(0, 5); // First 5 characters
  }
  if (input.length > 5) {
      formattedInput += '-' + input.substring(5, 12); // Next 7 characters after first hyphen
  }
  if (input.length > 12) {
      formattedInput += '-' + input.substring(12, 13); // One character after second hyphen
  }

  event.target.value = formattedInput; // Set the formatted value back to the input field
});

document.getElementById("togglePassword").addEventListener("click", function () {
  let passwordInput = document.getElementById("personalPassword");
  let toggleIcon = this.querySelector("i");

  // Toggle password visibility
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  }
});
document.getElementById("toggleConfirmPassword").addEventListener("click", function () {
  let passworpersonalConfirmPassworddInput = document.getElementById("personalConfirmPassword");
  let toggleIcon = this.querySelector("i");

  // Toggle password visibility
  if (personalConfirmPassword.type === "password") {
    personalConfirmPassword.type = "text";
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  } else {
    personalConfirmPassword.type = "password";
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  }
});

document
  .getElementById("personalNextBtn")
  .addEventListener("click", function (event) {
    // Prevent form submission
    event.preventDefault();

    let isValid = true;

    let emailInput = document.getElementById("personalEmail");
    let password = document.getElementById("personalPassword").value;
    const phoneNumberInput = document.getElementById("personalPhoneNumber").value;
    let personalCnicNumber = document.getElementById("cnicNumber").value.trim();
    let confirmPassword = document.getElementById("personalConfirmPassword").value;
    // Define the special character pattern
    let specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
    // Close any previous alerts
    Swal.close();

    // Check if all required fields are filled
    inputs.forEach(function (input) {
      if (input.value.trim() === "") {
        isValid = false;
        Swal.fire({
          title: "Enter all credentials",
          icon: "error",
          confirmButtonText: "OK",
          showCloseButton: true,
          timer: 5000,
          customClass: {
            popup: "white-alert", // Custom class for the popup
          },
        });
        return; // Exit the loop early
      }
    });

    // Check for valid email format
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailInput.value)) {
      isValid = false;
      Swal.fire({
        title: "Invalid Email Format",
        text: "Please enter a valid email address",
        icon: "error",
        confirmButtonText: "OK",
        showCloseButton: true,
        timer: 5000,
        customClass: {
          popup: "white-alert", // Custom class for the popup
        },
      });
      return;
    }



    // Check if the phone number has exactly 11 digits
    if (phoneNumberInput.length !== 11) {
        Swal.fire({
            title: "Invalid Phone Number",
            text: "Phone number must be exactly 10 digits.",
            icon: "error",
            confirmButtonText: "OK",
            showCloseButton: true,
            timer: 5000,
            customClass: {
                popup: "white-alert",
            },
        });
        return; // Stop the function if the validation fails
    }


    if (personalCnicNumber.length !== 15 ) {
      isValid = false;
      Swal.fire({
        title: "Invalid CNIC Number",
        text: "CNIC number must be exactly 13 digits.",
        icon: "error",
        confirmButtonText: "OK",
        showCloseButton: true,
        timer: 5000,
        customClass: {
          popup: "white-alert",
        },
      });
      return;
    }

    if (password !== confirmPassword) {
      isValid = false;
      Swal.fire({
        title: "Password Mismatch",
        text: "Passwords do not match. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
        showCloseButton: true,
        timer: 5000,
        customClass: {
          popup: "white-alert", // Custom class for the popup
        },
      });
      return;
    }
    // Check if passwords match
    if (password.length < 8) {
      isValid = false;
      Swal.fire({
        title: "Weak Password",
        text: "Password must be at least 8 characters long.",
        icon: "error",
        confirmButtonText: "OK",
        showCloseButton: true,
        timer: 5000,
        customClass: {
          popup: "white-alert", // Custom class for the popup
        },
      });
      return;
    }

    if (!specialCharPattern.test(password)) {
      isValid = false;
      Swal.fire({
        title: "Invalid Password",
        text: "Password must contain at least one special character.",
        icon: "error",
        confirmButtonText: "OK",
        showCloseButton: true,
        timer: 5000,
        customClass: {
          popup: "white-alert", // Custom class for the popup
        },
      });
      return;
    }

    // If all fields are valid, proceed
    if (isValid) {
      personalNextBtn.disabled = false;
      circles[0].classList.add("completed");
      circles[1].classList.remove("active"); // Complete the second circle
      circles[1].classList.add("completed"); // Complete the second circle
      circles[2].classList.add("active"); // Set third circle as active

      const progressPercentage = 66.6667; // Progress bar to 66.67%
      progressBar.style.width = `${progressPercentage}%`;
      progressBarInner.style.backgroundColor = "#12B76A"; // Set progress bar color

      console.log("All fields are valid. Proceeding...");

      // Hide the current section
      document.querySelector(".personalInfoForm").style.display = "none";
      const selectedRadio = document.querySelector(
        'input[name="accountType"]:checked'
      );

      if (selectedRadio && selectedRadio.id === "individualForm") {
        document.querySelector(".BusinessInInfoIndForm").style.display ="block"; // Show the next section for individual
        document.querySelector(".BusinessInfoBussAccForm").style.display ="none"; // Hide business section
        document.querySelector(".BusinessInInfoIndForm").scrollIntoView({ behavior: 'smooth' });

      } else {
        document.querySelector(".BusinessInfoBussAccForm").style.display ="block"; // Show the next section for business
        document.querySelector(".BusinessInInfoIndForm").style.display = "none"; // Hide individual section
        document.querySelector(".BusinessInfoBussAccForm").scrollIntoView({ behavior: 'smooth' });

      }

      // Or if you want to scroll to the business section regardless of selection:
      // document.querySelector(".BusinessInfoBussAccForm").scrollIntoView({ behavior: 'smooth' });

       //document.querySelector('personalInfoForm').scrollIntoView({ behavior: 'smooth' });
    }
  });

const backBtns = document.querySelectorAll(".backBtn");
const bankDetailLinks = document.querySelectorAll(".bankDetailLink");
const bankDetBackBtn = document.querySelectorAll(".bankDetBackBtn");
const bankAccBackBtn = document.getElementById("bankAccBackBtn");

backBtns.forEach(function (backBtn) {
  backBtn.addEventListener("click", function () {
    // Hide the business info forms
    document.querySelector(".BusinessInInfoIndForm").style.display = "none"; 
    document.querySelector(".BusinessInfoBussAccForm").style.display = "none"; 
    
    // Show the personal info form
    const personalInfoForm = document.querySelector(".personalInfoForm");
    personalInfoForm.style.display = "block";
    
    // Ensure the personal info form is displayed before scrolling
    if (personalInfoForm) {
      console.log("Scrolling to personal info form...");
      personalInfoForm.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error("Personal info form not found!");
    }
  });
});

bankDetailLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default link behavior

    // Hide all forms
    document.querySelector(".BusinessInInfoIndForm").style.display = "none"; // Ensure this is the correct selector
    document.querySelector(".BusinessInfoBussAccForm").style.display = "none"; // Ensure this is the correct selector
    document.querySelector(".personalInfoForm").style.display = "none";

    // Show the bank detail section
    document.querySelector(".bankDetail").style.display = "block";

    console.log("Bank detail link clicked");
  });
});

bankDetBackBtn.forEach(function (backBtn) {
  backBtn.addEventListener("click", function () {
    const selectedRadio = document.querySelector(
      'input[name="accountType"]:checked'
    );

    if (selectedRadio && selectedRadio.id === "individualForm") {
      document.querySelector(".BusinessInInfoIndForm").style.display = "block"; // Show the next section for individual
      document.querySelector(".bankDetail").style.display = "none";
      document.querySelector(".personalInfoForm").style.display = "none";
    } else {
      document.querySelector(".BusinessInfoBussAccForm").style.display =
        "block"; // Show the next section for business
      document.querySelector(".bankDetail").style.display = "none";
      document.querySelector(".personalInfoForm").style.display = "none";
    }
  });
});

bankAccBackBtn.addEventListener("click", () => {
  const selectedRadio = document.querySelector(
    'input[name="accountType"]:checked'
  );

  if (selectedRadio && selectedRadio.id === "individualForm") {
    document.querySelector(".BusinessInInfoIndForm").style.display = "block"; // Show the next section for individual
    document.querySelector(".bankDetail").style.display = "none";
    document.querySelector(".personalInfoForm").style.display = "none";
  } else {
    document.querySelector(".BusinessInfoBussAccForm").style.display = "block"; // Show the next section for business
    document.querySelector(".bankDetail").style.display = "none";
    document.querySelector(".personalInfoForm").style.display = "none";
  }
});

// show password With Icon




