<?php
add_filter('rest_ferre-producto_collection_params', 'big_json_change_post_per_page', 10, 1);
function big_json_change_post_per_page($params)
{
	if (isset($params['per_page'])) {
		$params['per_page']['maximum'] = 1000;
	}
	return $params;
}
