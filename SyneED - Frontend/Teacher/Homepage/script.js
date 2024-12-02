// Function to open the modal
function openModal() {
  const modalOverlay = document.getElementById('modal-overlay');
  modalOverlay.style.display = 'flex'; // Show modal
}

// Function to close the modal when clicking outside the content
document.getElementById('modal-overlay').addEventListener('click', function (event) {
  const modalContent = document.querySelector('.modal-content');
  
  // Close modal if the click is outside the modal content
  if (!modalContent.contains(event.target)) {
    this.style.display = 'none';
  }
});

// Form handling logic
document.addEventListener("DOMContentLoaded", function () {
  const classroomInput = document.getElementById("classroom-name");
  const universityInput = document.getElementById("university-name");
  const submitButton = document.getElementById("btn1");

  function toggleButtonState() {
    if (classroomInput.value.trim() && universityInput.value.trim()) {
      submitButton.disabled = false; 
    } else {
      submitButton.disabled = true; 
    }
  }

  classroomInput.addEventListener("input", toggleButtonState);
  universityInput.addEventListener("input", toggleButtonState);

  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();  
    if (classroomInput.value.trim() && universityInput.value.trim()) {
      alert("Classroom created!");
      document.getElementById('modal-overlay').style.display = 'none'; // Hide modal
    }
  });
});

// Function to toggle the sidebar
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active'); // Toggle the 'active' class to show/hide the sidebar
}

// Function to open the modal
function openModal() {
  const modalOverlay = document.getElementById('modal-overlay');
  modalOverlay.style.display = 'flex'; // Show modal
}

// Function to close the modal when clicking outside the content
document.getElementById('modal-overlay').addEventListener('click', function (event) {
  const modalContent = document.querySelector('.modal-content');
  
  // Close modal if the click is outside the modal content
  if (!modalContent.contains(event.target)) {
    this.style.display = 'none';
  }
});

// Form handling logic
document.addEventListener("DOMContentLoaded", function () {
  const classroomInput = document.getElementById("classroom-name");
  const universityInput = document.getElementById("university-name");
  const submitButton = document.getElementById("btn1");

  function toggleButtonState() {
    if (classroomInput.value.trim() && universityInput.value.trim()) {
      submitButton.disabled = false; 
    } else {
      submitButton.disabled = true; 
    }
  }

  classroomInput.addEventListener("input", toggleButtonState);
  universityInput.addEventListener("input", toggleButtonState);

  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();  
    if (classroomInput.value.trim() && universityInput.value.trim()) {
      alert("Classroom created!");
      document.getElementById('modal-overlay').style.display = 'none'; // Hide modal
    }
  });
});
