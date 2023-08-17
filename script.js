document.addEventListener('DOMContentLoaded', () => {
    const saveButton = document.getElementById('save-button');
    const entryTextarea = document.getElementById('entry');
    const entriesList = document.getElementById('entries');

    saveButton.addEventListener('click', () => {
        const entryText = entryTextarea.value;
        if (entryText.trim() !== '') {
            const entryElement = document.createElement('div');
            entryElement.classList.add('entry');
            entryElement.textContent = entryText;
            entriesList.appendChild(entryElement);
            entryTextarea.value = '';
        }
    });
});
