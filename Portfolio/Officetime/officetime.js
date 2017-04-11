// Tabs_unit
var tabsArray = document.getElementsByTagName('dt');
var ddArray = document.getElementsByTagName('dd');
for(var i=0; i < tabsArray.length; i++){
    tabsArray[i].onclick = function(){
        for(var m = 0; m < tabsArray.length; m++){
            tabsArray[m].style.borderBottom = 'solid 1px rgb(229, 229, 229)';
            tabsArray[m].style.background = 'linear-gradient(to bottom, rgb(253,253,253), rgb(248,248,248)';
            tabsArray[m].style.color = 'rgb(153, 153, 153)';
            ddArray[m].style.display = 'none';
        }
        this.style.borderBottom = 'solid 1px #fafafa';
        this.style.background = 'white';
        this.style.color = 'rgb(102, 102, 102)'
        var index = [].indexOf.call(tabsArray, this);
        ddArray[index].style.display = 'block';
    };
}