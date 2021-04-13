
function addItem() {
    var item = document.getElementById("name").value;
    if(!item) {
        alert("Please enter some task");
    }
    else {
        var html = "<li><input type='checkbox' class='check'>" + item + "<span class='trbtn'><i class='fas fa-trash'></i></span></li>";
        html=document.getElementById("content").innerHTML +html;
        document.getElementById("content").innerHTML=html;
        document.getElementById("name").value = null;
        remove();
    }
}
function remove() {
    function removeItem() {
        this.parentElement.remove();
    }
    var itemList = document.getElementsByClassName("trbtn");
    for(var i=0; i<itemList.length; ++i) {
        itemList[i].addEventListener("click",removeItem);
    }

}
remove();


