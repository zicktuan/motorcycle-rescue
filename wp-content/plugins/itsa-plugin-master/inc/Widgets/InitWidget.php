<?php
namespace MyPlugin\Widgets;

/**
* @package Widgets
* @version 1.0
* @author lookawesome team
*
* Class init widget for theme
*/
class InitWidget 
{
	function __construct() {
		add_action( 'widgets_init', array($this, 'includeTemplate') );
		add_action( 'admin_enqueue_scripts', array( $this, 'loadScripts' ) , 1000000000);
		add_action( 'admin_enqueue_scripts', array( $this, 'loadStyles' ) , 1000000000);
	}

	/**
	 * Handle register template.
	 * @return void
	 */
	public function includeTemplate() {
		register_widget('MyPlugin\Widgets\WidgetRecentPost' );
		register_widget('MyPlugin\Widgets\WidgetFooterService' );
		register_widget('MyPlugin\Widgets\WidgetFooterPost' );
		register_widget('MyPlugin\Widgets\WidgetCategory' );
		register_widget('MyPlugin\Widgets\WidgetTag' );
	}

	// import file javascript
	public function loadScripts(){
		wp_enqueue_script('hd-widget-banner-js', MYPLUGIN_BASE_URL_PLUGIN.'/assets/backend/js/widget/banner.js', "", '1.0', true);
		wp_enqueue_script('hd-widget-support-js', MYPLUGIN_BASE_URL_PLUGIN.'/assets/backend/js/widget/support.js', "", '1.0', true);
	}

	// import file css
	public function loadStyles(){
		wp_enqueue_style('hd-widget-banner', MYPLUGIN_BASE_URL_PLUGIN.'/assets/backend/css/widget/banner.css');
		wp_enqueue_style('hd-widget-support', MYPLUGIN_BASE_URL_PLUGIN.'/assets/backend/css/widget/support.css');
	}
}