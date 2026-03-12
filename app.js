// =============================================
// app.js — Main JavaScript file
// Each section is added in its own branch!
// =============================================
 
// -----------------------------------------------
// BRANCH: main — Basic setup
// -----------------------------------------------
const taskInput = document.getElementById('taskInput');
const addBtn    = document.getElementById('addBtn');
const taskList  = document.getElementById('taskList');
 
// -----------------------------------------------
// BRANCH: feature/add-task
// Goal: Read input and add a task to the list
// -----------------------------------------------
addBtn.addEventListener('click', addTask);
 
taskInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') addTask();
});
 
function addTask() {
  const text = taskInput.value.trim();
  if (text === '') return alert('Please enter a task!');
 
  const li = document.createElement('li');
  li.classList.add('task-item');
 
  li.innerHTML = `
    <button class="complete-btn" onclick="toggleComplete(this)">✔ Done</button>
    <span class="task-text">${text}</span>
    <button class="delete-btn" onclick="deleteTask(this)">✖ Delete</button>
  `;
 
  taskList.appendChild(li);
  taskInput.value = '';
  updateEmptyMessage();
}
 
// -----------------------------------------------
// BRANCH: feature/delete-task
// Goal: Remove a task from the list
// -----------------------------------------------
function deleteTask(btn) {
  const taskItem = btn.closest('.task-item');
  taskItem.remove();
  updateEmptyMessage();
}
 
// -----------------------------------------------
// BRANCH: feature/mark-complete
// Goal: Strike through a task when marked done
// -----------------------------------------------
function toggleComplete(btn) {
  const taskItem = btn.closest('.task-item');
  taskItem.classList.toggle('completed');
 
  if (taskItem.classList.contains('completed')) {
    btn.textContent = '↩ Undo';
  } else {
    btn.textContent = '✔ Done';
  }
 
  // Save to localStorage if that feature is added
  saveToStorage();
}
 
// -----------------------------------------------
// BRANCH: feature/local-storage
// Goal: Remember tasks even after page refresh
// -----------------------------------------------
function saveToStorage() {
  const tasks = [];
  document.querySelectorAll('.task-item').forEach(item => {
    tasks.push({
      text: item.querySelector('.task-text').textContent,
      completed: item.classList.contains('completed')
    });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
 
function loadFromStorage() {
  const saved = JSON.parse(localStorage.getItem('tasks') || '[]');
  saved.forEach(task => {
    const li = document.createElement('li');
    li.classList.add('task-item');
    if (task.completed) li.classList.add('completed');
 
    li.innerHTML = `
      <button class="complete-btn" onclick="toggleComplete(this)">${task.completed ? '↩ Undo' : '✔ Done'}</button>
      <span class="task-text">${task.text}</span>
      <button class="delete-btn" onclick="deleteTask(this)">✖ Delete</button>
    `;
    taskList.appendChild(li);
  });
  updateEmptyMessage();
}
 
// -----------------------------------------------
// HELPER — Show message when no tasks exist
// -----------------------------------------------
function updateEmptyMessage() {
  let empty = document.querySelector('.empty-msg');
 
  if (taskList.children.length === 0) {
    if (!empty) {
      empty = document.createElement('p');
      empty.classList.add('empty-msg');
      empty.textContent = 'No tasks yet! Add one above 🎉';
      taskList.appendChild(empty);
    }
  } else {
    if (empty) empty.remove();
  }
 
  saveToStorage();
}
 
// -----------------------------------------------
// Initialize app on page load
// -----------------------------------------------
loadFromStorage();
updateEmptyMessage();