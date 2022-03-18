<template>
  <div v-if="!chatUsername" class="container d-flex justify-content-center my-auto">
    <form ref="usernameForm" class="card p-3 chat-login-form border border-light text-light" style="width: 22rem">
      <p class="text-center lead fs-3">Enter a username:</p>
      <input ref="usernameInput" type="text" class="form-control text-light" style="background-color: #6c757d" />
      <div class="text-center my-2">
        <button class="btn btn-success">Continue</button>
      </div>
    </form>
  </div>
  <div v-else class="d-flex flex-column h-100 supa-div">
    <div class="container" style="padding-bottom: 54px">
      <ul class="list-group my-2">
        <li v-for="item in messagesArray" :key="item" class="list-group-item my-1 border rounded chat-msg text-light">
          <div class="row text-warning">
            <div class="col text-start">{{ item.username }}</div>
            <div class="col text-end">{{ item.time }}</div>
          </div>
          <div>{{ item.message }}</div>
        </li>
      </ul>
    </div>
    <div class="chat-msg-panel mt-auto fixed-bottom">
      <div class="container py-2">
        <form ref="messageForm" class="d-flex">
          <input ref="messageInput" type="text" class="form-control text-light" style="background-color: #6c757d" />
          <button class="btn btn-success ms-2">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { onMounted, onUpdated } from '@vue/runtime-core'

export default {
  name: 'Chat',
  setup() {
    const messageForm = ref(null)
    const messageInput = ref(null)
    const messagesArray = ref([])
    const usernameForm = ref(null)
    const usernameInput = ref(null)
    const socket = io()
    let chatUsername

    if (!$cookies.get('chat-username')) {
      console.log('no chat username')
      chatUsername = null
    } else {
      chatUsername = $cookies.get('chat-username')
    }

    console.log(chatUsername)

    onMounted(() => {
      if (chatUsername) {
        messageForm.value.addEventListener('submit', e => {
          e.preventDefault()
          if (messageInput.value.value) {
            socket.emit('NEW_CHAT_MESSAGE', {
              username: $cookies.get('chat-username'),
              message: messageInput.value.value
            })
            messageInput.value.value = ''
          }
        })
      } else {
        usernameForm.value.addEventListener('submit', e => {
          if (usernameInput.value.value) {
            $cookies.set('chat-username', usernameInput.value.value, 60 * 60 * 24)
          }
        })
      }
    })

    onUpdated(() => {
      const lastMsg = messagesArray.value[messagesArray.value.length - 1]
      if (lastMsg.username === chatUsername) {
        window.scrollTo(0, document.body.scrollHeight)
      }
    })

    socket.on('NEW_CHAT_MESSAGE', messageInfo => {
      messagesArray.value.push(messageInfo)
    })

    return { messageForm, messageInput, messagesArray, chatUsername, usernameForm, usernameInput }
  }
}
</script>

<style>
.chat-msg-panel,
.chat-login-form {
  background-color: #2e2e2e;
}

.chat-msg {
  background-color: #4c4c4c;
}
</style>
