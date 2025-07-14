const container = document.querySelector("#container");

for(let i = 0 ; i < 256; i++) {
    const div = document.createElement("div");
    div.id = `div${i}`;
    container.appendChild(div);
    
    div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = "blue";
    })
}

const button = document.querySelector("button");

button.addEventListener("click", () => {
    let value = prompt("Enter a desired grid size from 1 to 100");
})