<?php

if (!defined('ABSPATH')) {
	exit('No direct script access allowed');
}

/**
 * @package AwesomeTheme
 * @version 1.0
 * @author Nguyen Anh Tuan
 *
 * Class Init for theme
 */
class AwesomeTheme {
	static $getInstance = null;

	public $version = '1.0';

	public static function getInstance() {
		if (!(self::$getInstance instanceof self)) {
			self::$getInstance = new self();
		}
		return self::$getInstance;
	}

	protected function __construct() {
		include get_template_directory() . '/inc/AfterSetupTheme.php';
		
		add_filter('pre_site_transient_update_core','remove_core_updates');
		add_filter( 'auto_update_theme', '__return_false' );
		add_filter('pre_site_transient_update_themes','remove_core_updates'); 
		add_filter( 'auto_update_plugin', '__return_false' );
		add_filter('pre_site_transient_update_plugins','remove_core_updates');
		// Init scripts for theme.
		$this->AwesomeScripts();
		$this->includeFunction();
		$this->frontendAjaxClass();
	}

	/**
	 * AwesomeScripts
	 * Load library object script.
	 *
	 * @return void
	 */
	protected function AwesomeScripts() {
		require_once 'inc/AwesomeScripts.php';
		new AwesomeScripts;
	}

    /**
     * Include file Function handle
     * @return void
     */
    public function includeFunction(){
        require_once get_template_directory() . '/inc/Helpers/HelpersFunction.php';
        return HelpersFunction::getInstance();
    }

    public function frontendAjaxClass() {
        require_once get_template_directory() . '/inc/Ajax/FrontendAjax.php';
        new FrontendAjax();
    }

	// public function postTemplateInit()
    // {
    //     require_once get_template_directory() . '/inc/params/templates/post/PostTemplateInit.php';
    //     return PostTemplateInit::getInstance();
    // }

	public function categoryTemplateInit()
    {
        require_once get_template_directory() . '/inc/params/templates/category/CategoryTemplateInit.php';
		return CategoryTemplateInit::getInstance();
    }
}

function AwesomeTheme() {
	return AwesomeTheme::getInstance();
}

$GLOBALS['awesomeTheme'] = AwesomeTheme();

require_once( 'inc/Classes/CustomPrimaryMenuWalker.php' );
