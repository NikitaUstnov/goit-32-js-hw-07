const validateInputRef = document.querySelector("#validation-input");

validateInputRef.addEventListener("change", (e) => {
  let value = e.target.value;

  if (value.length > 6 || value.length < 6) {
    validateInputRef.classList.add("invalid");
  }
  if (value.length === 6) {
    validateInputRef.classList.remove("invalid");
    validateInputRef.classList.add("valid");
  }
  if (value.length === 0) {
    validateInputRef.classList.remove("invalid");
    validateInputRef.classList.remove("valid");
  }
});
