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

class General extends SettingFactory
{

	public function section(){
		return array(
	        'id'          => 'general_setting',
			'title' => __(' General Settings', 'bookawesome'),
            'icon'  => '<div class="dashicons dashicons-admin-generic"></div>'
	    );
	}

	public function settings(){
	    $this->general();
		$this->header();
		$this->footer();
		return $this->fieldsSettings;
	}

	public function general() {
        $settings = [
            [
                'label'       => __( 'General', 'bookawesome' ),
                'id'          => 'general',
                'type'        => 'tab',
                'section'     => 'general_setting',
            ],
            [
                'id'          => 'awe_company_name',
                'label'       => __( 'Tên công ty', 'bookawesome' ),
                'type'        => 'text',
                'section'     => 'general_setting',
                'std'         => 'Công ty TNHH...',
                'desc'        => 'Tên công ty hiển thị ở dưới trang'
            ],
            [
                'id'          => 'awe_social_fb',
                'label'       => __( 'Page facebook', 'bookawesome' ),
                'type'        => 'text',
                'section'     => 'general_setting',
                'std'         => '',
                'desc'        => ' '
            ],
            [
                'id'          => 'awe_social_ins',
                'label'       => __( 'Instagram', 'bookawesome' ),
                'type'        => 'text',
                'section'     => 'general_setting',
                'std'         => '',
                'desc'        => ' '
            ],
            [
                'id'          => 'awe_social_twitter',
                'label'       => __( 'Twitter', 'bookawesome' ),
                'type'        => 'text',
                'section'     => 'general_setting',
                'std'         => '',
                'desc'        => ' '
            ],
            [
                'id'          => 'awe_social_linkedin',
                'label'       => __( 'Linkedin', 'bookawesome' ),
                'type'        => 'text',
                'section'     => 'general_setting',
                'std'         => '',
                'desc'        => ' '
            ],
            [
                'id'          => 'awe_social_you',
                'label'       => __( 'Youtube', 'bookawesome' ),
                'type'        => 'text',
                'section'     => 'general_setting',
                'std'         => '',
                'desc'        => ' '
            ],
            [
                'id'          => 'awe_social_zalo',
                'label'       => __( 'Zalo', 'bookawesome' ),
                'type'        => 'text',
                'section'     => 'general_setting',
                'std'         => '',
                'desc'        => ' '
            ],
            [
                'id'          => 'awe_social_tiktok',
                'label'       => __( 'Tiktok', 'bookawesome' ),
                'type'        => 'text',
                'section'     => 'general_setting',
                'std'         => '',
                'desc'        => ' '
            ],

        ];
        $this->setListSettings($settings);
    }


	public function header() {
        $settings = [
            [
                'label'       => __( 'Header', 'bookawesome' ),
                'id'          => 'header',
                'type'        => 'tab',
                'section'     => 'general_setting',
            ],
            [
                'id'      => 'awe_header_logo',
                'label'   => __( 'Logo', 'bookawesome' ),
                'type'    => 'upload',
                'section' => 'general_setting',
            ]
        ];
        $this->setListSettings($settings);
    }

    public function footer() {
        $settings = [
            [
                'label'       => __( 'Footer', 'bookawesome' ),
                'id'          => 'footer',
                'type'        => 'tab',
                'section'     => 'general_setting',
            ],
            [
                'id'          => 'awe_address_ft',
                'label'       => __( 'Các tỉnh thành hỗ trợ', 'bookawesome' ),
                'type'        => 'text',
                'section'     => 'general_setting',
                'desc'        => ' '
            ],
            [
                'id'          => 'awe_hotline',
                'label'       => __( 'Tổng đài', 'bookawesome' ),
                'type'        => 'text',
                'section'     => 'general_setting',
                'desc'        => ' '
            ],
            [
                'id'          => 'awe_fax_online',
                'label'       => __( 'Thời gian làm việc', 'bookawesome' ),
                'type'        => 'text',
                'section'     => 'general_setting',
                'desc'        => ' '
            ],
            [
                'id'          => 'awe_about_ft',
                'label'       => __( 'Giới thiệu', 'bookawesome' ),
                'type'        => 'text',
                'section'     => 'general_setting',
                'desc'        => ' '
            ],
            [
                'id'      => 'awe_footer_copyright',
                'label'   => __('Footer copyright', 'bookawesome'),
                'type'    => 'text',
                'section' => 'general_setting',
            ],
        ];
        $this->setListSettings($settings);
    }
}