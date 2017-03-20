$(document).ready(function(){

    function ToDo (){
        this.model = [
//            {text: 'defaultTask'},
//            {text: 'secondDefaultTask'},
        ];
        
        this.length = this.model.length;
        this.list = $('.list');
        this.inputField = $('#inputField');
        
//        this.init = function(){
//        
//        };
    };

    ToDo.prototype.addTask = function(){
        __self = this;
        $('#inputButton').on('click', function(){
            var newTask = __self.inputField.val();    // alternative - document.forms["submitting"].elements["inputField"].value
            var index = __self.length + 1;
            __self.model.push({text: newTask});
            __self.list.append('<tr><td>'+index+'</td><td>'+newTask+'</td><td><input class="up" type="button" data-index="'+index+'" value="&#8593"/></td><td><input class="delete" type="button" data-index="'+index+'" value="x"/></td></tr>');
            __self.length++;
            __self.inputField.val('');
        });
    };
    
    ToDo.prototype.renderModel = function(){
        var i = 0;
        __self = this;
        __self.model.forEach(function(){
            var index = i+1;
            __self.list.append('<tr><td>'+ index +'</td><td>' +__self.model[i].text+ '</td><td><input class="up" type="button" data-index="'+index+'" value="&#8593"/></td><td><input class="delete" type="button" data-index="'+index+'" value="x"/></td></tr>');
            i++;
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
        });
    };
    
    ToDo.prototype.raiseTask = function(){
        __self = this;
        $('.list').on('click', '.up', function(){
            var index = $(this).data('index') - 1;
            
            if (index == 0){
                alert('Oooops!');
            }
            else{
                var tempPrevElem = __self.model[index-1];
                delete __self.model[index-1];
                __self.model[index-1] = __self.model[index];
                delete __self.model[index];
                __self.model[index] = tempPrevElem;

                __self.list.html('');
                __self.renderModel();
            }
        });
    };
  
    
    var toDo = new ToDo();  // window.todo = new ToDo(); ????
//    toDo.init();            // window.todo = new ToDo(); ????
    toDo.addTask();
    toDo.removeTask();
    toDo.raiseTask();
//    toDo.renderModel();
    
});