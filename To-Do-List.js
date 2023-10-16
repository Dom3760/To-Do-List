// making vaiables to get the input, the add button, and div container
const input1 = document.getElementById("whatToDo");
const addButton = document.getElementById("addButton");
const divContainer = document.getElementById("items");

//function to add things to list.
function addToList ()
{
    //variables to make a div, p element, button's and a container for the button's
    var itemContainer = document.createElement("div")
    var items = document.createElement("p");
    var strikeButton = document.createElement ("button")
    var delButton = document.createElement ("button")
    var buttonContainer = document.createElement ("div")

    //making text for button's
    delButton.textContent = ("Delete")
    strikeButton.textContent = ("Finished")

    //making a variable for input so that the input is put in div
    var input2 = input1.value;
    items.textContent = (input2);
    //styling for the text put on list
    items.classList.add("items")

    //if the value of input2 is nothing then it will terminate the current function (doesn't work on higher line for some reason).
    if (input2 === "")
    {
        return;
    }
    
    // styling for the items in list and buttons, as well as make children elements to the main div container that holds the item's.
    itemContainer.appendChild(items);
    itemContainer.appendChild(buttonContainer)
    itemContainer.classList.add("item-container");

    buttonContainer.appendChild(delButton);
    buttonContainer.appendChild(strikeButton);
    
    buttonContainer.classList.add("button-Container")
    delButton.classList.add("del-button")
    strikeButton.classList.add("strike-Button")
    
    //if the delete button is pressed then the function runs deleteing the div.
    delButton.addEventListener("click", () => 
    {
        itemContainer.remove();
    });

    // if the finished button is pressed then it will give the text a strike through it, and if it is pressed again then it will un strike it.
    strikeButton.addEventListener ("click", () =>
    {
        if (items.style.textDecoration === "line-through")
            {
                items.style.textDecoration = "none"
            }
        else
        {
            items.style.textDecoration = "line-through"
        }
    })

    // makes a div for all items to fit inside
    divContainer.appendChild(itemContainer)
}
//listens for a click on the add to list button, if clicked then it will add input to the list.
addButton.addEventListener("click",addToList);

