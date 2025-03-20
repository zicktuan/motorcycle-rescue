<?php
/*
Plugin Name: Solution Architect
Plugin URI: https://lookawesome.net/
Description: Plugin support for theme lookAwesome.
Version: 1.0
Author: Nguyen Anh Tuan
Author URI: https://lookawesome.net/
License: GPLv2 or later
Text Domain: bookawesome
*/
 
if ( ! defined( 'ABSPATH' ) ) {
	exit( 'No direct script access allowed' );
}

define( 'MYPLUGIN_FILE', __FILE__ );
define( 'MYPLUGIN_FILENAME', basename( __FILE__ ) );
define( 'MYPLUGIN_PLUGIN_NAME', plugin_basename( dirname( __FILE__ ) ) );
define( 'MYPLUGIN_PLUGIN_DIR', trailingslashit( __DIR__ ) );
define( 'MYPLUGIN_BASE_URL_PLUGIN', untrailingslashit( plugins_url( '', MYPLUGIN_FILE ) ) );
define( 'MYPLUGIN_VERSION','1.0' );

require_once 'inc/MyPlugin.php'; 