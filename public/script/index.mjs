/**
 * Roll a die with the given number of sides and return the result.
 *
 * @param {number} sides
 */
function roll(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

(function() {
    const output = document.querySelector('#output');
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        if (form.action.includes('roll')) {
            form.addEventListener('submit', event => {
                event.preventDefault();
                const input = form.querySelector('input');
                const sides = input?.value;
                if (!sides) {
                    return;
                }
                const result = roll(+sides);
                if (!output) {
                    return;
                }
                const div = document.createElement('div');
                output.appendChild(div);
                const image = document.createElement('img');
                image.src = `/icons/dice/D${sides}.png`;
                const innerDiv = document.createElement('div');
                innerDiv.textContent = `${result}`;
                div.appendChild(image);
                div.appendChild(innerDiv);
                if (output.children.length > 8) {
                    output.removeChild(output.children[0]);
                }
                output.appendChild(div);
            });
        }
    });
})();
