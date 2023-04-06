const Main = document.querySelector(".container");
const End = document.querySelector(".containero");
const txt = document.querySelector(".state");
let rateState = 0;

const ratingClick = (event) => {
  document.querySelectorAll(".rate__buttons").forEach((button) => {
    button.classList.remove("active");
  });

  
 console.log(event.target.classList.toggle("active")); 
  rateState = event.target.textContent;
  console.log(rateState)
};

/* const ratingClick = (event) => {
  const buttons = document.querySelectorAll(".rate__buttons");
  const clickedButton = event.target;

  buttons.forEach((button) => {
    if (button !== clickedButton) {
      button.classList.remove("active");
    }
  });

  if (clickedButton.classList.contains("active")) {
    clickedButton.classList.remove("active");
    rateState = "";
  } else {
    clickedButton.classList.add("active");
    rateState = clickedButton.textContent;
  }
}; */

function ratingSubmitted() {
  Main.classList.add("hidden");
  End.classList.remove("hidden");
  End.style.display = "block";
  txt.textContent = `you selected ${rateState} out of 5`;
}

document.querySelectorAll(".rate--buttons").forEach((button) => {
  button.addEventListener("click", ratingClick);
});

document.querySelector(".submit").addEventListener("click", ratingSubmitted);
