
function addItem() {
    var item = document.getElementById("name").value;
    var html = "<li>" + item + "</li>";
    html=document.getElementById("content").innerHTML +html;
    document.getElementById("content").innerHTML=html;
    remove();

}
function remove() {
    function removeItem() {
        this.remove();
    }
    var itemList = document.getElementsByTagName("li");
    for(var i=0; i<itemList.length; ++i) {
        itemList[i].addEventListener("click",removeItem);
    }

}
remove();
