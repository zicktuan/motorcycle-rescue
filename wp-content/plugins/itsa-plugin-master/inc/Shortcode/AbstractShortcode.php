<?php
namespace MyPlugin\Shortcode;
/**
 * Abstract class shortcode
 *
 * @package Shortcode core
 */

/**
 * Class AbstractShortcode
 *
 * @abstract
 */
abstract class AbstractShortcode extends \WPBakeryShortCode {

	/**
	 * Get shortcode name.
	 *
	 * @return string
	 * @abstract
	 */
	abstract public function get_name();

	/**
	 * Get shortcode icon url.
	 *
	 * @return string
	 */
	public function get_icon() {
		return '';
	}

	/**
	 * Get shortcode category.
	 *
	 * @return string Category name.
	 */
	public function get_category() {
		return esc_html__( 'Looks Awesome', 'bookawesome' );
	}
}
