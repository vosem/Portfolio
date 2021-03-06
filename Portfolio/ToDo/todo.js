$(document).ready(function(){

    function ToDo (){
        this.model = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')) : [
//            {text: 'defaultTask', status: 'active'},
//            {text: 'secondDefaultTask', status: 'done'},
        ];
        
        this.length = this.model.length;
        this.list = $('.list');
        this.inputField = $('#inputField');
        
        this.init = function(){
            this.renderModel();
            this.addTask();
            this.removeTask();
            this.raiseTask();
            this.comleteTask();
        };
    };

    ToDo.prototype.updateLocalStorage = function () {
        localStorage.setItem('todoList', JSON.stringify(__self.model));
    };
    
    ToDo.prototype.renderModel = function(){
        var i = 0;
        __self = this;
        __self.model.forEach(function(){
            var index = i+1;
            __self.list.append('<tr><td class="task" data-index="'+index+'">'+ index +'</td><td class="task"  data-index="'+index+'">' +__self.model[i].text+ '</td><td><input class="up" type="button" data-index="'+index+'" value="&#8593"/></td><td><input class="delete" type="button" data-index="'+index+'" value="x"/></td></tr>');
            if(__self.model[index-1].status == 'done'){
                $('td.task[data-index="'+index+'"]').toggleClass('done');
            }
            i++;
        });
    };
    
    ToDo.prototype.addTask = function(){
        __self = this;
        $('#inputButton').on('click', function(){
            var newTask = __self.inputField.val();    // alternative - document.forms["submitting"].elements["inputField"].value
            var index = __self.length + 1;
            __self.model.push({text: newTask, status: 'active'});
            __self.updateLocalStorage();
            __self.list.append('<tr><td class="task" data-index="'+index+'">'+index+'</td><td class="task" data-index="'+index+'">'+newTask+'</td><td><input class="up" type="button" data-index="'+index+'" value="&#8593"/></td><td><input class="delete" type="button" data-index="'+index+'" value="x"/></td></tr>');
            __self.length++;
            __self.inputField.val('');
            
        });        
    };
    
    ToDo.prototype.removeTask = function(){
        __self = this;
        $('.list').on('click', '.delete', function(){
            var index = $(this).data('index') - 1;
            __self.model.splice(index, 1);
            __self.length--;
            __self.list.html('');
            __self.renderModel();
            __self.updateLocalStorage();
        });
    };
    
    ToDo.prototype.raiseTask = function(){
        __self = this;
        $('.list').on('click', '.up', function(){
            var index = $(this).data('index') - 1;
            
            if (index === 0){
                alert('Oooops!');
            }
            else{
                var tempPrevElem = __self.model[index-1];
                __self.model[index-1] = __self.model[index];
                __self.model[index] = tempPrevElem;
                __self.updateLocalStorage();
                __self.list.html('');
                __self.renderModel();
            }
        });
    };
    
    ToDo.prototype.comleteTask = function(){
        __self = this;
        $('.list').on('click', '.task', function(){
            var index = $(this).data('index');
            $('td.task[data-index="'+index+'"]').toggleClass('done');
            if (__self.model[index-1].status == 'active'){
                __self.model[index-1].status = 'done';                
            } else{
                __self.model[index-1].status = 'active'; 
            }
            __self.updateLocalStorage();
        });
    };
    
    var toDo = new ToDo();  // window.todo = new ToDo(); ????
    toDo.init();            // window.todo = new ToDo(); ????
    
});

   //This is for generating URls
    var date = new Date();
    var time = date.getTime();
    var secs = new Date().getMilliseconds();
    console.log(time);
    console.log(secs);
    var coded = window.btoa(time);
    console.log(coded);
    var encoded = window.atob(coded);
    console.log(encoded);