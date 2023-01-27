function danhgia(){
event.preventDefault();
var name = document.getElementById('name').value;
var comment = document.getElementById('comment').value;
var json = JSON.stringify(comment);
localStorage.setItem("danhgia_of_"+name, json);

}
function dark(){
    event.preventDefault();
    var code = document.getElementById('codes').value;
    if (code == "HTT210"){
        alert("Yes, correct");
        window.location.href="dark-web.html";
    }else alert("incorrect");
}