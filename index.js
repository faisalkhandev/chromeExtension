let myLeads = [];
let inputValue = document.getElementById("inputValue");
let saveBtn = document.getElementById("saveButton");
let ul = document.getElementById("ul-el");
let clearBtn = document.getElementById("clearButton")
let saveTabs = document.getElementById("saveTabs")

let leadStorage = JSON.parse(localStorage.getItem("myLeads")) //getting stored values in Local Storage
let listItems = "";


saveTabs.addEventListener("click", () => {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        let currentUrl = tabs[0].url;
        const maxLength = 20;
        if (currentUrl.length > maxLength) {
            currentUrl = currentUrl.substring(0, maxLength) + ".....";
        }
        myLeads.push(currentUrl);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        renderData(myLeads);
    });
});

let renderData = (lead) => {
    listItems = ""; // reset listItems to avoid duplicates
    for (let i = 0; i < lead.length; i++) {
        listItems += `
        <li>
            <a target="_blank" href="${lead[i]}">${lead[i]}</a>
        </li>`
    }
    ul.innerHTML = listItems;
};

if (leadStorage) {
    myLeads = leadStorage
    renderData(myLeads)
}

saveBtn.addEventListener("click", () => {
    let lead = inputValue.value.trim(); // remove any leading or trailing whitespace
    if (lead === "") {
        return;
    }
    if (myLeads.includes(lead)) { // check if lead already exists 
        alert("This lead already exists.");
    } else {
        myLeads.push(lead);
        inputValue.value = "";
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderData(myLeads);
    }
});

clearBtn.addEventListener("dblclick", () => {
    localStorage.clear()
    myLeads = []
    renderData(myLeads)
});
