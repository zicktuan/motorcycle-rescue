<?php

    namespace MyPlugin\PostType\MetaBox\Post;

    use MyPlugin\PostType\MetaBox\AbstractMetaBox;

    class PostMetaBox extends AbstractMetaBox
    {
        protected $useOptionTree = true;

        public function __construct($objectPosttype)
        {
            parent::__construct($objectPosttype);
        }

        public function register(){}

        public function output($post)
        {
            $informationMetaBox = [
                'id'       => 'awe_post_meta_box',
                'title'    => __('Post Meta Box', 'bookawesome'),
                'desc'     => '',
                'pages'    => array('post'),
                'context'  => 'normal',
                'priority' => 'high',
                'fields'   => [
                    [
                        'label' => __( 'General', 'bookawesome' ),
                        'id'    => 'general',
                        'type'  => 'tab'
                    ],
                    [
                        'label' => __('Id video', 'bookawesome'),
                        'id'    => 'awe_id_video',
                        'type'  => 'text',
                    ],
                    [
                        'label' => __('Ngày diễn ra sự kiện( Khuyến mãi )', 'bookawesome'),
                        'id'    => 'awe_event_meta',
                        'type'  => 'date-picker',
                    ],
                ]
            ];

            /**
             * Register our meta boxes using the
             * ot_register_meta_box() function.
             */

            ot_register_meta_box($informationMetaBox);
        }

        public function save($post_id){}
    }
