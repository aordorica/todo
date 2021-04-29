const todos = [
  {
    text: "Order cat food",
    completed: false,
  },
  {
    text: "Clean kitchen",
    completed: true,
  },
  {
    text: "Buy food",
    completed: true,
  },
  {
    text: "Do work",
    completed: false,
  },
  {
    text: "Exercise",
    completed: true,
  },
];

const filters = {
  searchText: ''
};


//Render function to create list todo;s filtered with the filters object search filed.
//Redndersd the updated list to the DOM and clears previous DOM with innerHTML = ''
const renderTodos = function(todoList, filterList) {
  const filteredTodo = todos.filter(function(todo) {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  const incompleteTodos = filteredTodo.filter(function (todo) {
    return !todo.completed;
  });

  document.querySelector('#todos').innerHTML = '';

  const summary = document.createElement("h2");
  summary.textContent = `You have ${incompleteTodos.length} Todo's Left`;
  document.querySelector("#todos").appendChild(summary);
    
  filteredTodo.forEach(function(currentTodo) {
    const temp = document.createElement('p')
    temp.textContent = currentTodo.text
    temp.className = 'todo'
    document.querySelector('#todos').appendChild(temp)
  })
}

renderTodos(todos, filters)

//Search Event Listener
document.querySelector("#search").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

//Create New Note form --> Not in final version
document.querySelector('#note-form').addEventListener('submit', function(e) {
  e.preventDefault()
  todos.push({
    text: e.target.elements.title.value,
    completed: false,
  });
  renderTodos(todos, filters);
  e.target.elements.text.value = ''
})

//Delete all Todo's
document.querySelector('#delete').addEventListener('click', function(e) {
  document.querySelectorAll('.todo').forEach(function(todo) {
    todo.remove();
  })
})

