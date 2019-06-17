export const myComponent = {
    myComponentElement: document.getElementById('my-component'),
    kill: () => {
        myComponent.myComponentElement.innerHTML = ''
    },
    render: () => {
        myComponent.myComponentElement.innerHTML =
        `
            <div class="nav-left">
                App title
            </div>
        `
        // Elements
        // Event listeners
    }
}