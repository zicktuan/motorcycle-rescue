<?php

abstract class PostTemplateAbstract
{
    protected $checkPage = false;

    protected $postID;

    public $postSettingId = false;

    public function __construct($postID)
    {
        $this->postID = $postID;
        $this->loadTemplate();
        $this->checkPage();
    }

    abstract function loadTemplate();

    public function checkPage()
    {
        if( false == $this->checkPage) {
            //get_template_part( 'single', 'content' );
        }
    }
}
