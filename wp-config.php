<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'neon website');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

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
define('AUTH_KEY',         'b04J&]zn43`LdP*=O5*0cUc}<2J]Wov>OZBcvg%_Z$/~aNa6e$>32lI.&s+5s]IX');
define('SECURE_AUTH_KEY',  'V9?7^?g197~qnWd}!Pi)jEbR^qb+--ijmaIBnLX!OO9f0Tu2An%JB5:n^8Xn#OBn');
define('LOGGED_IN_KEY',    'tYeS2*S{Ia[+%}cq}VN4#lm~iqw1u%2WAuo%QkAX7gi(.-N)N.9?d8>i7-dt&}An');
define('NONCE_KEY',        'b>Jaf5< r5(mPFBpC0mQJc9=bvsL9VyT:(1yj31+-sSFf(DOPu4eW-rpT!:gULtr');
define('AUTH_SALT',        'Zko{)qpfD/+B+$<RboTL=bk8}_9X),n>BJWb}oPhiA`|f,6^is|$v,DHTK5.qm~>');
define('SECURE_AUTH_SALT', 'ejZ$0-Sf{pT4]b|fBa~7Eqflqo&HG-jsiy9zo~%;h>JSV`A3X}H?7he$`r,RH RW');
define('LOGGED_IN_SALT',   ')a!$Gu8H~:83b)~)G3.vZ/dXQ-9FyDtQ#QidRmNG`d1YimWVcrW_|w.?NV0P ).@');
define('NONCE_SALT',       'dvUVTq9dZPNzGCmvsc4#>]aFv94?kj!2t/v`Mk&:KDXxO x^)v3VG(4l9B4J_nMx');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
