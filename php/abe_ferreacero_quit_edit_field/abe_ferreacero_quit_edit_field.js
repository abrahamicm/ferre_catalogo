jQuery(function ($) {
	var wp_inline_edit_function = inlineEditPost.edit;
	inlineEditPost.edit = function (post_id) {
		wp_inline_edit_function.apply(this, arguments);
		var id = 0;
		if (typeof (post_id) == 'object') {
			id = parseInt(this.getId(post_id));
		}
		if (id > 0) {
			var specific_post_edit_row = $('#edit-' + id)
			var specific_post_row = $('#post-' + id)
			var mts = $('.column-acf_mts', specific_post_row).text();
			var medida = $('.column-acf_medida', specific_post_row).text();
			var Ancho = $('.column-acf_Ancho', specific_post_row).text();
			var Largo = $('.column-acf_Largo', specific_post_row).text();
			var peso = $('.column-acf_peso', specific_post_row).text();
			var espesor = $('.column-acf_espesor', specific_post_row).text();
			var tipo = $('.column-acf_tipo', specific_post_row).text();

			$('input[name="mts"]', specific_post_edit_row).val(mts);
			$('input[name="medida"]', specific_post_edit_row).val(medida);
			$('input[name="Ancho"]', specific_post_edit_row).val(Ancho);
			$('input[name="Largo"]', specific_post_edit_row).val(Largo);
			$('input[name="peso"]', specific_post_edit_row).val(peso);
			$('input[name="espesor"]', specific_post_edit_row).val(espesor);
			$('input[name="tipo"]', specific_post_edit_row).val(tipo);

		}
	}
});

jQuery(function ($) {
	$('body').on('click', 'input[name="bulk_edit"]', function () {
		$(this).after('<span class="spinner is-active"></span>');
		var bulk_edit_row = $('tr#bulk-edit'),
			post_ids = new Array(),
			mts = bulk_edit_row.find('input[name="mts"]').val(),
			medida = bulk_edit_row.find('input[name="medida"]').val(),
			Ancho = bulk_edit_row.find('input[name="Ancho"]').val(),
			Largo = bulk_edit_row.find('input[name="Largo"]').val(),
			peso = bulk_edit_row.find('input[name="peso"]').val(),
			espesor = bulk_edit_row.find('input[name="espesor"]').val(),
			tipo = bulk_edit_row.find('input[name="tipo"]').val();

		bulk_edit_row.find('#bulk-titles').children().each(function () {
			post_ids.push($(this).attr('id').replace(/^(ttle)/i, ''));
		});
		$.ajax({
			url: ajaxurl,
			type: 'POST',
			data: {
				action: 'misha_save_bulk',
				post_ids: post_ids,
				mts,
				medida,
				Ancho,
				Largo,
				peso,
				espesor,
				tipo,
				nonce: $('#misha_nonce').val()
			}
		});
	});
});