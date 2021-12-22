<template>
  <div class="container-fluid">
    <div class="row mt-5 d-flex justify-content-center">
      <div ref="columnDiv" class="col-10 col-lg-5">
        <div class="input-group">
          <span class="input-group-text">New To-Do</span>
          <input ref="input" type="text" class="form-control" />
          <button @click="saveItem" class="btn btn-success">Save</button>
          <button @click="clearAllItems" class="btn btn-danger">Clear All</button>
          <button @click="add" class="btn-btn-warning">Add</button>
        </div>
      </div>
    </div>
    <div class="row mt-3 d-flex justify-content-center">
      <div class="col-10 col-lg-5 item-list">
        <TodoItem v-for="item in storageArray" :key="item" />
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue'
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'

export default {
  components: { TodoItem },
  setup() {
    const input = ref(null)
    const columnDiv = ref(null)
    let storageArray = ref(JSON.parse(localStorage.getItem('todo')))

    const add = () => {
      storageArray.push('item')
      storageArray.push('item2')
      storageArray.push('item3')
      console.log(storageArray)
      return storageArray
    }
    setTimeout(() => storageArray.push('item'), 3000)

    // let b = add()

    // add()
    // let storageArray = JSON.parse(localStorage.getItem('todo'))
    // storageArray.push('item')

    const createDeleteBtn = () => {
      let btn = document.createElement('button')
    }

    const generateId = () => {
      return Math.round(Math.random() * 100000)
    }

    const appendList = () => {
      let div = document.createElement('div')
      div.classList.add('d-grid', 'gap-2', 'mt-3')
      columnDiv.value.append(div)
    }

    const addItem = () => {
      let itemList = document.querySelector('.item-list')
      console.log(TodoItem)
      // itemList.append(TodoItem);
    }

    // const createListItem = (itemContent, itemId) => {
    //   let gridDiv = document.querySelector('.d-grid')
    //   let itemDiv = document.createElement('div')
    //   itemDiv.textContent = itemContent
    //   itemDiv.contentEditable = true
    //   itemDiv.classList.add('bg-light', 'p-2', 'border', 'rounded')
    //   itemDiv.dataset.id = itemId
    //   gridDiv.append(itemDiv)
    // }

    const saveItem = () => {
      if (input.value.value) {
        let storageArray = JSON.parse(localStorage.getItem('todo'))
        let id = generateId()
        let inputData = { item: input.value.value, id }
        storageArray.push(inputData)
        localStorage.setItem('todo', JSON.stringify(storageArray))
        // createListItem(inputData.item, inputData.id)
      }
    }

    const clearAllItems = () => {
      localStorage.setItem('todo', JSON.stringify([]))
      let div = document.querySelector('.d-grid')
      div.remove()
      appendList()
    }

    onMounted(() => {
      if (!localStorage.getItem('todo')) {
        localStorage.setItem('todo', JSON.stringify([]))
      } else {
        let storageArray = JSON.parse(localStorage.getItem('todo'))
        // for (let i = 0; i < storageArray.length; i++) {
        //   createListItem(storageArray[i].item, storageArray[i].id)
        // }
      }
    })

    return { input, columnDiv, saveItem, appendList, storageArray, clearAllItems, add }
  }
}
</script>

<style></style>
