<?php
namespace MyPlugin\Widgets;

/**
* @package Widgets
* @version 1.0
* @author lookawesome team
*
* Class abstract widget for theme
*/
abstract class AbstractWidget extends \WP_Widget {

	/**
	 * Get template path.
	 *
	 * @param  string $filename Filename with extension.
	 * @return string           Template path.
	 */
	public function locateTemplate( $filename ) {

		$theme_dir = apply_filters('lookawesome_widget_template_theme_dir', 'widgets/' );
		$plugin_path = MYPLUGIN_PLUGIN_DIR . 'templates/widgets/';

		$path = '';

		if ( locate_template( $theme_dir . $filename ) ) {
			$path = locate_template( $theme_dir . $filename );
		} elseif ( file_exists( $plugin_path . $filename ) ) {
			$path = $plugin_path . $filename;
		}

		return apply_filters('lookawesome_widget_locate_template', $path, $filename );
	}
}
