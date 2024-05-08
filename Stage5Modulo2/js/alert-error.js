export const alertError = {
    alert: document.querySelector('.alert-error'),

    open() {
        alertError.alert.classList.add('open')
    }, 
    close() {
        alertError.alert.classList.remove('open')
    }
}