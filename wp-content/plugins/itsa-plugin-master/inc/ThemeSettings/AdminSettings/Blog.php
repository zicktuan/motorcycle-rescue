<?php

namespace MyPlugin\ThemeSettings\AdminSettings;

use MyPlugin\ThemeSettings\SettingFactory;

/**
 * @author lookawesome team
 * @version 1.0
 * @package AdminSettings
 * 
 * Setting General theme setting for theme bookawesome
 */

class Blog extends SettingFactory
{

    public function section()
    {
        return array(
            'id'          => 'blog_setting',
            'title' => __(' Blog', 'bookawesome'),
            'icon'  => '<span class="dashicons dashicons-book-alt"></span>'
        );
    }

    public function settings()
    {
        $this->Blog();
        $this->SingleBlog();
        return $this->fieldsSettings;
    }


    public function Blog() {
        $setting = [
            [
                'label'       => __( 'General', 'bookawesome' ),
                'id'          => 'general',
                'type'        => 'tab',
                'section'     => 'blog_setting',
            ],
            [
                'id'          => 'awe_config_show_blog',
                'label'       => __( 'Chế Độ Hiển Thị', 'bookawesome' ),
                'type'        => 'select',
                'section'     => 'blog_setting',
                'choices'	  => [
                    ['value' => '0', 'label' => __( 'No Sidebar', 'bookawesome' )],
                    ['value' => '1', 'label' => __( 'Sidebar', 'bookawesome' )],
                ]
            ],
            [
                'id'          => 'awe_config_style_blog',
                'label'       => __( 'Style Hiển Thị', 'bookawesome' ),
                'type'        => 'select',
                'section'     => 'blog_setting',
                'choices'	  => [
                    ['value' => '0', 'label' => __( 'List', 'bookawesome' )],
                    ['value' => '1', 'label' => __( 'Grid', 'bookawesome' )],
                ]
            ],
            [
                'id'      => 'blog_bg',
                'label'   => __('Background', 'bookawesome'),
                'type'    => 'upload',
                'section' => 'blog_setting',
            ],
            [
                'id'      => 'blog_header_title_bg',
                'label'   => __( 'Header Title Background', 'bookawesome' ),
                'type'    => 'text',
                'section' => 'blog_setting',
            ],
            [
                'id'      => 'blog_header_sub_title_bg',
                'label'   => __( 'Sub Title Background', 'bookawesome' ),
                'type'    => 'text',
                'section' => 'blog_setting',
            ],
        ];
        $this->setListSettings($setting);
    }

    public function SingleBlog() {
        $setting = [
            [
                'label'       => __( 'Single Blog', 'bookawesome' ),
                'id'          => 'single-blog',
                'type'        => 'tab',
                'section'     => 'blog_setting',
            ],
            [
                'id'      => 'single_blog_bg',
                'label'   => __('Background', 'bookawesome'),
                'type'    => 'upload',
                'section' => 'blog_setting',
            ],
            [
                'id'      => 'single_blog_header_title_bg',
                'label'   => __( 'Header Title Background', 'bookawesome' ),
                'type'    => 'text',
                'section' => 'blog_setting',
            ],
            [
                'id'      => 'single_blog_header_sub_title_bg',
                'label'   => __( 'Sub Title Background', 'bookawesome' ),
                'type'    => 'text',
                'section' => 'blog_setting',
            ],
        ];
        $this->setListSettings($setting);
    }
}
