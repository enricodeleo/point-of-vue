<template>
  <div id="app-template">
    <header class="container header-main">
      <div class="row">
        <div class="column text-center">
          <h2 class="no-margin"><strong>TODO LIST</strong>
        </div>
      </div>
    </header>
    <div class="container">
      <div class="row">
        <div class="column">
          <div class="app-content">
            <div class="container">
              <div class="row">
                <div class="column">
                  <h2 class="text-white text-medium">
                    Todo
                  </h2>
                </div>
              </div>
              <div class="row">
                <div class="column">
                  <div class="card">
                    <div class="row" v-for="(task, i) in tasks" :key="i" :class="{ 'task-done': task.done }">
                      <div class="column column-20">
                        <button class="button-check button-clear" @click="toggleTask(i)">
                          &nbsp;
                        </button>
                      </div>
                      <div class="column column-80">
                        <input type="text" class="task-input no-margin" v-model="task.title">
                      </div>
                    </div>
                    <div v-if="!tasks.length">
                      <h3 class="no-margin">No tasks, yet.</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row add-task">
                <div class="column text-center">
                  <button class="button" @click="addTask()">
                    <h3 class="no-margin">Add Task</h3>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * New task entity
 * @param {string} title - The title of this task
 * @param {boolean} title - Whether the task is done or not
 */
function Task(title, done) {
  this.title = title || 'New Task';
  this.done = done || false;
}

export default {
  name: 'app',
  data () {
    return {
      tasks: [],
    }
  },
  methods: {
    /**
     * Add a new task to the array of tasks
     */
    addTask () {
      const newTask = new Task();
      this.tasks.push(newTask);
    },
    /**
     * Toggle the `done` status of a task
     * @param {number} i - Index of the task
     */
    toggleTask (i) {
      this.tasks[i].done = !this.tasks[i].done;
    }
  }
}
</script>

<style lang="scss">
  $color-secondary: #9c9c9c;

  @import '../node_modules/milligram/src/milligram.sass';
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i');

  html,
  body {
    width: 100%;
    height: 100%;
    min-height: 100%;
    padding: 0;
    margin: 0;
    background-color: #f8f9f9;
  }

  body {
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Oxygen-Sans", Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    background-image: url('./images/background.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .text-left {
    text-align: left;
  }

  .text-center {
    text-align: center;
  }

  .text-right {
    text-align: right;
  }

  .text-medium {
    font-weight: 500;
  }

  .text-white {
    color: #ffffff;
  }

  .no-margin {
    margin: 0;
  }

  .card {
    background: #ffffff;
    padding: 30px 22px;
    border-radius: 10px;
  }

  input.task-input {
    padding: 0;
    border: 0;
    font-size: 2.8rem;
    line-height: 1.3;
    font-weight: 300;
    color: $color-secondary;
  }

  .button-check {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.20);
    width: 36px;
    max-width: 36px;
    height: 36px;
    max-height: 36px;
    padding: 0;
  }

  .task-done {
    input.task-input {
      text-decoration: line-through;
      color: #cccccc;
    }
    .button-check {
      box-shadow: 0 0 10px 0 inset rgba(0, 0, 0, 0.20);
      background-color: #cccccc;
    }
  }

  #app-template {
    .header-main {
      margin-top: 28px;
      margin-bottom: 28px;
    }

    .app-content {
      background-color: #ed68a1;
      box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.15);
      max-width: 450px;
      min-height: 800px;
      margin: 0 auto;
      padding: 75px 0;
    }

    .add-task {
      margin-top: 28px;
      .button {
        background: #ffffff;
        border: 0;
        color: $color-secondary;
        padding: 20px;
        width: 100%;
        height: auto;
        text-transform: none;
        border-radius: 10px;
      }
    }
  }
</style>
