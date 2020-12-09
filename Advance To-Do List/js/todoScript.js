var typed = new Typed('.blink', {
    strings: ["Entr Your", "Eter Your TODO List.", "Enter Your TODO List"],
    typeSpeed: 40
});


var add = document.getElementById("add");
var removeAll = document.getElementById("removeall");
var list = document.getElementById("list");

// Remove all button..
removeAll.onclick = function() {
    list.innerHTML = "";
}

// Adding a new list element..
add.onclick = function() {
    addList(list);
    document.getElementById("userinput").value = "";
    document.getElementById("userinput").focus();
}

function addList(targetUl) {
    var inputText = document.getElementById("userinput").value;
    var li = document.createElement("li");
    var textNode = document.createTextNode(inputText + " ");
    var removeButton = document.createElement("button");

    if (inputText !== "") {
        removeButton.className = "btn btn-xs btn-danger";
        removeButton.innerHTML = " &times; ";
        removeButton.setAttribute("onclick", "removeMe(this)");

        li.appendChild(textNode);
        li.appendChild(removeButton);
        targetUl.appendChild(li);
    }else {
        alert("Please Enter A TODO");
    }
}
function removeMe(item){
    var p = item.parentElement;
    p.parentElement.removeChild(p);     
}

























