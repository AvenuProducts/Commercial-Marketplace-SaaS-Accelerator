
const modalEl = document.getElementById('myModal');
if (modalEl && window.bootstrap) {
    const myModal = bootstrap.Modal.getOrCreateInstance(modalEl);
    setTimeout(() => {
        myModal.hide();
    }, 1000);
}

//document.querySelector('.btn-close').addEventListener('click', () => {
//    myModal.hide();
//});
