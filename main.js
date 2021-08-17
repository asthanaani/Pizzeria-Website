menu_list_array = ["Tandoori Chicken Pizza",
   "Veg Deluxe Pizza" , "Paneer Tikka Pizza"  , "Veg Extravaganza Pizza"              ];
function getmenu(){
    var newItem = document.getElementById("add_item").value;
    menu_list_array.push(newItem);
    document.getElementById("display_new_menu").innerHTML = menu_list_array;
    document.getElementById("display_menu").innerHTML = newItem;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
        htmldata=""
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+imgtags+ menu_list_array[i]+'<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;		
      }

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}
