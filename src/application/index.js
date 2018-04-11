(function() {
    const loginForm = document.querySelector('[data-loginForm]');
    const welcomeBox = document.querySelector('[data-welcomeBox]');
    const loginName = document.querySelector('[data-loginName]');
    const welcomeName = document.querySelector('[data-welcomeName]');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        hideElement(loginForm);
        showElement(welcomeBox);
        welcomeName.innerText = loginName.value;
    });

    function hideElement(element) {
        element.classList.add('hidden');
    }

    function showElement(element) {
        element.classList.remove('hidden');
    }
})();