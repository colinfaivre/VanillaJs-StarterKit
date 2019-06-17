export default function myPage(myPageData) {
    'use strict'

    const myPageElement = document.getElementById('my-page')

    function kill() {
        myPageElement.innerHTML = ''
    }

    function render(myPageData) {
        myPageElement.innerHTML = 
        `
            <h1 id="my-page-inner-element">My page</h1>
        `
        // Inner elements
        const myPageInnerElement = document.getElementById('my-page-inner-element')
        // Event listeners
        myPageInnerElement.addEventListener('click', myPageInnerFunction)
    }

    function myPageInnerFunction() {
        console.log('function called successfully !')
    }

    return {
        kill: kill,
        render: render,
    }
}