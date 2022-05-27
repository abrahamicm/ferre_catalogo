<?php
function poner_titulo_como_medida($post_id)
{

	$post = get_post($post_id);

	$title = substr($post->post_title, 4);

	$mts = "";

	if (str_contains($title, "6MTS") || str_contains($title, "6 MTS")) {
		$mts = "6";
	} else if (str_contains($title, "12MTS") || str_contains($title, "12 MTS")) {
		$mts = "12";
	}

	update_post_meta($post_id, 'medida', $title);
	update_post_meta($post_id, 'mts', "2,40");
}

function cambiar_medida($post_id)
{
	//document.querySelectorAll("[name='post[]']").forEach(x=>console.log(x.value))
	update_post_meta($post_id, 'mts', "2,40");
}

function formatear_titulo($post_id)
{
	//document.querySelectorAll("[name='post[]']").forEach(x=>console.log(x.value))
	$post = get_post($post_id);
	$title = str_replace(" X 6MTS", "", $post->post_title);

	$post_update = array(
		'ID'         => $post->ID,
		'post_title' => $title
	);

	wp_update_post($post_update);
}


function extraer_mts($post_id)
{

	$post = get_post($post_id);
	$title = substr($post->post_title, 4);
	$mts = "";

	if (str_contains($title, "6MTS") || str_contains($title, "6 MTS")) {
		$mts = "6";
	} else if (str_contains($title, "12MTS") || str_contains($title, "12 MTS")) {
		$mts = "12";
	}

	update_post_meta($post_id, 'mts', $mts);
}
