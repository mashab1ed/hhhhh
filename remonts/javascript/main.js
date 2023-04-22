

    let old;

document.querySelector('.kviz__mebel').addEventListener('click',e => {
	if (e.target.classList.contains('kviz__mebel-item')) {
    	if (old) old.style.background = '';
    	old = e.target;
    	e.target.style.background = '#2C79FF';
    }
});




