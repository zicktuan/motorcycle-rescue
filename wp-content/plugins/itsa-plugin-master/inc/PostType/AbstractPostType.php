<?php
namespace MyPlugin\PostType;

/**
 * @author lookawesome team
 * @version 1.0
 * @package posttype 
 * 
 * Abstract class post type
 */
abstract class AbstractPostType {

	protected $posType = '';

	public function __construct(){
		add_action( 'init', array($this, 'initPostType'), 0 );

		if( method_exists($this, 'metaBox') ) {
			$this->metaBox();
		}
	}

	/**
	 * Declare lable for post type
	 * @return array
	 */
	abstract function labels();

	/**
	 * Declare args data register for post type
	 * @return array
	 */
	abstract function argsRegister();

	/**
	 * get post type name handling for the object 
	 * @return string
	 */
	abstract function postTypeName();

	/**
	 * Hanlde register post type
	 * @return void
	 */
	public function initPostType(){
		register_post_type( $this->posType, $this->argsRegister() );
	}
}
