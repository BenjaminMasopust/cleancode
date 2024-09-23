// Set the background color to green
document.body.style.backgroundColor = "green";

// Get the element by ID and check if it exists
let statusElement = document.getElementById("status");

if (statusElement) {
  // Display the success message
  statusElement.innerText = "Operation successful.";
} else {
  console.error("Element with ID 'status' not found.");
}
