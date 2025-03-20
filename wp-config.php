<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'cuu-ho' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '@c<39Lr!2Hzw;gL2?6*%^G:o]IQx%)Rhgo`3]6T<^A!kK4He#*`KH:v5pI9*p~T)' );
define( 'SECURE_AUTH_KEY',  '(S3iB_V&1AXPK;UOFVC..[%XZ;Pz|u9w)TeJwdKV7`e&%i~^8NINZ0S|[>#C/fYn' );
define( 'LOGGED_IN_KEY',    'HoT5$g54,hu +?Mbj8lyG@R4I{B`q-$CmMNzR*BwH:&xc!^Ve3;yk>I9=@YG>bYR' );
define( 'NONCE_KEY',        'w`=I),kCdsXSqn)s.7P&&wElF#Q*Y|0yy9Br=e/`5XU+JVU3F$@:2pzm-.SI5RxN' );
define( 'AUTH_SALT',        '($w~GEH3HpH2vVH++Kk3H5lr^KW]=ct;hR|L: Wec$nUX8uBjOaxu#N5/`T=tH%t' );
define( 'SECURE_AUTH_SALT', 'ST`fvm7?*X#)]L:Q?qBB{@c/>qfPQ3$wf^&<W}NpDUr`|h!QH:M&37fK<G<KvUAn' );
define( 'LOGGED_IN_SALT',   'Na8Es5B$@yb&TXG;f3I<TQCH;p1,)F^d5($fYhd?2,5{I~I>~_JT!-L{2@5CV4D[' );
define( 'NONCE_SALT',       ')O7=4s4tQlZVn%/S<hSdQf1{kaT!|2x>0, Qo}[wm@=E<cs*PTvtT:#$3Wh_2HNF' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */
define( 'DISALLOW_FILE_MODS', true );
define( 'AUTOMATIC_UPDATER_DISABLED', true );
define( 'WP_AUTO_UPDATE_CORE', false );


/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
