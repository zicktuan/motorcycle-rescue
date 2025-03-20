<?php

namespace MyPlugin\Widgets;

class WidgetFooterService extends AbstractWidget
{
    function __construct() {
        // Instantiate the parent object
        parent::__construct( false, 'Awesome Footer Service' );
    }

    function widget( $args, $instance ) {
        $selected_pages = isset( $instance['pages'] ) ? (array) $instance['pages'] : [];
    
        if ( empty( $selected_pages ) ) {
            return;
        }
    
        $pages = get_posts([
            'post_type'   => 'page',
            'post__in'    => $selected_pages,
            'orderby'     => 'post__in',
            'posts_per_page' => -1,
        ]);
        include $this->locateTemplate('widgetFooter/WidgetFooterService.tpl.php');
    }

    function update( $new_instance, $old_instance ) {
        $instance = $old_instance;
        $instance['title'] = sanitize_text_field($new_instance['title']);
        $instance['pages'] = ! empty( $new_instance['pages'] ) ? array_map( 'intval', (array) $new_instance['pages'] ) : [];
        return $instance;
    }

    function form( $instance ) {
        $title = !empty($instance['title']) ? $instance['title'] : '';
        $selected_pages = isset( $instance['pages'] ) ? (array) $instance['pages'] : [];
    
        $pages = get_pages();
        ?>
        <p>
            <label for="<?php echo $this->get_field_id('title'); ?>"><?php _e('Title:', 'bookawesome'); ?></label>
            <input class="widefat" id="<?php echo $this->get_field_id('title'); ?>"
                   name="<?php echo $this->get_field_name('title'); ?>" type="text"
                   value="<?php echo esc_attr($title); ?>"/>
        </p>
        <p>
            <label for="<?php echo $this->get_field_id( 'pages' ); ?>"><?php _e( 'Select Pages:', 'MXD' ); ?></label>
            <select multiple class="widefat" id="<?php echo $this->get_field_id( 'pages' ); ?>" 
                    name="<?php echo $this->get_field_name( 'pages' ); ?>[]">
                <?php foreach ( $pages as $page ) : ?>
                    <option value="<?php echo $page->ID; ?>" 
                            <?php echo in_array( $page->ID, $selected_pages ) ? 'selected' : ''; ?>>
                        <?php echo esc_html( $page->post_title ); ?>
                    </option>
                <?php endforeach; ?>
            </select>
        </p>
        <?php
    }
}
