export const myPage = {
    myPageElement: document.getElementById('my-page'),

    kill: () => {
        myPage.myPageElement.innerHTML = ''
    },

    render: (myPageData) => {
        myPage.myPageElement.innerHTML = 
        `
            <h1 id="my-page-inner-element">My page</h1>
        `
        // Inner elements
        const myPageInnerElement = document.getElementById('my-page-inner-element')
        // Event listeners
        myPageInnerElement.addEventListener('click', myPage.myPageInnerFunction)
    },

    myPageInnerFunction: () => {
        console.log('function called successfully !')
    }
}