document.getElementById('but').onclick = ()=> {
    document.getElementById('tittle_h').classList.remove('show');
    document.getElementById('but2').classList.remove('show');
    document.getElementById('but').classList.add('show');
}

document.getElementById('but2').onclick = ()=> {
    document.getElementById('tittle_h').classList.add('show');
    document.getElementById('but2').classList.add('show');
    document.getElementById('but').classList.remove('show');
}
