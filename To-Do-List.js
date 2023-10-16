const input1 = document.getElementById("whatToDo");
const addButton = document.getElementById("addButton");
const divContainer = document.getElementById("items");

// var itemContainer = document.createElement("div")
// var items = document.createElement("p");
// var delButton = document.createElement ("button")
// var strikeButton = document.createElement ("button")
// var buttonContainer = document.createElement ("div")

// delButton.textContent = ("Delete")
// strikeButton.textContent = ("Strikethrough")

function addToList ()
{

    var itemContainer = document.createElement("div")
    var items = document.createElement("p");
    var delButton = document.createElement ("button")
    var strikeButton = document.createElement ("button")
    var buttonContainer = document.createElement ("div")

    delButton.textContent = ("Delete")
    strikeButton.textContent = ("Strikethrough")


    var input2 = input1.value;
    items.textContent = (input2);
    
    itemContainer.appendChild(items);
    itemContainer.appendChild(buttonContainer)
    buttonContainer.appendChild(delButton);
    buttonContainer.appendChild(strikeButton);

    // buttonContainer.style.display = "flex"
    // buttonContainer.style.justifyContent ="end"
    // buttonContainer.style.width = "fit-content"
    // buttonContainer.style.alignContent = "center"
    
    itemContainer.style.backgroundColor = "grey";
    itemContainer.style.textAlign = "left";
    buttonContainer.style.display = "flex"
    buttonContainer.style.justifyContent = "flex-end"
    
    delButton.addEventListener("click", () => 
    {
        itemContainer.remove();
    });

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

    items.style.textDecoration = "line-through"
    items.style.textDecoration = "none"

    items.style.display = "inline-block"
    itemContainer.style.minHeight = "20px"
    itemContainer.style.maxHeight = "100%"
    itemContainer.style.width = "100%"
    itemContainer.style.marginTop = "10px"
    itemContainer.style.border = "2px solid black"

    divContainer.appendChild(itemContainer)
}

addButton.addEventListener("click",addToList);

