// Array of available items
const availableItems = ["Shampoo", "Soap", "Sponge", "Water"];

// Check if session storage is available
if (typeof Storage === "undefined") {
  alert(
    "Sorry, your browser does not support Web storage. Try again with a better one"
  );
} else {
  createStore();
  displayCart();
}

/* --------- FUNCTIONS --------- */

// Add item to cart (store in sessionStorage)
function addItemToCart(item) {
  sessionStorage.setItem(item, "true");
  displayCart();
}

// Create the store UI
function createStore() {
  const storeDiv = document.getElementById("store");
  const ul = document.createElement("ul");

  availableItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    li.style.cursor = "pointer";
    li.addEventListener("click", () => addItemToCart(item));
    ul.appendChild(li);
  });

  storeDiv.appendChild(ul);
}

// Display the cart status
function displayCart() {
  // Count how many items are stored
  let count = 0;
  for (let i = 0; i < availableItems.length; i++) {
    if (sessionStorage.getItem(availableItems[i])) {
      count++;
    }
  }

  // If there are items, show message
  if (count > 0) {
    // Remove old message if exists
    let oldMsg = document.getElementById("cartMessage");
    if (oldMsg) oldMsg.remove();

    const p = document.createElement("p");
    p.id = "cartMessage";
    p.textContent = `You previously had ${count} items in your cart`;
    document.body.appendChild(p);
  }
}
