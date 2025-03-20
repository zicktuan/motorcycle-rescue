<?php

namespace MyPlugin;

/**
 * @author Nguyen Anh Tuan
 * @version 1.0
 * @package MyPlugin
 * 
 * Init plugin for theme myTheme
*/
class MyPlugin
{
    static $getInstance = null;

    public $version = '1.0';

    public $shortcode = null;
    public $widgets = null;
    public $themeSettings = null;

    public static function getInstance()
    {
        if (!(self::$getInstance instanceof self)) {
            self::$getInstance = new self();
        }
        return self::$getInstance;
    }

    protected function __construct(){
        $this->loadModule();
        $this->customPage();
        $this->includeFunctionProgram();
        $this->init();
        $this->shortcode = null;
        $this->widgets = null;
    }

    /**
     * Include file module handle
     * @return void
     */
    protected function includeFunctionProgram() {
        require_once 'Help/HelpFunction.php';
    }

    public function init(){

        do_action('nautzick_before_init');

        new PostType\PostTypeInit;
        new Taxonomies\TaxonomiesInit;

         $this->themeSettings();

         if ( in_array( 'js_composer/js_composer.php', apply_filters( 'active_plugins', get_option( 'active_plugins' ) ) ) ) {
             $this->shortcode = new Shortcode\ShortcodeInit;
         }

         $this->widgets = new Widgets\InitWidget;

        //  $this->reservation()->init();

        do_action('nautzick_after_init');
    }

    public function themeSettings(){
        $this->themeSettings = new ThemeSettings\ThemeSettingInit;
    }

    public function customPage(){
        require_once 'AdminPage/Init.php';
        AdminPage\Init::getInstance();
    }

    /**
     * Reservation singleton load
     * @return void
     */
    // public function reservation(){
    //     return Params\Reservation\Init::getInstance();
    // }

    /**
     * Get module cache page | category
     * @return mixed
     */
    
     public function cache($cacheModule){
        $objCache = Classes\Cache::getInstance();

        return call_user_func([$objCache, $cacheModule]);
    }


    /**
     * load_module.
     * Load module for blog.
     */
    protected function loadModule()
    {
        require_once 'Autoload/MyPluginAutoload.php';

        do_action('nautzick_load_module');
       
        MyPluginAutoload::getInstance();
    }
}

function MyPlugin(){
    return MyPlugin::getInstance();
}

$GLOBALS['myplugin'] = MyPlugin();