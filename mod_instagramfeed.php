<?php
/**
 * Instagram feed Module Entry Point
 * 
 * @package    Joomla
 * @subpackage Modules
 * @license    GNU/GPL, see LICENSE.php
 * @link       https://web-tiki.com
 * mod_instagramfeed is free software. This version may have been modified pursuant
 * to the GNU General Public License, and as distributed it includes or
 * is derivative of works licensed under the GNU General Public License or
 * other free or open source software licenses.
 */

// No direct access
defined('_JEXEC') or die;


// Get the params form the module configuration
$instagramFeed = JModuleHelper::getModule('instagramfeed');
$instagramFeedParams = new JRegistry($instagramFeed->params);


require JModuleHelper::getLayoutPath('mod_instagramfeed');