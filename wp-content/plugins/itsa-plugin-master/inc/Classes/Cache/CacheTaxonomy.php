<?php

namespace MyPlugin\Classes\Cache;

/**
 * Class CacheTaxonomy
 * @package BookAwesome\Classes
 * Handle Cache Taxonomy.
 */
class CacheTaxonomy{
    static $getInstance = null;

    private $cacheFolder;

    public static function getInstance($pathFolder)
    {
        if (!(self::$getInstance instanceof self)) {
            self::$getInstance = new self($pathFolder);
        }
        return self::$getInstance;
    }

    protected function __construct($pathFolder){

        $this->cacheFolder = $pathFolder . '/taxonomy';

        if( !is_dir( $this->cacheFolder ) ) {
            mkdir( $this->cacheFolder );
        }
    }

    public function getCache($pageId){

        if( is_file($this->cacheFolder. '/cat-'.$pageId.'.txt') ){
            return file_get_contents($this->cacheFolder. '/cat-'.$pageId.'.txt');
        }else{
            return false;
        }

    }

    public function isCachde($pageId){
        if( is_file($this->cacheFolder. '/cat-'.$pageId.'.txt') ){
            return true;
        }else{
            return false;
        }
    }

    public function setCache($pageId, $content = ''){
        if( !is_file($this->cacheFolder. '/cat-'.$pageId.'.txt') ){
            $fileCache = fopen($this->cacheFolder. '/cat-'.$pageId.'.txt', "w") or die("Unable to open file!");
            fwrite($fileCache, $content);
            fclose($fileCache);
        }
    }

    public function deleteCache($pageId){
        $pathFile = $this->cacheFolder . '/cat-'.$pageId.'.txt';
        if(is_file($pathFile)){
            unlink($pathFile);
        }
    }
}