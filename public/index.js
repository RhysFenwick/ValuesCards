
// Initialise buttons
var sort_button = document.getElementById("sort_button");
var reset_button = document.getElementById("reset_button");

var values_array = ["Value1","Value2","Value3","Value4","Value5","Value6"];
var val_list = document.getElementById("values_list");

//Make fields valid drag targets - maybe do this iteratively?
const dropHigh = document.getElementById("Importance_High");
dropHigh.addEventListener("dragenter", (event) => {
    event.preventDefault();
});
dropHigh.addEventListener("dragover", (event) => {
    event.preventDefault();
});
dropHigh.addEventListener("drop", (event) => {
    event.preventDefault();
    var data = event.dataTransfer.getData("text/plain");  
    document.getElementById(data).remove();
    create_tile(data,dropHigh);
});

const dropMed = document.getElementById("Importance_Med");
dropMed.addEventListener("dragenter", (event) => {
    event.preventDefault();
});
dropMed.addEventListener("dragover", (event) => {
    event.preventDefault();
});
dropMed.addEventListener("drop", (event) => {
    event.preventDefault();
    var data = event.dataTransfer.getData("text/plain");  
    document.getElementById(data).remove();
    create_tile(data,dropMed);
});

const dropLow = document.getElementById("Importance_Low");
dropLow.addEventListener("dragenter", (event) => {
    event.preventDefault();
});
dropLow.addEventListener("dragover", (event) => {
    event.preventDefault();
});
dropLow.addEventListener("drop", (event) => {
    event.preventDefault();
    var data = event.dataTransfer.getData("text/plain");  
    document.getElementById(data).remove();
    create_tile(data,dropLow);
});

// Location variable lets you move them from place to place
function create_tile(elm, loc) {
    var newElement = document.createElement('div');
    newElement.id = elm; 
    newElement.className = "value_card";
    newElement.textContent = elm;
    newElement.draggable = true;
    newElement.addEventListener("dragstart", function(event) {
        event.dataTransfer.setData("text/plain", elm)
      });
    loc.appendChild(newElement);
}

// Create new cards for each item in the array
for (i = 0; i < values_array.length; i++) {
    create_tile(values_array[i], val_list);
} 


dropHigh.addEventListener("drop", function(event) {
    // Prevent the default behavior and get the transferred data
    event.preventDefault();
    

  })

// Add an event listener to the sort button
sort_button.addEventListener("click", function() {
    // Check if there are values left
    if (document.getElementById("values_list").textContent !== "") {
        window.alert("Not all values are sorted!");
    }
    // Get all value cards, place them back in their starting spot, delete the old ones
    else {
        let elements = document.getElementsByClassName("value_card");
        Array.from(elements).forEach(function (element) {
            var txt = element.textContent;
            var par = element.parentElement.id;
            element.remove();
            if (par == "Importance_High") {
                create_tile(txt, val_list);
            }
        });
    }
});

// Add an event listener to the reset button
reset_button.addEventListener("click", function() {
    // This function will be executed when the button is clicked
    let elements = document.getElementsByClassName("value_card");
    Array.from(elements).forEach(function (element) {
        var txt = element.textContent;
        element.remove();
        create_tile(txt, val_list);
    });
});


 