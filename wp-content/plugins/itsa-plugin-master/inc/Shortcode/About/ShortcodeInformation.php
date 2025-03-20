<?php
    namespace MyPlugin\Shortcode\About;

    use MyPlugin\Shortcode\AbstractShortcode;

    class ShortcodeInformation extends AbstractShortcode
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
            return 'itsa_infor_about';
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
            include $this->parent->locateTemplate('about/shortcode-information.tpl.php');
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
                    'param_name' => 'itsa_about_infor__desc',
                    'heading'    => esc_html__('Mô tả', 'bookawesome')
                ),
                array(
                    'type'       => 'param_group',
                    'param_name' => 'items',
                    'heading'    => esc_html__( 'List Item', 'bookawesome' ),
                    'params'     => array(
                        array(
                            'type'       => 'textfield',
                            'param_name' => 'title',
                            'heading'    => esc_html__('Item name', 'bookawesome')
                        )
                    )
                ),
                array(
                    'type'       => 'textfield',
                    'param_name' => 'itsa_about_infor__title_sidebar',
                    'heading'    => esc_html__('Tiêu đề', 'bookawesome')
                ),
                array(
                    'type'       => 'textarea',
                    'param_name' => 'itsa_about_infor__content',
                    'heading'    => esc_html__('Nội dung', 'bookawesome')
                ),
                array(
                    'type'       => 'attach_image',
                    'param_name' => 'itsa_about_infor_img',
                    'heading'    => esc_html__('Ảnh', 'bookawesome')
                ),
            );

            return array(
                'name'        => esc_html__('Giới thiệu', 'bookawesome'),
                'description' => esc_html__('About', 'bookawesome'),
                'category'    => $this->get_category(),
                'icon'        => $this->get_icon(),
                'params'      => $params
            );
        }
    }
