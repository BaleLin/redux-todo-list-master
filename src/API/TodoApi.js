  import {addTodo, changeCheck} from "../actions";
 const axios = require('axios');

 const todoApi = {
     todoObject:{
         todos:[],
         status:"all"
     },
     filterTodos(){
         let todos = this.todoObject.todos;
         let status = this.todoObject.status;
         if(status == 'all'){
             let afeterHandleTodos = todos;
             return {afeterHandleTodos,status};
         }else if(status == 'active'){
             let afeterHandleTodos = todos.filter(item => item.isComplete===false)
             return {afeterHandleTodos,status}
         }else{
             let afeterHandleTodos = todos.filter(item => item.isComplete===true)
             return {afeterHandleTodos,status}
         }
     },
     updateServerDAta(){
     let slef = this;
     slef.todoObject.todos = [{id:1,content:"nihao",isComplete:true}]
//        axios.get('http://5b530805d9b92700141c9abf.mockapi.io/apiv1/todo')
//          .then(function (response) {
//            slef.todoObject.todos=response.data;
//            console.log(slef.todoObject.todos);
//            this.updateServerDAta();
//             console.log(this.todoObject.todos);
//          })
//          .catch(function (error) {
//            // handle error
//            console.log(error);
//          })
//          .then(function () {
//            // always executed
//          });
     },
     addItem(item,dispatch){
//       axios.post('http://5b530805d9b92700141c9abf.mockapi.io/apiv1/todo', {
//         content: item.content,
//         isComplete: item.isComplete
//       })
//       .then(function (response) {
//        // console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });

       // this.todoObject.todos.push(item);
         this.updateServerDAta();
         console.log("查询添加"+JSON.stringify(this.todoObject.todos));
         dispatch(addTodo(this.filterTodos()));
        ;
     },
     toggleActive(viewId){
         this.todoObject.todos.forEach(item=>{
            if(item.id==viewId){
               item.isComplete=!item.isComplete;
            }
        });
           return this.filterTodos();
     },
     changeStatus(status){
         this.todoObject.status = status;
        return this.filterTodos();
     },
     updateItem(viewId,name){
         console.log(viewId);
         console.log(name);
         this.todoObject.todos.forEach(item=>{
             if(item.id==viewId){
                 item.content=name;
                 console.log("改变后的"+name);
             }
         });

         return this.filterTodos();
     }

}
 export default todoApi;