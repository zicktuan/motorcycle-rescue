<?php 

namespace MyPlugin\ThemeSettings;

/**
 * @author lookawesome team
 * @version 1.0
 * @package ThemeSettings
 * 
 * Abstract factory theme setting
*/
abstract class SettingFactory 
{	
	public $section = null;
	public $settings = null;

	protected $fieldsSettings = [];

	public function __construct(){
		$this->section = $this->section();	
		$this->settings = $this->settings();	
	}

	public function setListSettings($settings)
	{
		foreach ($settings as $item) {
			$this->fieldsSettings[] = $item;
		}
	}
	
	abstract public function section();

	abstract public function settings();
}