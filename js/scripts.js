const $form = document.querySelector('#form');
const $buttonMailto = document.querySelector('#mailForm');

$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this);
    $buttonMailto.setAttribute("href", `mailto:jhcatc@gmail.com?subject=Nombre: ${form.get('name')} Mobil: ${form.get('mobil')} Email: ${form.get('email')}&body=${form.get('message')}`);
    $buttonMailto.click();
}
// 