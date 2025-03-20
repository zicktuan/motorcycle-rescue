<?php
namespace MyPlugin\Taxonomies;

/**
 * @author lookawesome team
 * @version 1.0
 * @package taxonomie 
 * 
 * Abstract class taxonomie
 */
abstract class AbstractTaxonomies {

	protected $taxonomie = '';

	protected $argsPostType = [];

	public function __construct(){
		add_action( 'init', array($this, 'initTaxonomie'), 0 );
	}

	/**
	 * Declare lable for taxonomie
	 * @return array
	 */
	abstract function labels();

	/**
	 * Declare args data register for taxonomie
	 * @return array
	 */
	abstract function argsRegister();

	/**
	 * get taxonomie name handling for the object 
	 * @return string
	 */
	abstract function taxonomieName();

	/**
	 * Hanlde register taxonomies
	 * @return void
	 */
	public function initTaxonomie(){
		register_taxonomy( $this->taxonomie, $this->argsPostType ,$this->argsRegister() );
	}
}
