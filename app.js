
const navSearch = document.getElementById("navSearch");
const foodCards = document.querySelectorAll(".food-card");

navSearch.addEventListener("keyup", function () {
  const searchValue = navSearch.value.toLowerCase();

  foodCards.forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();

    if (title.includes(searchValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});



const orderButtons = document.querySelectorAll("button");

orderButtons.forEach(button => {
  if (button.textContent.includes("Order")) {
    button.addEventListener("click", function () {
      const foodName = this.parentElement.querySelector("h3").textContent;
      alert("✅ " + foodName + " added to your cart!");
    });
  }
});


function scrollToFood() {
  document.getElementById("foodGrid").scrollIntoView({
    behavior: "smooth"
  });
}



const locationInput = document.querySelector("input[placeholder*='delivery']");

if (locationInput) {
  locationInput.addEventListener("change", function () {
    localStorage.setItem("userLocation", locationInput.value);
  });

  
  const savedLocation = localStorage.getItem("userLocation");
  if (savedLocation) {
    locationInput.value = savedLocation;
  }
}
