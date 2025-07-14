const button = document.querySelector("button");

button.addEventListener("click", () => {
    let input = prompt("Enter a desired grid size from 1 to 100");
    if (input === null) return;
    let value = Number(input);
    while (isNaN(value) || value < 1 || value > 100) {
        input = prompt("Invalid input. Please enter a numeric value between 1 and 100");
        if (input === null) return;
        value = Number(input);
    };
    generateGrid(value);
});

const container = document.querySelector("#container");

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function generateGrid(size) {
    clearGrid();

    const totalDivs = size * size;
    const squareSize = 100 / size;

    for (let i = 0; i < totalDivs; i++) {
        const div = document.createElement('div');
        div.style.flex = `0 0 ${squareSize}%`;
        div.style.aspectRatio = '1 / 1';
        container.appendChild(div);

        div.addEventListener("mouseenter", () => {
            let rgb;

            if (!div.rgb) {
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                rgb = [r, g, b];
            } else {
                rgb = div.rgb.map(value => Math.max(0, Math.floor(value * 0.9)));
            }

            div.rgb = rgb;
            div.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
        });
    };
};

generateGrid(16);
