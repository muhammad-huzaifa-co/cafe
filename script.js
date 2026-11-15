// Student: Muhammad Huzaifa | Roll No: 26I-3229 | Section: E
function placeOrder() {
    const selectedItem = document.getElementById("item-choice").value;

    // Show a message to the visitor.
    window.alert("Thank you! Your " + selectedItem + " order has been received.");

    // Print a message for the developer in the browser console.
    console.log("Order button clicked for: " + selectedItem);
}
