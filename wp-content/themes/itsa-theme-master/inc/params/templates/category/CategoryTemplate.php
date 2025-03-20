<?php

class CategoryTemplate extends CategoryTemplateAbstract {

    public function __construct(){
        parent::__construct();
    }

    public function loadTemplate()
    {
        $wpTerm = get_queried_object();
        if (!empty($wpTerm->rewrite['slug'])) {
            if (
                $wpTerm->rewrite['slug'] == 'product'
            ) {
                get_template_part('templates/layout', '404');
            }
        }
    }
}