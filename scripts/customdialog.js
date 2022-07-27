export function loadCustomAlertEvent() {
    const customAlertButton = document.getElementById('custom-alert-button');

    customAlertButton.addEventListener('click', () => {
        const dialogTemp = document.getElementById('custom-dialog-template');
        const dialogClone = dialogTemp.content.cloneNode(true);

        const cancelButton = dialogClone.getElementById('cancel-button');
        cancelButton.remove();
        const textLabel = dialogClone.getElementById('text-label');
        textLabel.remove();

        const dialogMessage = dialogClone.getElementById('dialog-message');
        dialogMessage.textContent = 'Alert pressed!';

        const okButton = dialogClone.getElementById('ok-button');
        okButton.addEventListener('click', () => {
            customDialog.close();
            customDialog.remove();
        });

        document.body.appendChild(dialogClone);

        const customDialog = document.getElementById('custom-dialog');
        customDialog.show();
    });
}

export function loadCustomConfirmEvent() {
    const customConfirmButton = document.getElementById('custom-confirm-button');
    const output = document.getElementById('output');

    customConfirmButton.addEventListener('click', () => {
        const dialogTemp = document.getElementById('custom-dialog-template');
        const dialogClone = dialogTemp.content.cloneNode(true);

        const textLabel = dialogClone.getElementById('text-label');
        textLabel.remove();

        const dialogMessage = dialogClone.getElementById('dialog-message');
        dialogMessage.textContent = 'Are you confirm this?';

        const okButton = dialogClone.getElementById('ok-button');
        okButton.addEventListener('click', () => {
            customDialog.close();
            customDialog.remove();
            output.textContent = 'The value returned by the confirm method is : true';
        });

        const cancelButton = dialogClone.getElementById('cancel-button');
        cancelButton.addEventListener('click', () => {
            customDialog.close();
            customDialog.remove();
            output.textContent = 'The value returned by the confirm method is : false';
        });

        document.body.appendChild(dialogClone);
        const customDialog = document.getElementById('custom-dialog');
        customDialog.show();
    });
}

export function loadCustomPromptEvent() {
    const customPromptButton = document.getElementById('custom-prompt-button');
    const output = document.getElementById('output');

    customPromptButton.addEventListener('click', () => {
        const dialogTemp = document.getElementById('custom-dialog-template');
        const dialogClone = dialogTemp.content.cloneNode(true);

        const dialogMessage = dialogClone.getElementById('dialog-message');
        dialogMessage.textContent = 'What is your name?';

        const input = dialogClone.getElementById('input');

        const okButton = dialogClone.getElementById('ok-button');
        okButton.addEventListener('click', () => {
            customDialog.close();
            customDialog.remove();

            let dirtyInput = input.value;
            if (!dirtyInput) {
                dirtyInput = 'User didn\'t enter anything';
            }
            output.innerHTML = `The value returned by the prompt method is : ${dirtyInput}`;
        });

        const cancelButton = dialogClone.getElementById('cancel-button');
        cancelButton.addEventListener('click', () => {
            customDialog.close();
            customDialog.remove();
            output.textContent = `The value returned by the prompt method is : User didn't enter anything`;
        });

        document.body.appendChild(dialogClone);
        const customDialog = document.getElementById('custom-dialog');
        customDialog.show();
    });
}

export function loadCustomSafePromptEvent() {
    const customSaferPromptButton = document.getElementById('custom-safer-prompt-button');
    const output = document.getElementById('output');

    customSaferPromptButton.addEventListener('click', () => {
        const dialogTemp = document.getElementById('custom-dialog-template');
        const dialogClone = dialogTemp.content.cloneNode(true);

        const dialogMessage = dialogClone.getElementById('dialog-message');
        dialogMessage.textContent = 'What is your name?';

        const input = dialogClone.getElementById('input');

        const okButton = dialogClone.getElementById('ok-button');
        okButton.addEventListener('click', () => {
            customDialog.close();
            customDialog.remove();

            let dirtyInput = input.value;
            if (!dirtyInput) {
                dirtyInput = 'User didn\'t enter anything';
            } else {
                dirtyInput = DOMPurify.sanitize(dirtyInput);
            }
            output.innerHTML = `The value returned by the safer prompt method is : ${dirtyInput}`;
        });

        const cancelButton = dialogClone.getElementById('cancel-button');
        cancelButton.addEventListener('click', () => {
            customDialog.close();
            customDialog.remove();
            output.textContent = `The value returned by the safer prompt method is : User didn't enter anything`;
        });

        document.body.appendChild(dialogClone);
        const customDialog = document.getElementById('custom-dialog');
        customDialog.show();
    });
}

// document.addEventListener("DOMContentLoaded", () => {
//     loadCustomAlertEvent();
//     loadCustomConfirmEvent();
//     loadCustomPromptEvent();
//     loadCustomSafePromptEvent();
// });