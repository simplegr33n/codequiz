// Get Main content
var main_content = document.getElementById('main-content');

// Get the modal and its parts
var modal = document.getElementById('mainModal');
var modal_text = document.getElementById('modal-text');
var confirm_modal_btn = document.getElementsByClassName("confirm-modal-btn")[0];
var cancel_modal_btn = document.getElementsByClassName('cancel-modal-btn')[0];

// Get the button that opens the modal
var create_btn = document.getElementById("create-btn");
var delete_btn = document.getElementById("delete-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-modal-btn")[0];

// Get the main page result area
var resultArea = document.getElementById("consumer-result-text");


// When the user clicks on the button, open the create modal 
create_btn.onclick = () => {
    modal_text.innerHTML = "Do you want to <b>create</b> an entry?";

    // Add proper listeners to modal buttons
    cancel_modal_btn.addEventListener('click', cancelCreate);
    confirm_modal_btn.addEventListener('click', confirmCreate);

    modal.style.display = "block";
}

// When the user clicks on the button, open the delete modal  
delete_btn.onclick = () => {
    modal_text.innerHTML = "Do you want to <b>delete</b> an entry?";

    // Add proper listeners to modal buttons
    cancel_modal_btn.addEventListener('click', cancelDelete);
    confirm_modal_btn.addEventListener('click', confirmDelete);

    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal and remove confirm/cancel listeners
span.onclick = () => {
    closeModal();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
    if (event.target == modal) {
        closeModal();
    }
}

// Close modal window
closeModal = () => {
    // Remove any listeners from modal cancel/confirm buttons
    cancel_modal_btn.removeEventListener('click', cancelDelete);
    confirm_modal_btn.removeEventListener('click', confirmDelete);
    cancel_modal_btn.removeEventListener('click', cancelCreate);
    confirm_modal_btn.removeEventListener('click', confirmCreate);
    modal.style.display = "none";
}

// Modal Functions
confirmCreate = () => {
    console.log("Confirm Create");
    resultArea.innerHTML = "<b>Creation</b> successful!";
    resultArea.style.background = "#7DCA37";

    // Add an entry to the list of entries
    var createdNode = document.createElement('div');
    createdNode.textContent = "[A Created Entry]";
    createdNode.setAttribute('class', 'created-entry');
    main_content.appendChild(createdNode);

    closeModal();
}

cancelCreate = () => {
    console.log("Cancel Create");
    resultArea.innerHTML = "<b>Creation</b> cancelled...";
    resultArea.style.background = "#DCB223";
    closeModal();
}

confirmDelete = () => {
    console.log("Confirm Delete");
    resultArea.innerHTML = "<b>Deletion</b> successful!";
    resultArea.style.background = "#DC5323";

    // Remove an entry from the list of entries
    var deleteEntry = document.getElementsByClassName('created-entry')[0];
    deleteEntry.remove();

    closeModal();
}

cancelDelete = () => {
    console.log("Cancel Delete");
    resultArea.innerHTML = "<b>Deletion</b> cancelled...";
    resultArea.style.background = "#DCB223";
    closeModal();
}