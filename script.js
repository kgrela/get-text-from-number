const text = [];
text.push("text_1", "text_2", "text_3");

function getText(form) {
    var number = document.getElementById("number").value;
    var result = document.getElementById("result");
    //alert(text[number - 1]);
    result.innerHTML = text[number - 1];
    return false;
}