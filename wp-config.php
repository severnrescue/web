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
define('DB_NAME', 'sara1');

/** MySQL database username */
define('DB_USER', 'vagrant');

/** MySQL database password */
define('DB_PASSWORD', 'vagrant');

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
define('AUTH_KEY',         'ufa8cK&epeO1`K|AXEV/g+u;rg:fC~g7X/QsaAd,_npxK1=A-vkp$pD&dD166<# ');
define('SECURE_AUTH_KEY',  '+&t-t1r%.xO-;+Gp:nJTU10hLpl.&C.nT-DGr/}-t;Au,fRhjW2;LjsV]VCkUt+F');
define('LOGGED_IN_KEY',    'G*A.eg3K~W_#VF17NEC?t~wXyGIy_U9Ag^l9~r)B7zbJRNL||}_|T|dHjAc+Ay&T');
define('NONCE_KEY',        '#0()3HO&GpB*t@MR-WT?851/+fKh_VExg6t|Upv+n2n2N+.w:md%^/N&-20!YrSJ');
define('AUTH_SALT',        '{AKR)]uFG~k6?1e#qiRhVy-d3d7uew-~G|.JmYjfB_8r|]np7O$:~Imy@}@-!n!Q');
define('SECURE_AUTH_SALT', '))nAZ^~xRf0b-iQH,h4S7J-{dsR7n<@c_uY90C_GJJ7v~f[cn{}67Mc/ekK0`)$-');
define('LOGGED_IN_SALT',   's0_2&t&1<whApGqpwNiQ)P#D-VR2t6]RjxA=C sctoI{-sk+|`S_^)hUVO-+/ksf');
define('NONCE_SALT',       'mF?oBTVXDVQGm7Mh$?aX5Re*~v|s/T.w*{lh:4I:?(kI?G`IX+x`QpM{+K1F9;3W');

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
