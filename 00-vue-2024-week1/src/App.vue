<script setup lang="ts">
// Import required Vue functions
import { ref, reactive } from 'vue'
// Import definition of custom Vue component
import VueComponent from './components/VueComponent.vue'

// ref can be used by both primitive and non-primitive data types
const text = ref('')
const num = ref(0)
const newTodoTitle = ref('')
const imageUrl = ref('https://vuejs.org/images/logo.png')
// reactive cannot be used by primitive data types
const tempTodo = reactive({
  id: 0,
  title: '',
  dueDate: '',
  completed: false,
})

// operation on ref must be done by .value
const add = () => num.value++

const todos = reactive([
  { id: 1, title: 'Learn Vue.js', dueDate: '2023-10-01', completed: false },
  { id: 2, title: 'Build a Vue app', dueDate: '2023-10-15', completed: false },
  { id: 3, title: 'Deploy the app', dueDate: '2023-10-30', completed: false },
])

// operation on reactive can be done directly
const addTodo = (title: string) => {
  if (title.trim().length === 0) {
    console.warn('代辦事項標題不能為空')
    return
  }
  const timestamp = Date.now()
  const todo = {
    id: timestamp,
    title,
    dueDate: new Date(timestamp).toISOString().split('T')[0], // 格式化日期為 YYYY-MM-DD
    completed: false,
  }
  todos.push(todo)
  newTodoTitle.value = '' // 清空輸入框
}

const editTodo = (todo: { id: number; title: string; dueDate: string; completed: boolean }) => {
  console.log('Editing todo:', todo)
  Object.assign(tempTodo, todo)
}

const saveTodo = () => {
  const index = todos.findIndex((t) => t.id === tempTodo.id)
  console.log('Saving todo:', tempTodo, 'at index:', index)
  if (index !== -1) {
    todos[index].title = tempTodo.title
    tempTodo.title = ''
    tempTodo.id = 0
  }
}
</script>

<template>
  <h1>This is App.vue</h1>
  <!-- Insert customized component -->
  <VueComponent />
  <div>
    <!-- v-model: two-way binding -->
    <input v-model="text" type="text" placeholder="Input text here" />
    <!-- v-text: one-way rendering -->
    Text: <label for="text" v-text="text"></label>
  </div>
  <div>
    <!-- Expression interpolation -->
    Num: {{ num }}
    <!-- v-on: event binding -->
    <button type="button" v-on:click="add">Add by v-on:click</button>
    <!-- v-on: shortcut -->
    <button type="button" @click="add">Add by @click</button>
  </div>
  <!-- v-bind: attribute binding -->
  <img v-bind:src="imageUrl" alt="" style="width: 100px" />
  <!-- v-bind: shortcut -->
  <img :src="imageUrl" alt="" style="width: 100px" />
  <br />
  <table>
    <thead>
      <tr>
        <th>代辦事項</th>
        <th>到期日</th>
        <th>已完成</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <!-- v-for: looping -->
      <tr v-for="todo in todos" v-bind:key="todo.id">
        <td>{{ todo.title }}</td>
        <td>{{ todo.dueDate }}</td>
        <td>
          {{ todo.completed ? '是' : '否' }}
          <input type="checkbox" v-model="todo.completed" />
        </td>
        <td>
          <button type="button" @click="todo.completed = !todo.completed">切換</button>
          <button type="button" @click="editTodo(todo)">編輯</button>
        </td>
      </tr>
    </tbody>
  </table>
  <div>
    新增代辦事項：
    <input type="text" v-model="newTodoTitle" placeholder="代辦事項標題" />
    <button type="button" @click="addTodo(newTodoTitle)">新增</button>
  </div>
  <div>
    編輯代辦事項：
    <input type="text" v-model="tempTodo.title" placeholder="請點選編輯" />
    <button type="button" @click="saveTodo">儲存</button>
  </div>
  <div>
    <div v-for="todo in todos" :key="todo.id">{{ todo }}</div>
  </div>
</template>

<script setup lang="ts"></script>

<style></style>
