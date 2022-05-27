<?php
function ferre_categorias_filter(){
    $screen = get_current_screen();
    global $post_type;
    if( $screen->id == 'edit-ferre-producto' ){
        $my_args = array(
            'show_option_all'   => 'Todas las categorías',
			'taxonomy'=>'ferre_categorias',
			'name'              => 'ferre_categorias_admin_filter',    
        );
        if(isset($_GET['ferre_categorias_admin_filter'])){
            $my_args['selected'] = (int)sanitize_text_field($_GET['ferre_categorias_admin_filter']);
        }
        wp_dropdown_categories($my_args);
    }
}
add_action('restrict_manage_posts','ferre_sedes');

function ferre_sedes(){
    $screen = get_current_screen();
    global $post_type;
    if( $screen->id == 'edit-ferre-producto' ){
        $my_args = array(
            'show_option_all'   => 'Todas las sedes',
			'taxonomy'=>'ferre_sedes',
			'name'              => 'ferre_sedes_admin_filter',    
        );
        if(isset($_GET['ferre_sedes_admin_filter'])){
            $my_args['selected'] = (int)sanitize_text_field($_GET['ferre_sedes_admin_filter']);
        }
        wp_dropdown_categories($my_args);
    }
}
add_action('restrict_manage_posts','ferre_sedes');