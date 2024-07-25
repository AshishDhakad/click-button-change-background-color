

var btn = document.querySelectorAll("button");

btn.forEach(function(btn) {

btn.addEventListener('click',function(){
    var color = btn.textContent;  
        document.body.style.backgroundColor = color;
});

})