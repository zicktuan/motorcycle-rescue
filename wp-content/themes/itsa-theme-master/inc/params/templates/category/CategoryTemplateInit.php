<?php

class CategoryTemplateInit {

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
            "CategoryTemplateAbstract.php",
            "ProductsCategoryTemplate.php",
        ];
        foreach ($listHandleTemplate as $value) {
            include get_template_directory() . '/inc/params/templates/category/' . $value;
        }
    }

    
    public function Init()
    {
        $this->incModule();
        new ProductsCategoryTemplate();
        new CategoryTemplate();
    }
}