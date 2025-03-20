<?php

class ActionsPostTemplate extends PostTemplateAbstract
{
    public function __construct($postID){
        parent::__construct($postID);
    }

    public function loadTemplate()
    {
        $typePost = get_post_type();
        if ( "itsa_actions_pt" == $typePost ) {
            $this->checkPage = true;
            get_template_part('templates/single', 'actions');
        }
    }
}
