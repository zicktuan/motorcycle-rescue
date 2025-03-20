<?php
    namespace MyPlugin\Shortcode\Home;

    use MyPlugin\Shortcode\AbstractShortcode;

    class ShortcodeService extends AbstractShortcode
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
            return 'itsa_service_home';
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
            ob_start();
            include $this->parent->locateTemplate('home/shortcode-service.tpl.php');
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
                    'type'       => 'textfield',
                    'param_name' => 'itsa_service_home_title',
                    'heading'    => esc_html__('Tiêu đề', 'bookawesome')
                ),
                array(
                    'type'       => 'textarea',
                    'param_name' => 'itsa_service_home_desc',
                    'heading'    => esc_html__('Mô tả', 'bookawesome'),
                ),
                array(
                    'type'       => 'param_group',
                    'param_name' => 'items',
                    'heading'    => esc_html__( 'List Item', 'bookawesome' ),
                    'params'     => array(
                        array(
                            'type'       => 'attach_image',
                            'param_name' => 'img',
                            'heading'    => esc_html__('Ảnh', 'bookawesome')
                        ),
                        array(
                            'type'       => 'textfield',
                            'param_name' => 'title',
                            'heading'    => esc_html__('Tiêu đề', 'bookawesome')
                        ),
                        array(
                            'type'       => 'textfield',
                            'param_name' => 'desc',
                            'heading'    => esc_html__('Mô tả', 'bookawesome'),
                        ),
                    )
                )
            );

            return array(
                'name'        => esc_html__('Dịch vụ cứu hộ', 'bookawesome'),
                'description' => esc_html__('Home', 'bookawesome'),
                'category'    => $this->get_category(),
                'icon'        => $this->get_icon(),
                'params'      => $params
            );
        }
    }
