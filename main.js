const signUpButtton = document.getElementById("signUp");
const signInButtton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButtton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButtton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});
