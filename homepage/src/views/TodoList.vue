<template>
  <div class="container my-5 d-flex justify-content-center">
    <div class="row todo-container">
      <div class="col-12 col-md-10 pe-md-0 d-flex flex-column align-items-center">
        <input
          ref="newTodoInput"
          type="text"
          class="form-control"
          id="new-todo-input"
          @keypress.enter="setTodoToLocalStorage"
          placeholder="New To Do" />
        <div class="col-12 mt-2 d-flex d-md-none align-items-center justify-content-center">
          <TodoAddButton @click="setTodoToLocalStorage" />
          <TodoClearButton @click="clearAllTodos" />
          <TodoResetSwitch />
        </div>
        <ul class="list-group w-100 my-2">
          <div v-for="todo in todosFromStorage" :key="todo" class="input-group todo-div my-1">
            <li @input="editTodo" contenteditable="true" class="list-group-item rounded-start form-control">
              {{ todo.item }}
            </li>
            <button
              @click="deleteSingleTodo"
              class="btn btn-warning delete-btn input-group-text d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-trash"
                viewBox="0 0 16 16">
                <path
                  d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                <path
                  fill-rule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
              </svg>
            </button>
          </div>
        </ul>
      </div>
      <div class="col-12 col-md-2 ps-md-2 d-none d-md-flex flex-md-column align-items-center">
        <TodoAddButton @click="setTodoToLocalStorage" />
        <TodoClearButton @click="clearAllTodos" />
        <TodoResetSwitch />
      </div>
    </div>
  </div>
</template>

<script>
import TodoAddButton from '@/components/TodoAddButton.vue'
import TodoClearButton from '@/components/TodoClearButton.vue'
import TodoResetSwitch from '@/components/TodoResetSwitch.vue'
import { ref } from '@vue/reactivity'

export default {
  components: { TodoAddButton, TodoClearButton, TodoResetSwitch },
  setup() {
    const newTodoInput = ref(null)
    const todosFromStorage = ref([])

    todosFromStorage.value = JSON.parse(localStorage.getItem('todos'))

    const setTodoToLocalStorage = () => {
      if (newTodoInput.value.value) {
        if (todosFromStorage.value === null) {
          todosFromStorage.value = []
        } else {
          todosFromStorage.value = JSON.parse(localStorage.getItem('todos'))
        }
        todosFromStorage.value.unshift({ item: newTodoInput.value.value })
        localStorage.setItem('todos', JSON.stringify(todosFromStorage.value))
        if (JSON.parse(localStorage.getItem('todoResetInput'))) {
          newTodoInput.value.value = ''
        }
      }
    }

    const deleteSingleTodo = event => {
      const clickedButton = event.path.find(item => item.className.toString().includes('delete-btn'))
      const deleteButtonsArray = Array.from(document.querySelectorAll('.delete-btn'))
      const todoIndex = deleteButtonsArray.indexOf(clickedButton)
      const filteredArray = todosFromStorage.value.filter((todo, index) => index !== todoIndex)
      todosFromStorage.value = filteredArray
      localStorage.setItem('todos', JSON.stringify(todosFromStorage.value))
    }

    const clearAllTodos = () => {
      console.log('all todos cleared')
      todosFromStorage.value = []
      localStorage.setItem('todos', '[]')
    }

    const editTodo = event => {
      const editedTodo = event.target
      const todosList = Array.from(document.querySelectorAll('.list-group-item'))
      const todoIndex = todosList.indexOf(editedTodo)
      const todoFromStorage = todosFromStorage.value[todoIndex]
      todoFromStorage.item = editedTodo.textContent
      localStorage.setItem('todos', JSON.stringify(todosFromStorage.value))
    }

    return {
      newTodoInput,
      setTodoToLocalStorage,
      clearAllTodos,
      todosFromStorage,
      deleteSingleTodo,
      editTodo
    }
  }
}
</script>

<style>
#new-todo-input {
  height: 3rem;
}

.add-btn,
.clear-btn {
  width: 6rem;
}

.todo-container {
  width: 48rem;
}
</style>
