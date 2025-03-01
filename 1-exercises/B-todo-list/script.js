function todoList(todos) {
  const content = document.querySelector("#content");
  let headingEl = document.createElement("h1");
  content.appendChild(headingEl);
  headingEl.innerText = "Todo list";

    let unorderedListEl = document.createElement("ul")
    content.appendChild(unorderedListEl);
  todos.forEach(task => {
    
    let listItemEl = document.createElement("li");

    unorderedListEl.appendChild(listItemEl);
    listItemEl.append(task.todo)
    listItemEl.style.cursor = "pointer"

    listItemEl.addEventListener("click", function () {
      listItemEl.style.textDecoration = "line-through";
      listItemEl.addEventListener("click", function () {
        if(listItemEl.style.textDecoration = "line-through"){
          listItemEl.style.textDecoration = "none"
         } 
      })
    })
  });

}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" }
];

todoList(todos);