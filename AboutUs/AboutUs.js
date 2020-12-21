
window.onload = init;

function init() {
	var button = document.getElementById("button");
    button.onclick = buttonClickHandler;
}

function buttonClickHandler() {
  var textInput = document.getElementById("textInput");
  var textInput2 = document.getElementById("textInput2");
  var textInput3 = document.getElementById("textInput3");
    var catName = textInput.value;
    var catName2 = textInput2.value;
    var catName3 = textInput3.value;
	// если строка пустая
	if(catName == "" && catName2 == "" && catName3 == "" ) {
		alert("Заполните все поля");
	}else {
        //alert("Добавлен " + catName);
    var li = document.createElement("div");
    li.classList.add("divName")
        li.innerHTML = catName+" "+catName2;
    var li2 = document.createElement("div");
    li2.classList.add("divReview")
        li2.innerHTML = catName3;
		var ul = document.getElementById("catList");
        ul.appendChild(li);
        var ul = document.getElementById("catList");
        ul.appendChild(li2);  
    textInput.value = "";
    textInput2.value = "";
    textInput3.value = "";
    }
}


