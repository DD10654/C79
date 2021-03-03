menu_list_array=[
    "Chicken Tandoori Pizza",
    "Deluxe Veggie Pizza",
    "Paneer Tikka Pizza",
    "Sweet Corn Pizza",
    "Veg Extravaganza Pizza",
    "Veg Supreme Pizza"
];

function getmenu(){
    var htmldata;
    htmldata = "<ol class='menu_list'>"
        menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata = htmldata + '<li>' + menu_list_array[i] + '</li>'
        }
        htmldata = htmldata+"</ol>"
        document.getElementById("menu_to_display1").innerHTML = htmldata;
}

function add_item() {
    var htmldata;
    var item = document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata = "<section class='cards'>"
    for(var i=0; i<menu_list_array.length;i++){
        htmldata = htmldata+'<div class="card">' + '<img src="pizzaImg.png"/>' + menu_list_array[i] + '</div>'
    }
    htmldata = htmldata="</section>"
    document.getElementById("cards").innerHTML = htmldata;
}