<?php
    namespace MyPlugin\Shortcode\Service;

    use MyPlugin\Shortcode\AbstractShortcode;

    class ShortcodeServiceDetail extends AbstractShortcode
    {
        protected $parent;
        public function __construct($self = null) {
            $this->parent = $self;
            add_shortcode($this->get_name(), array($this, 'render'));
            vc_lean_map($this->get_name(), array($this, 'map'));
        }

        /**
         * Get ShortCode name.
         *
         * @return string
         */
        public function get_name() {
            return 'itsa_service_detail';
        }

        /**
         * ShortCode handler.
         *
         * @param array $atts ShortCode attributes.
         *
         * @return string ShortCode output.
         */
        public function render($atts) {
            $atts = vc_map_get_attributes($this->get_name(), $atts);
            $atts = array_map('trim', $atts);

            $listItems = vc_param_group_parse_atts( $atts['items'] );
            $listItems2 = vc_param_group_parse_atts( $atts['items2'] );

            ob_start();
            include $this->parent->locateTemplate('service/shortcode-service-detail.tpl.php');
            return ob_get_clean();
        }

        /**
         * Get shortCode settings.
         *
         * @return array
         *
         * @see vc_lean_map()
         */
        public function map() {
            $params = array(
                array(
                    'type'       => 'textarea',
                    'param_name' => 'itsa_service_detail_desc',
                    'heading'    => esc_html__('Mô tả', 'bookawesome'),
                ),

                array(
                    'type'       => 'param_group',
                    'param_name' => 'items',
                    'heading'    => esc_html__( 'Danh sách tiêu chí', 'bookawesome' ),
                    'params'     => array(
                        array(
                            'type'       => 'textfield',
                            'param_name' => 'title',
                            'heading'    => esc_html__('Tiêu đề', 'bookawesome')
                        ),
                    )
                ),
                array(
                    'type'       => 'textfield',
                    'param_name' => 'itsa_service_detail_title',
                    'heading'    => esc_html__('Tiêu đề', 'bookawesome')
                ),
                array(
                    'type'       => 'param_group',
                    'param_name' => 'items2',
                    'heading'    => esc_html__( 'Bảng gía', 'bookawesome' ),
                    'params'     => array(
                        array(
                            'type'       => 'textfield',
                            'param_name' => 'title',
                            'heading'    => esc_html__('Tên dịch vụ', 'bookawesome')
                        ),
                        array(
                            'type'       => 'textfield',
                            'param_name' => 'day_price',
                            'heading'    => esc_html__('Giá ban ngày', 'bookawesome')
                        ),
                        array(
                            'type'       => 'textfield',
                            'param_name' => 'night_price',
                            'heading'    => esc_html__('Giá ban đêm', 'bookawesome')
                        ),
                    )
                ),
            );

            return array(
                'name'        => esc_html__('Chi tiết dịch vụ', 'bookawesome'),
                'description' => esc_html__('Service', 'bookawesome'),
                'category'    => $this->get_category(),
                'icon'        => $this->get_icon(),
                'params'      => $params
            );
        }
    }
