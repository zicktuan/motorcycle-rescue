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

    class Reservation extends SettingFactory
    {

        public function section()
        {
            return array(
                'id'          => 'reservation_setting',
                'title' => __(' Đặt bàn', 'bookawesome'),
                'icon'  => '<span class="dashicons dashicons-schedule"></span>'
            );
        }

        public function settings()
        {
            $this->general();
            return $this->fieldsSettings;
        }


        public function general() {
            $setting = [
                [
                    'label'       => __( 'General', 'bookawesome' ),
                    'id'          => 'general',
                    'type'        => 'tab',
                    'section'     => 'reservation_setting',
                ],
                [
                    'id'      => 'awe_reservation_st_desc',
                    'label'   => __('Mô tả ngắn', 'bookawesome'),
                    'type'    => 'textarea',
                    'section' => 'reservation_setting',
                ],

                [
                    'id'       => 'awe_reservation_st_hour_s',
                    'label'    => __( 'Khung giờ làm việc sáng', 'bookawesome' ),
                    'type'     => 'list-item',
                    'section'  => 'reservation_setting',
                    'desc'     => ' ',
                    'std'      => [
                        [
                            'title' =>  '11:00',
                        ],
                        [
                            'title' => '11:30',
                        ],
                        [
                            'title' => '12:00',
                        ],
                        [
                            'title' =>  '12:30',
                        ],
                    ],
                    'settings' => [
                        []
                    ],
                ],
                [
                    'id'       => 'awe_reservation_st_hour_t',
                    'label'    => __( 'Khung giờ làm việc tối', 'bookawesome' ),
                    'type'     => 'list-item',
                    'section'  => 'reservation_setting',
                    'desc'     => ' ',
                    'std'      => [
                        [
                            'title' =>  '18:00',
                        ],
                        [
                            'title' => '18:30',
                        ],
                        [
                            'title' => '19:00',
                        ],
                        [
                            'title' =>  '19:30',
                        ],
                        [
                            'title' =>  '20:00',
                        ],
                        [
                            'title' =>  '20:30',
                        ],
                        [
                            'title' =>  '21:00',
                        ],
                    ],
                    'settings' => [
                        []
                    ],
                ],

                [
                    'id'       => 'awe_reservation_st_branch',
                    'label'    => __( 'Các cơ sở', 'bookawesome' ),
                    'type'     => 'list-item',
                    'section'  => 'reservation_setting',
                    'desc'     => ' ',
                    'std'      => [
                        [
                            'title' =>  'Deli4b Nguyễn Văn Lộc',
                        ],
                        [
                            'title' => 'Deli4b Võ Thị Sáu',
                        ],
                        [
                            'title' => 'Deli4b Thượng Đình',
                        ],
                    ],
                    'settings' => [
                        []
                    ],
                ],
            ];
            $this->setListSettings($setting);
        }

    }
