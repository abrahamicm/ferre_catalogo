<?php

/**
 * Plugin Name:abe_ferreacero_quit_edit_field
 */

add_action('quick_edit_custom_box',  'misha_quick_edit_fields', 10, 2);

function misha_quick_edit_fields($column_name, $post_type)
{


	switch ($column_name):

		case 'acf_mts': {
				abrir_fieldset();
				crear_input_helper("mts");
				break;
			}
		case 'acf_medida': {
				crear_input_helper("medida");
				break;
			}
		case 'acf_Ancho': {
				crear_input_helper("Ancho");
				break;
			}
		case 'acf_Largo': {
				crear_input_helper("Largo");
				break;
			}
		case 'acf_peso': {
				crear_input_helper("peso");
				break;
			}
		case 'acf_espesor': {
				crear_input_helper("espesor");
				break;
			}
		case 'acf_tipo': {

				crear_input_helper("tipo");
				cerrar_fieldset();
				break;
			}



	endswitch;
}

add_action('save_post_ferre-producto', 'misha_quick_edit_save');

function misha_quick_edit_save($post_id)
{
	$campos = [
		"mts",
		"medida",
		"Ancho",
		"Largo",
		"peso",
		"espesor",
		"tipo"
	];

	if (!current_user_can('edit_post', $post_id)) {
		return;
	}
	if (!wp_verify_nonce($_POST['misha_nonce'], 'misha_q_edit_nonce')) {
		return;
	}

	foreach ($campos as $value) {
		if (isset($_POST[$value])) {
			update_post_meta($post_id, $value, $_POST[$value]);
		}
	}
}

function admin_inline_js()
{
	if (!isset($_GET['post_type'])) {
		return;
	}

	if ($_GET['post_type'] == "ferre-producto") {
?>
		<script>

		</script>
<?php
	}
}
add_action('admin_print_scripts', 'admin_inline_js');

function abrir_fieldset()
{

	wp_nonce_field('misha_q_edit_nonce', 'misha_nonce');

	echo '<fieldset class="inline-edit-col-right">
	<div class="inline-edit-col">
		<div class="inline-edit-group wp-clearfix">';
}
function crear_input_helper($name)
{

	$salida = "<label class='alignleft'>
					<span class='title'>$name</span>
					<span class='input-text-wrap'><input type='text' name='$name' value=''></span>
				</label>";
	echo $salida;
}
function cerrar_fieldset()
{
	echo '</div></div></fieldset>';
}

add_action('admin_enqueue_scripts', 'ferreacero_enqueue_quick_edit_population');
function ferreacero_enqueue_quick_edit_population($pagehook)
{
	if ('edit.php' != $pagehook) {
		return;
	}
	wp_enqueue_script('populatequickedit',  plugin_dir_url(__FILE__) . 'abe_ferreacero_quit_edit_field.js', array('jquery'));
}


add_action('bulk_edit_custom_box',  'misha_quick_edit_fields', 10, 2);


add_action('wp_ajax_misha_save_bulk', 'misha_save_bulk_edit_hook');

function misha_save_bulk_edit_hook()
{
	if (!wp_verify_nonce($_POST['nonce'], 'quick_edit_misha_nonce')) {
		die();
	}
	if (empty($_POST['post_ids'])) {
		die();
	}
	foreach ($_POST['post_ids'] as $id) {

		if (!empty($_POST['mts'])) {
			update_post_meta($id, 'mts', $_POST['mts']);
		}
		if (!empty($_POST['medida'])) {
			update_post_meta($id, 'medida', $_POST['medida']);
		}
		if (!empty($_POST['Ancho'])) {
			update_post_meta($id, 'Ancho', $_POST['Ancho']);
		}
		if (!empty($_POST['Largo'])) {
			update_post_meta($id, 'Largo', $_POST['Largo']);
		}
		if (!empty($_POST['peso'])) {
			update_post_meta($id, 'peso', $_POST['peso']);
		}
		if (!empty($_POST['espesor'])) {
			update_post_meta($id, 'espesor', $_POST['espesor']);
		}
		if (!empty($_POST['tipo'])) {
			update_post_meta($id, 'tipo', $_POST['tipo']);
		}
	}
	die();
}
