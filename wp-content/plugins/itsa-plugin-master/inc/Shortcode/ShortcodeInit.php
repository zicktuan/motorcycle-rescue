<?php
namespace MyPlugin\Shortcode;


use MyPlugin\Shortcode\Home\ShortcodeAbout;
use MyPlugin\Shortcode\ShortcodeNews;
use MyPlugin\Shortcode\Home\ShortcodeSlide;
use MyPlugin\Shortcode\Home\ShortcodeProcess;
use MyPlugin\Shortcode\Home\ShortcodeFeedback;
use MyPlugin\Shortcode\Home\ShortcodeService;
use MyPlugin\Shortcode\About\ShortcodeInformation;
use MyPlugin\Shortcode\ShortcodeContainer;
use MyPlugin\Shortcode\ShortcodeEndContainer;
use MyPlugin\Shortcode\About\ShortcodeAboutBanner;
use MyPlugin\Shortcode\Service\ShortcodeService as Service;
use MyPlugin\Shortcode\Service\ShortcodeServiceDetail;
use MyPlugin\Shortcode\ShortcodeContact;

/**
 * @author lookawesome team
 * @version 1.0
 * @package Shortcode
 * 
 * Init shortCode for theme lookAwesome
*/
class ShortcodeInit 
{
	function __construct() {
		add_action( 'plugins_loaded', array($this, 'includeTemplate') );
	}

	public function includeTemplate() {
        
		new ShortcodeProcess($this);
		new ShortcodeAbout($this);
		new ShortcodeService($this);
		new ShortcodeFeedback($this);
		new ShortcodeNews($this);
		new ShortcodeSlide($this);
		new ShortcodeInformation($this);
		new ShortcodeContainer($this);
		new ShortcodeEndContainer($this);
		new ShortcodeAboutBanner($this);
		new Service($this);
		new ShortcodeServiceDetail($this);
		new ShortcodeContact($this);
	}

	/**
	 * Get template path.
	 *
	 * @param  string $filename Filename with extension.
	 * @return string           Template path.
	 */
	public function locateTemplate( $filename ) {
		$theme_dir = apply_filters( 'lookawesome_shortcode_template_theme_dir', 'shortcodes/' );
		$plugin_path = MYPLUGIN_PLUGIN_DIR . 'templates/shortcodes/';

		$path = '';

		if ( locate_template( $theme_dir . $filename ) ) {
			$path = locate_template( $theme_dir . $filename );
		} elseif ( file_exists( $plugin_path . $filename ) ) {
			$path = $plugin_path . $filename;
		}

		return apply_filters( 'lookawesome_shortcode_locate_template', $path, $filename );
	}
}
