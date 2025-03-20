<?php
/**
 * Custom Walker
 *
 * @author Nguyen Anh Tuan
 * @version 1.0
 * @package Custom Primary Menu Walker
 */

class CustomPrimaryMenuWalker extends Walker_Nav_Menu {

    /**
     * Start the element output.
     *
     * @param  string $output Passed by reference. Used to append additional content.
     * @param  int $depth     Depth of menu item. May be used for padding.
     * @param  array|object $args    Additional strings. Actually always an
     * @return void
     */
    public function start_lvl(&$output, $depth = 0, $args = null) {
        $indent = str_repeat("\t", $depth);
        $classes = ($depth === 0) ? 'sub-menu' : 'sub-menu';
        $output .= "\n{$indent}<ul class='" . esc_attr($classes) . "'>\n";
    }

    /**
     * Start the element output.
     *
     * @param  string $output Passed by reference. Used to append additional content.
     * @param  object $item   Menu item data object.
     * @param  int $depth     Depth of menu item. May be used for padding.
     * @param  array|object $args    Additional strings. Actually always an
     * @return void
     */
    public function start_el(&$output, $item, $depth = 0, $args = array(), $id = 0) {
        $indent = ($depth) ? str_repeat("\t", $depth) : '';
        $classes = empty($item->classes) ? array() : (array) $item->classes;
        $has_children = in_array('menu-item-has-children', $classes);
        $class_names = join(' ', apply_filters('nav_menu_css_class', array_filter($classes), $item, $args));
        $class_names = ' class="' . esc_attr($class_names) . '"';

        $output .= "{$indent}<li{$class_names}>";

        $atts = '';
        !empty($item->attr_title) && $atts .= ' title="' . esc_attr($item->attr_title) . '"';
        !empty($item->target) && $atts .= ' target="' . esc_attr($item->target) . '"';
        !empty($item->xfn) && $atts .= ' rel="' . esc_attr($item->xfn) . '"';
        !empty($item->url) && $atts .= ' href="' . esc_attr($item->url) . '"';

        $title = apply_filters('the_title', $item->title, $item->ID);
        $item_output = $args->before
            . "<a{$atts}>"
            . $args->link_before
            . $title
            . '</a>'
            . $args->link_after;

        if ($has_children) {
            $item_output .= '<span class="ztl-expand"></span>';
        }

        $output .= apply_filters('walker_nav_menu_start_el', $item_output, $item, $depth, $args);
    }
    
    /**
     * End the element output.
     *
     * @param  string $output Passed by reference. Used to append additional content.
     * @param  int $depth     Depth of menu item. May be used for padding.
     * @param  array|object $args    Additional strings. Actually always an
     * @return void
     */
    public function end_lvl(&$output, $depth = 0, $args = null) {
        $indent = str_repeat("\t", $depth);
        $output .= "{$indent}</ul>\n";
    }
}
?>
