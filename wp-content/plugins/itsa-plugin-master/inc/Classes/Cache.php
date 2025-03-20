<?php

namespace MyPlugin\Classes;

/**
 * Class CachePage
 * @package BookAwesome\Classes
 * Handle Cache Page.
 */
class Cache{
    static $getInstance = null;

    protected $cacheFolder;

    public static function getInstance()
    {
        if (!(self::$getInstance instanceof self)) {
            self::$getInstance = new self();
        }
        return self::$getInstance;
    }

    protected function __construct()
    {
        $argsUpload = wp_upload_dir();

        $this->cacheFolder = $argsUpload['basedir'] . '/vntv_cache';

        if( !is_dir( $this->cacheFolder ) ) {
            mkdir( $this->cacheFolder );
        }
    }


    public function taxonomy(){
        return Cache\CacheTaxonomy::getInstance($this->cacheFolder);
    }

}