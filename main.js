for(let i = 0 ; i < 256; i++) {
    const div = document.createElement("div");
    const container = document.querySelector("#container");
    div.id = `div${i}`;
    container.appendChild(div);
}