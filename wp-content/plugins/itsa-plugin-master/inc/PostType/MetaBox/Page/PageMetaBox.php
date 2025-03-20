<?php

namespace MyPlugin\PostType\MetaBox\Page;

use MyPlugin\PostType\MetaBox\AbstractMetaBox;

class PageMetaBox extends AbstractMetaBox
{
    protected $useOptionTree = true;

    public function __construct($objectPosttype)
    {
        parent::__construct($objectPosttype);
    }

    public function register()
    {
    }

    public function output($post)
    {
        $informationMetaBox = [
            'id'       => 'awe_page_meta_box',
            'title'    => __('Page Meta Box', 'bookawesome'),
            'desc'     => '',
            'pages'    => array('page'),
            'context'  => 'normal',
            'priority' => 'high',
            'fields'   => [
                [
                    'label' => __( 'General', 'bookawesome' ),
                    'id'    => 'general',
                    'type'  => 'tab'
                ],
                [
                    'label' => __('Banner page', 'bookawesome'),
                    'id'    => 'awe_banner_page',
                    'type'  => 'upload',
                ],
                [
                    'label' => __('Sub title', 'bookawesome'),
                    'id'    => 'awe_sub_title_page',
                    'type'  => 'text',
                ],
                [
                    'label' => __('Title', 'bookawesome'),
                    'id'    => 'awe_title_page',
                    'type'  => 'text',
                ],
            ]
        ];


        /**
         * Register our meta boxes using the
         * ot_register_meta_box() function.
         */

        ot_register_meta_box($informationMetaBox);

    }

    public function save($post_id)
    {
    }
}
