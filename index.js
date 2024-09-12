document.getElementById('btn-contraste').addEventListener('click', function() {
    document.body.classList.add('contraste');
});

document.getElementById('btn-normal').addEventListener('click', function() {
    document.body.classList.remove('contraste');
});