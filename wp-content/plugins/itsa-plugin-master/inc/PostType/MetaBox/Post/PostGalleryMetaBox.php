<?php

namespace MyPlugin\PostType\MetaBox\Post;

use MyPlugin\PostType\MetaBox\AbstractMetaBox;

class PostGalleryMetaBox extends AbstractMetaBox
{
    protected $useOptionTree = true;

    public function __construct($objectPosttype)
    {
        parent::__construct($objectPosttype);
    }

    public function register(){}

    public function output($post)
    {
        $galleryMetaBox = array(
            'id'       => 'awe_post_gallery',
            'title'    => __('Post Gallery', 'bookawesome'),
            'pages'    => array('post'),
            'context'  => 'side',
            'priority' => 'low',
            'fields'   => array(
                array(
                    'id'   => 'awe_post_gallery',
                    'type' => 'gallery',
                ),
            )
        );


        /**
         * Register our meta boxes using the
         * ot_register_meta_box() function.
         */

        ot_register_meta_box($galleryMetaBox);
    }

    public function save($post_id){}
}
