<?php 
namespace MyPlugin\Widgets;

class WidgetFooterPost extends AbstractWidget
{
	function __construct() {
		// Instantiate the parent object
		parent::__construct( false, 'Awesome Footer Posts' );
	}

	function widget( $args, $instance ) {
        $recent_posts = get_posts(array(
            'post_type'      => 'post',
            'posts_per_page' => 2,
            'orderby'        => 'date',
            'order'          => 'DESC'
        ));
    
        if ( empty( $recent_posts ) ) {
            return;
        }

        include $this->locateTemplate('widget-post.tpl.php');
	}

	function update( $new_instance, $old_instance ) {
        $instance = [];
        $instance['title']    = sanitize_text_field( $new_instance['title'] );

        return $instance;
	}

	function form( $instance ) {
        $title = isset( $instance['title'] ) ? esc_attr( $instance['title'] ) : '';
        ?>
        <p>
            <label for="<?php echo $this->get_field_id( 'title' ); ?>"><?php _e( 'Title:', 'awetour' ); ?></label>
            <input class="widefat" id="<?php echo $this->get_field_id( 'title' ); ?>" name="<?php echo $this->get_field_name( 'title' ); ?>" type="text" value="<?php echo esc_attr($title); ?>" />
        </p>
        
        <?php

    }
}
