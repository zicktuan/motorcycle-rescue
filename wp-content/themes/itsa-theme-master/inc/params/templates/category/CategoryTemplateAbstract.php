<?php

abstract class CategoryTemplateAbstract {

    protected $checkPage = false;

    public $postSettingId = false;

    public function __construct()
    {
        $this->loadTemplate();
        $this->checkPage();
    }

    abstract function loadTemplate();

    public function checkPage()
    {
        // if( false == $this->checkPage) {
        //     get_template_part( 'archive', 'content' );
        // }
    }
    
}