<?php

class PostTemplateInit
{
    static $getInstance = null;

    public static function getInstance()
    {
        if (!(self::$getInstance instanceof self)) {
            self::$getInstance = new self();
        }
        return self::$getInstance;
    }

    public function incModule()
    {
        $listHandleTemplate = [
            "PostTemplateAbstract.php", 
            "ActionsPostTemplate.php",
        ];
        foreach ($listHandleTemplate as $value) {
            include get_template_directory() . '/inc/params/templates/post/' . $value;
        }
    }

    public function Init( $postID )
    {
        $this->incModule();
        new ActionsPostTemplate($postID);
    }
}
