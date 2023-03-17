let myLeads = [];
let inputValue = document.getElementById("inputValue");
let saveBtn = document.getElementById("saveButton");
let ul = document.getElementById("ul-el");
let clearBtn = document.getElementById("clearButton")

let leadStorage = JSON.parse(localStorage.getItem("myLeads")) //getting stored values in Local Storage
let listItems = "";


let renderData = () => {
    listItems = ""; // reset listItems to avoid duplicates
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
        <li>
        
        <a target="_blank" href="${myLeads[i]}">  ${myLeads[i]} 

        </li>`
    }
    ul.innerHTML = listItems;
};

if (leadStorage) {
    myLeads = leadStorage
    renderData()
}



if (myLeads.includes(lead)) { // check if lead already exists 
    alert("This lead already exist.");
}
else {
    myLeads.push(lead);
    inputValue.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderData();
}

});

clearBtn.addEventListener("dblclick", () => {
    localStorage.clear()
    myLeads = []
    renderData()
})