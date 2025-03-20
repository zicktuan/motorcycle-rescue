<?php

namespace MyPlugin\Shortcode;

class ShortcodeNews extends AbstractShortcode {

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
        return 'itsa_post';
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

        // Get selected category ID
        $category_id = !empty($atts['category_id']) ? $atts['category_id'] : '';

        // Get posts based on selected category
        $args = array(
            'posts_per_page' => -1,
            'post_type'      => 'post',
            'cat'            => $category_id
        );
        $posts = get_posts($args);

        // Output
        ob_start();
        include $this->parent->locateTemplate('service/shortcode-post.tpl.php');
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
        $categories = get_categories();
        $argsCat = [];
        foreach ($categories as $cat) {
            $tmp = [];
            $tmp['label'] = $cat->name;
            $tmp['value'] = $cat->term_id;
            $argsCat[] = $tmp;
        }
        $argsPost = [];
        $params = array(
            array(
                'type'       => 'textfield',
                'param_name' => 'itsa_post__title',
                'heading'    => esc_html__('Tiêu đề', 'bookawesome')
            ),
            array(
                'type'       => 'textfield',
                'param_name' => 'itsa_post__url',
                'heading'    => esc_html__('Đường dẫn xem tất cả bài viết', 'bookawesome')
            ),
            array(
                'type'        => 'dropdown',
                'param_name'  => 'category_id',
                'heading'     => esc_html__('Chọn danh mục', 'bookawesome'),
                'value'       => $argsCat,
                'save_always' => true,
            ),
            array(
                'type'        => 'autocomplete',
                'param_name'  => 'post_list',
                'heading'     => esc_html__('Select Posts', 'bookawesome'),
                'description' => esc_html__('Select multiple posts', 'bookawesome'),
                'settings'    => array(
                    'multiple'       => true,
                    'sortable'       => true,
                    'min_length'     => 1,
                    'no_hide'        => true,
                    'unique_values'  => true,
                    'display_inline' => true,
                    'values'         => $argsPost,
                ),
                'save_always' => true,
            ),
        );

        return array(
            'name'        => esc_html__('Tin tức', 'bookawesome'),
            'description' => esc_html__('Tin tức', 'bookawesome'),
            'category'    => $this->get_category(),
            'icon'        => $this->get_icon(),
            'params'      => $params
        );
    }
}
