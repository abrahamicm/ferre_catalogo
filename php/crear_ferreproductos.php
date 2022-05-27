<?php
function crear_ferre_productos($sku, $nombre, $precio, $existencia, $autor_id)
{
	$a = [
		'post_title'    => $nombre,
		'post_status'   => 'publish',
		'post_author'   =>  $autor_id,
		'post_type'   =>  "ferre-producto"
	];
	$post_id = wp_insert_post($a);

	add_post_meta($post_id, 'sku', $sku);
	add_post_meta($post_id, 'precio', $precio);
	add_post_meta($existencia, 'sku', $existencia);
}
