//Mob menu
(function () {
	let btnMenu = document.querySelector('.btn-menu'),
		menuItem = document.querySelectorAll('.menu-list__item');
	
	function hideMenu() {
		if (screen.width < 415) {
			for (i = 0; i < menuItem.length; i++) {
				menuItem[i].classList.add('menu-hidden');
			};
		} else if (screen.width >= 415) {
			for (i = 0; i < menuItem.length; i++) {
				menuItem[i].classList.remove('menu-hidden');
			};
		};
	};

	document.addEventListener('DOMContentLoaded', hideMenu());

	window.addEventListener('resize', function () {
		if (screen.width < 415) {
			for (i = 0; i < menuItem.length; i++) {
				menuItem[i].classList.add('menu-hidden');
			};
		} else if (screen.width >= 415) {
			for (i = 0; i < menuItem.length; i++) {
				menuItem[i].classList.remove('menu-hidden');
			};
		};
	});

	btnMenu.addEventListener('click', function (e) {
		for (i = 0; i < menuItem.length; i++) {
			menuItem[i].classList.toggle('menu-hidden');
		};
	});

})();

//scroll

(function () {
	let btnLink = document.querySelector('.link-more');

	
	
	btnLink.addEventListener('click', function (e) {
		window.scroll({
			top: window.innerHeight,
			behavior: "smooth"
		})
		
	})

	window.addEventListener('load', function () {
		console.log(screen.height)
	})
		
	
})();

// Filter
(function () {
	let controls = document.querySelector('.btn-filter'),
		btnReset = document.querySelector('.btn-reset'),
		items = document.querySelectorAll('[data-category]');
	
	btnReset.addEventListener('click', function (e) {

		for (i = 0; i < items.length; i++) {
			items[i].classList.remove('filter-hidden');
		};
	});
		
	controls.addEventListener('click', function (e) {
		let btnList = document.querySelectorAll('[data-filter]'),
				dBtn;
		
		for (i = 0; i < btnList.length; i++) {
			btnList[i].classList.remove('active');
		};

		if (e.target.tagName == 'BUTTON') {
			let btn = e.target;
			btn.classList.add('active');
			dBtn = btn.dataset.filter;

			for (i = 0; i < items.length; i++) {
				items[i].classList.remove('filter-hidden');
			};

			for (i = 0; i < items.length; i++) {
				let dItem = items[i].dataset.category;
				if (dBtn != dItem) {
					items[i].classList.add('filter-hidden');
				}
			};

		};
		
	});
})()