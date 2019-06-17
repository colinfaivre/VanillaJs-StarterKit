export default function myComponent() {
    'use strict'

    const myComponentElement = document.getElementById('my-component')

    function kill() {
        myComponentElement.innerHTML = ''
    }

    function render() {
        myComponentElement.innerHTML =
        `
            <div class="nav-left">
                App title
            </div>
        `
        // Elements
        // Event listeners
    }

    return {
        kill: kill,
        render: render,
    }
}