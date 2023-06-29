const popupLinks = document.querySelector('.popup-link');//Кнопка для открытия
const body = document.querySelector('body');//блокируем скролл
const lockPadding = document.querySelectorAll(".lock-padding");//адекватная работа скролла

let unclock = true;

const timeout = 800;





if (popupLinks.length>0) {
	for (let i = 0;i<popupLinks.length;i++) {
		const popupLink = popupLinks[i];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#','');
			const curentPopup = document.getElementById('popupName');
			popupOpen('curentPopup');
			e.preventDefault();
		});
	}
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length>0) {
	for (let i=0;i<popupCloseIcon.length;i++) {
		const el = popupCloseIcon[i];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

function popupOpen(curentPopup) {
	if (curentPopup && unclock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive,false);
		}
		else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener("click", function(e) {
			if (!e.target.closest('.popup')) {

			}
		});
	}
}

function popupClose(popupActive, doUnlock = true) {
	if (unclock) {
		popupActive.classList.remove('open');
		if (doUnclock) {
			bodyLock();
		}
	}
}



