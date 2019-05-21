const selectElement = document.querySelector('.OptionsLeft');

selectElement.addEventListener('change', (event) => {
    const result = document.querySelector('.resultLeft');
    result.textContent = ${ event.target.value };
});