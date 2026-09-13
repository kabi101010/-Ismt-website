/* ==========================================================
   ISMT Website — Shared JavaScript
   Handles: mobile menu, active nav link, sticky navbar,
   scroll animations, back-to-top button, countdown timer,
   and basic contact/newsletter form validation.
   ========================================================== */

$(function () {

	/* ---------- Mobile menu toggle ---------- */
	$('#menu-btn').on('click', function () {
		$('nav .navigation ul').addClass('active');
	});

	$('#menu-close').on('click', function () {
		$('nav .navigation ul').removeClass('active');
	});

	// Close the mobile menu automatically once a link is tapped
	$('nav .navigation ul li a').on('click', function () {
		$('nav .navigation ul').removeClass('active');
	});


	/* ---------- Highlight the current page in the nav ---------- */
	(function highlightActiveLink() {
		var currentPage = window.location.pathname.split('/').pop() || 'index.html';

		$('nav .navigation ul li a').each(function () {
			var linkPage = $(this).attr('href');
			$(this).removeClass('active');
			if (linkPage === currentPage) {
				$(this).addClass('active');
			}
		});
	})();


	/* ---------- Sticky navbar shadow on scroll ---------- */
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 10) {
			$('nav').addClass('scrolled');
		} else {
			$('nav').removeClass('scrolled');
		}

		toggleBackToTop();
	});


	/* ---------- Back-to-top button ---------- */
	function toggleBackToTop() {
		if ($(window).scrollTop() > 400) {
			$('#back-to-top').addClass('show');
		} else {
			$('#back-to-top').removeClass('show');
		}
	}

	$('#back-to-top').on('click', function () {
		$('html, body').animate({ scrollTop: 0 }, 500);
	});


	/* ---------- Smooth scroll for in-page anchor links ---------- */
	$('a[href^="#"]').on('click', function (e) {
		var target = $(this).attr('href');
		if (target.length > 1 && $(target).length) {
			e.preventDefault();
			$('html, body').animate({
				scrollTop: $(target).offset().top - 80
			}, 500);
		}
	});


	/* ---------- Fade-in-on-scroll animation ---------- */
	var animatedSelectors = 'section, .fea-box, .courses, .profile, .footer-col';
	var $animatedItems = $(animatedSelectors);
	$animatedItems.addClass('reveal');

	function revealOnScroll() {
		var windowBottom = $(window).scrollTop() + $(window).height();

		$animatedItems.each(function () {
			var top = $(this).offset().top;
			if (windowBottom > top + 60) {
				$(this).addClass('reveal-visible');
			}
		});
	}

	$(window).on('scroll resize', revealOnScroll);
	revealOnScroll(); // run once on load so above-the-fold content shows immediately


	/* ---------- Registration countdown timer (index page) ---------- */
	var $countdown = $('#registration .time');
	if ($countdown.length) {
		// Counts down to 18 days from whenever the page is first loaded
		var countdownTarget = new Date().getTime() + (18 * 24 * 60 * 60 * 1000);

		var timer = setInterval(function () {
			var now = new Date().getTime();
			var distance = countdownTarget - now;

			if (distance < 0) {
				clearInterval(timer);
				$countdown.find('.date').html('00');
				return;
			}

			var days = Math.floor(distance / (1000 * 60 * 60 * 24));
			var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);

			var pad = function (n) { return n < 10 ? '0' + n : n; };

			var $dates = $countdown.find('.date');
			$($dates[0]).html(pad(days) + ' <br> Days');
			$($dates[1]).html(pad(hours) + ' <br> Hours');
			$($dates[2]).html(pad(minutes) + ' <br> Minutes');
			$($dates[3]).html(pad(seconds) + ' <br> Seconds');
		}, 1000);
	}


	/* ---------- Simple form validation helper ---------- */
	function showFieldMessage($form, message, isSuccess) {
		var $msg = $form.find('.form-message');
		if (!$msg.length) {
			$msg = $('<p class="form-message"></p>');
			$form.append($msg);
		}
		$msg.text(message)
			.css('color', isSuccess ? 'green' : 'crimson')
			.css('font-size', '.9rem')
			.css('margin-top', '10px');
	}

	function isValidEmail(email) {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	}

	/* ---------- Registration form (index page) ---------- */
	$('#registration .form .btn a').on('click', function (e) {
		e.preventDefault();
		var $form = $(this).closest('.form');
		var name = $form.find('input[type="text"]').eq(0).val().trim();
		var email = $form.find('input[type="email"]').val().trim();
		var phone = $form.find('input[type="text"]').eq(1).val().trim();

		if (!name || !email || !phone) {
			showFieldMessage($form, 'Please fill in all fields.', false);
			return;
		}
		if (!isValidEmail(email)) {
			showFieldMessage($form, 'Please enter a valid email address.', false);
			return;
		}

		showFieldMessage($form, 'Thanks! Your free account request has been received.', true);
		$form.find('input').val('');
	});

	/* ---------- Contact page form ---------- */
	$('#contact .form button').on('click', function (e) {
		e.preventDefault();
		var $form = $(this).closest('.form');
		var name = $form.find('input').eq(0).val().trim();
		var email = $form.find('input').eq(1).val().trim();
		var subject = $form.find('input').eq(2).val().trim();
		var messageText = $form.find('textarea').val().trim();

		if (!name || !email || !subject || !messageText) {
			showFieldMessage($form, 'Please fill in every field before sending.', false);
			return;
		}
		if (!isValidEmail(email)) {
			showFieldMessage($form, 'Please enter a valid email address.', false);
			return;
		}

		showFieldMessage($form, 'Message sent! We will get back to you shortly.', true);
		$form.find('input, textarea').val('');
	});

	/* ---------- Newsletter subscribe (footer, all pages) ---------- */
	$('.subscribe a').on('click', function (e) {
		e.preventDefault();
		var $box = $(this).closest('.subscribe');
		var $input = $box.find('input[type="email"]');
		var email = $input.val().trim();

		if (!isValidEmail(email)) {
			$input.css('border', '1px solid crimson');
			return;
		}

		$input.css('border', '1px solid green').val('');
		alert('Thanks for subscribing! 🎉');
	});

});
