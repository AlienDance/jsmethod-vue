<template>
  <div class="container my-5 d-flex justify-content-center">
    <div class="stuff">
      <div class="d-flex flex-column align-items-center todo-container">
        <input type="text" class="form-control" id="new-todo-input" />
        <!-- <button class="mx-2 btn btn-success">Add</button> -->
        <ul class="list-group my-2">
          <li class="list-group-item">dsa</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import TodoForm from '@/components/TodoForm.vue'

export default {
  components: { TodoForm }
}
</script>

<style>
#new-todo-input {
  height: 3rem;
}

.stuff {
  width: 28rem;
}
</style>
