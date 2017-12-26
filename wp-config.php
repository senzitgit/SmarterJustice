<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'senzix15_sjustice');

/** MySQL database username */
define('DB_USER', 'senzix15_admin');

/** MySQL database password */
define('DB_PASSWORD', 'senzit123$%^');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'WtYDmrx}cwvoQ#KVU@Pdl$L+/^~:EZKp|N)]6k8gKjY<U$JD^%!7Y`!T7-[[x*-+');
define('SECURE_AUTH_KEY',  '~TM7i%|]1Wo6Q1kTEVx4F<N,<CU~L^Rb`po#~.J#o:h!VriZ{U2}w3Zw?_p9y?1D');
define('LOGGED_IN_KEY',    '&&C(<-DjE!qrFxyvOrY$2[BY T}6Mj?,DzQeQu}-,Y^u5(104C&sF&4m|viaL~Lo');
define('NONCE_KEY',        'tRJ;_&&G30E1fYUoY8:mowLHv6gb_C)4M[+C0Q#-9cu|>!H|EN saCr3$=D)Rt3 ');
define('AUTH_SALT',        't|JMYU891%%+&Ds|-|;%d+{^ec/kjW5<eq8TSgq@04:d{(a@3.ft]Gw82lL]}!I$');
define('SECURE_AUTH_SALT', '!-l#/jNUimr0x&e(S:^r1+k]jy;BrvDl9K,v[oIG|`XAG(w}@nb@Ly^I;@H4A1m^');
define('LOGGED_IN_SALT',   '0Z=2@(y7tJM@!5Izn_sjKee)c}g.>#*21;`3_l{_N2Z2$WI]3$(BTeNXJ+- ~T}0');
define('NONCE_SALT',       'h<7M+bpOP@{p.}3D~*HYmm<o+%=^D|z,%?=]|NSM3UWP;o}wyS@ga+DUm63z#X7C');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
