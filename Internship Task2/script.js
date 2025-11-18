window.addEventListener("DOMContentLoaded", () => {

  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      formMessage.textContent = "⚠️ All fields are required.";
      formMessage.style.color = "red";
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(email)) {
      formMessage.textContent = "❌ Please enter a valid email.";
      formMessage.style.color = "red";
      return;
    }

    formMessage.textContent = "✅ Form submitted successfully!";
    formMessage.style.color = "green";
    contactForm.reset();
  });

  // Dynamic TO-DO list
  const addBtn = document.getElementById("addTodo");
  const todoInput = document.getElementById("todoInput");
  const todoList = document.getElementById("todoList");

  addBtn.addEventListener("click", () => {
    const task = todoInput.value.trim();

    if (task === "") {
      alert("Please enter a task!");
      return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = task;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");

    removeBtn.addEventListener("click", () => li.remove());

    li.appendChild(span);
    li.appendChild(removeBtn);
    todoList.appendChild(li);

    todoInput.value = "";
  });

  todoInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addBtn.click();
    }
  });
});
