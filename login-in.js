function signup(){
    var username = document.getElementById("username").value;   
    var password = document.getElementById("password").value;
    var user = {
        username : username,
        password : password,
    };
    var json = JSON.stringify(user);
    localStorage.setItem(username,json);
    alert("THANH CONG=3")
}
function login(){
    event.preventDefault()
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if (user == null){
        alert("hãy nhập lại tk, mk chớ nó sai r")
    
    }else if (username == data.username && password == data.password){
        alert("CHÚC MỪNG ĐĂNG NHẬP THÀNH CÔNG=')")
        window.location.href="anime-web.html"
    }
}
