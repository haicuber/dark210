function send(){
    var tr = document.getElementsByTagName('input');
    var com = tr[0].value;
    const ois = (1 , 2 , 3 , 4 , 5);
    if (com == "" ){
        alert("Lỗi: Nothing is in this box");
        alert("Hãy Đánh Giá Bằng Số Sao Từ 1 Đến 5");
    }
    if (com ==1 || com == 2 || com ==3 || com == 4 || com ==5){
        confirm("Bạn Có Chắc Với Đánh Giá Của Bạn?");
    }
}
