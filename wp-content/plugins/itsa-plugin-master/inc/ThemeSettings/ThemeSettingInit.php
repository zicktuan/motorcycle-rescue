<?php

namespace MyPlugin\ThemeSettings;

/**
 * @author lookawesome team
 * @version 1.0
 * @package ThemeSettings
 * 
 * Init object theme setting for theme MyPlugin
*/
class ThemeSettingInit 
{
	private $argsObjSetting = [];

	function __construct()
	{	
		$this->initOptionTree();
		add_action( 'init', array($this, 'initSettings'), 2 );
		add_action('admin_enqueue_scripts', array($this, 'registerScripts'));
		add_filter( 'ot_show_pages', '__return_false' );
		add_filter('ot_header_version_text', array($this, 'changeTitleForm'), 1 );
		add_action('admin_init', array($this, 'customMenuPage'));

	}

	public function initOptionTree(){
		require 'option-tree/ot-loader.php';
		require 'CustomOptionTreeInit.php';
	}

	public function initSettings(){
		$this->loadModuleSetting();
		$sections = [];
		$settings = [];

		foreach ($this->argsObjSetting as $objectSetting) {
			if (!isset($objectSetting->section['icon'])) {
				$sectionIcon = '<div class="dashicons dashicons-admin-generic"></div>';
			} else {
				$sectionIcon = $objectSetting->section['icon'];
			}
			$objectSetting->section['title'] = $sectionIcon . $objectSetting->section['title'];
			$sections[] = $objectSetting->section;

			foreach ($objectSetting->settings as $argsSetting) {
				$settings[] = $argsSetting;
			}
		}

		if (function_exists('ot_register_settings') && OT_USE_THEME_OPTIONS) {
			// Register the pages.
			ot_register_settings(
				array(
					array(
						'id'                  => $this->setSettingId(),
						'pages'               => array(
							array(
								'id'              => 'myplugin_option',
								'parent_slug'     => apply_filters('myplugin_option_parent_slug', 'themes.php'),
								'page_title'      => apply_filters('myplugin_option_page_title', __('My Plugin Settings', 'bookawesome')),
								'menu_title'      => apply_filters('myplugin_option_menu_title', __('My Plugin Settings', 'bookawesome')),
								'capability'      => apply_filters('myplugin_option_capability', 'edit_theme_options'),
								'menu_slug'       => apply_filters('myplugin_option_menu_slug', 'myplugin-options'),
								'icon_url'        => apply_filters('myplugin_option_icon_url', null),
								'position'        => apply_filters('myplugin_option_position', null),
								'updated_message' => apply_filters('myplugin_option_updated_message', __('Theme Options updated.', 'bookawesome')),
								'reset_message'   => apply_filters('myplugin_option_reset_message', __('Theme Options reset.', 'bookawesome')),
								'button_text'     => apply_filters('myplugin_option_button_text', __('Save Changes', 'bookawesome')),
								'sections'        => apply_filters('myplugin_option_sections', $sections),
								'settings'        => apply_filters('myplugin_option_settings', $settings)
							)
						)
					)
				)
			);
		}
	}

	public function loadModuleSetting (){
		$this->argsObjSetting[] = new AdminSettings\General;
		$this->argsObjSetting[] = new AdminSettings\Blog;
	}

	/**
	 * Custom style tab settings
	 */
	public function registerScripts()
	{
		// wp_enqueue_style('bas-admin-page-theme-option', AWETOUR_BASE_URL_PLUGIN . '/assets/backend/css/awe-admin-settings-page.min.css');
	}

	public function getSettings()
	{
		return get_option($this->setSettingId());
	}

	public function setSettingId()
	{
		return 'myplugin_option';
	}


	public function changeTitleForm(){
		return 'MyPlugin';
	}

	public function customMenuPage(){
		remove_submenu_page('themes.php', 'ot-theme-options');
	}
}