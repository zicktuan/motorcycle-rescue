<?php
namespace MyPlugin\PostType;

use MyPlugin\PostType\MetaBox\Post\PostMetaBox;
use MyPlugin\PostType\MetaBox\Post\PostGalleryMetaBox;
use MyPlugin\PostType\ActionsPostType;
use MyPlugin\PostType\MetaBox\Page\PageMetaBox;
use MyPlugin\PostType\ServicesPostType;
use MyPlugin\PostType\MedicalInformationPostType;
use MyPlugin\PostType\TeamPostType;

/**
 * @author lookawesome team
 * @version 1.0
 * @package PostType
 * 
 * Register post type for theme designer
 */
class PostTypeInit {

	public function __construct(){
        // add_action( 'add_meta_boxes', array(new PostMetaBox($this), 'register') );
        add_action( 'add_meta_boxes', array(new PostGalleryMetaBox($this), 'register') );
        // add_action( 'add_meta_boxes', array(new PageMetaBox($this), 'register') );
       new ProductsPostType();
	}

    public function register(){

    }
}