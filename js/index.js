$(function() {
	// Set Coach Initial Img
	setCoachImg();

	// Set Curso/Para Todos 'alt' Img
	setCursoImg();
	setParaTodosImg();

	// Check SQI .card discount and if(.disabled)
	checkCard();

	// COACH Set 'collapse' <button> .active onclick / Flip '▲'
	$('#equipe .row > .col:not(:last-child) > .card').each(function(e) {
		let card = this;
		$('.card-footer button:first-child', card).click(function(e) {
			if($(this).hasClass('active')) {
				$(this).removeClass('active');
				$('.card-body > div:first-child', card).removeClass('toggled');
				$('.card-footer button.disabled > span', card).removeClass('rotated');
			} else {
				$(this).addClass('active');
				$('.card-body > div:first-child', card).addClass('toggled');
				$('.card-footer button.disabled > span', card).addClass('rotated');
			}
		});
	});

	// CURSOS Set 'collapse' <button> .active onclick / Flip '▲'
	$('#cursos .card').each(function(e) {
		let card = this;
		$('.card-header .text-right > button:nth-child(3)', card).click(function(e) {
			if($(this).hasClass('active')) {
				$(this).removeClass('active');
				$('.card-body', card).removeClass('toggled');
				$('.card-header button > span:last-child', card).removeClass('rotated');
			} else {
				$('#cursos .card .card-header .active').removeClass('active');
				$('#cursos .toggled').removeClass('toggled');
				$('#cursos .rotated').removeClass('rotated');
				$(this).addClass('active');
				$('.card-body', card).addClass('toggled');
				$('.card-header button > span:last-child', card).addClass('rotated');
			}
		});
	});

	// PARA-TODOS Set 'collapse' <button> .active onclick / Flip '▲'
	$('#para-todos > .container > .row:not(:last-of-type) .card').each(function(e) {
		let card = this;
		$('.card-header .text-right > a:last-of-type', card).click(function(e) {
			if($(this).hasClass('active')) {
				$(this).removeClass('active');
				$('.card-body', card).removeClass('toggled');
				$('.card-header a > span:last-child', card).removeClass('rotated');
			} else {
				$('#para-todos > .container > .row:not(:last-of-type) .card .card-header .active').removeClass('active');
				$('#para-todos .toggled').removeClass('toggled');
				$('#para-todos .rotated').removeClass('rotated');
				$(this).addClass('active');
				$('.card-body', card).addClass('toggled');
				$('.card-header a > span:last-child', card).addClass('rotated');
			}
		});
	});

	// CURSO set iframe onclick
	$('#cursos .card > .card-body u').click(function(e) {
		$('#curso-modal iframe').attr('src', $(this).attr('src'));
		$('#curso-modal').modal('show');
	});
	// CURSO stop video onmodalclose
	$('#curso-modal').on('hide.bs.modal', function(){
		$('iframe', this).attr('src', '');
	});
});

// COACH Set Img
function setCoachImg() {
	let id = 1;
	$('#equipe .row > .col:not(:last-child) > .card').each(function(e) {
		$('.card-body > img', this).attr('alt', $('.card-body p > span', this).text());
		$('.card-body > img', this).attr('src', '../img/coaches/img-nome-'+id+'.jpg');

		id += 1;
	});
};

// CURSOS Set Img 'alt'
function setCursoImg() {
	$('#cursos .container > .row').each(function(e) {
		$('> div img', this).attr('alt', $('> div > .card > .card-header h2', this).text());
	});
};

// PARA TODOS Set Img 'alt'
function setParaTodosImg() {
	$('#para-todos .container > .row').each(function(e) {
		$('> div img', this).attr('alt', $('> div > .card > .card-header h2', this).text());
	});
};

// SQI Check diff preço / .disabled state
function checkCard() {
	$('#sqi .sqi-planos .disponivel .card').each(function(e) {
		// Discount
		if($('.preco-inicial', this).text() != $('.preco-desconto', this).text()) {
			$('.preco-desconto', this).css('visibility', 'initial');
			$('.preco-inicial', this).css({
				'text-decoration': 'line-through',
				'font-weight': 'initial',
				color: 'red',
				opacity: 0.6
			});
			$(' > .sale', this).show();
		} else {
			$('.preco-desconto', this).css('visibility', 'hidden');
			$('.preco-inicial', this).css({
				'text-decoration': 'none',
				'font-weight': 'bold',
				color: 'inherit',
				opacity: 1
			});
			$('> .sale', this).hide();
		}

		// Disabled
		if($(this).hasClass('disabled')) {
			$('.card-header > span:first-child > i:last-of-type', this).attr('class', 'fas fa-lock fa-stack-1x fa-inverse');
			$('.card-footer > button', this).text('Em Breve');
		} else {
			$('.card-header > span:first-child > i:last-of-type', this).attr('class', 'fas fa-dollar-sign fa-stack-1x fa-inverse');
			$('.card-footer > button', this).text('Comprar');
		}
	});
};