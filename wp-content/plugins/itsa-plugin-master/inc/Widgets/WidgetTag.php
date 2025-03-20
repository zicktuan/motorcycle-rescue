<?php 
namespace MyPlugin\Widgets;

class WidgetTag extends AbstractWidget {

	function __construct() {
		// Instantiate the parent object
		parent::__construct( false, 'Awesome Tag Cloud' );
	}

	function widget( $args, $instance ) {
		switch ( $instance['taxonomy'] ) {
			case 'tags':
				$listCloud = get_tags(array('get' => 'all'));
				break;
			case 'category':
				$listCloud = get_categories();
				break;
		}
        include $this->locateTemplate('widget-tag-cloud.tpl.php');
	}

	function update( $new_instance, $old_instance ) {
		$instance = array();
		$instance['title'] = sanitize_text_field( $new_instance['title'] );
		$instance['taxonomy'] = stripslashes($new_instance['taxonomy']);

		return $instance;
	}

	function form( $instance ) {
		$title = isset( $instance['title'] ) ? esc_attr( $instance['title'] ) : '';
		?>
		<p>
			<label for="<?php echo $this->get_field_id( 'title' ); ?>"><?php _e( 'Title:', 'bookawesome' ); ?></label>
			<input class="widefat" id="<?php echo $this->get_field_id( 'title' ); ?>" name="<?php echo $this->get_field_name( 'title' ); ?>" type="text" value="<?php echo $title; ?>">
		</p>
		<p>
			<label for="<?php echo $this->get_field_id( 'taxonomy' ); ?>"><?php _e( 'Taxonomy:', 'bookawesome' ); ?></label>
			<select name="<?php echo $this->get_field_name( 'taxonomy' ); ?>" id="<?php echo $this->get_field_id( 'taxonomy' ); ?>" class="widefat">
				<option value="category" <?php ( isset( $instance['taxonomy'] ) ) ? selected( $instance['taxonomy'], 'category' ) : ''; ?>><?php _e('Category', 'bookawesome' ); ?></option>
				<option value="tags" <?php ( isset( $instance['taxonomy'] ) ) ? selected( $instance['taxonomy'], 'tags' ) : ''; ?>><?php _e('Tags', 'bookawesome' ); ?></option>
			</select>
		</p>
		<?php
	}
}