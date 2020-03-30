import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
      el: "#app",
      data: {
        tasks: [
          {description: "Buy shopping", priority: "low", hasDone: false},
          {description: "Clean bathroom", priority: "high", hasDone: true},
          {description: "Car's MOT", priority: "low", hasDone: false}
        ],
        newTask: ""
      },
      methods: {
        saveNewTask: function(){

          const taskInput = this.newTask.trim();
          if("" === taskInput){
            alert("Please input task description!");
            return null;
          }
          console.log(this.priorityPicked);
          if(this.priorityPicked === undefined){
            alert("Please choose task priority!");
            return null;
          }

          this.tasks.push({
            description: this.newTask,
            priority: this.priorityPicked,
            hasDone: false
          });
          this.newTask = "";
        },
        doneTask: function(index){
          this.tasks[index].hasDone = true;
        }
      }
    });
  });
  