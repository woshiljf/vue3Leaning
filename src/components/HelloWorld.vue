<template>

  
  <div>
     
     <h1>hellow vue3</h1> 

         <form action="" method="post">

     <label for="numberId">学号：</label>
    <input type="text" id="numberId" v-model="state.data.id">

    
     <label for="name">姓名：</label>
    <input type="text" id="name" v-model="state.data.name">

    
     <label for="age">年龄：</label>
    <input type="text" id="age" v-model="state.data.age">
    <input type="submit" value="提交" @click="addData">

      
      
    </form>

    
    <ul>

    
      <li v-for="(item) in state.todoList" :key="item.id">
          
        <span>{{item.name}}</span>------
        <span>{{item.age}}</span>

      </li>
     

   </ul>



     <!-- <button @click="add">添加</button> -->
     <h1>{{total}}</h1>

  </div>



</template>

<script>
import {reactive,ref,computed} from 'vue'
import addMethod from '../acitonMehods/addMethod'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  setup(){
   
   var {addData,total,state} = addMethod()

   return {
      addData,
      state,
      total
   }
    
    
    
  }




}
</script>
