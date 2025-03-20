<?php

class ProductsCategoryTemplate extends CategoryTemplateAbstract {

    public function __construct(){
        parent::__construct();
    }

    public function loadTemplate()
    {
        $wpTerm = get_queried_object();
        if (!empty($wpTerm->taxonomy)) {
            switch ($wpTerm->taxonomy) {
                case 'product':
                    $this->checkPage = true;
                    get_template_part('templates/category', 'product');
                    break;
            }
        }
    }
}