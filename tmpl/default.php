<?php 
// No direct access
defined('_JEXEC') or die; 


$document = JFactory::getDocument();
$document->addStyleSheet('modules/mod_instagramfeed/css/instagramfeed.css');
$document->addScript('modules/mod_instagramfeed/js/instagramfeed.js');
?>
<div class="instagramFeedWrap">
    <p>Sur instagram</p>
    <h2 class="instagramFeedUser">
        <a href="https://instagram.com/<?php echo $instagramFeedParams['instaID']; ?>" target="_blank" >
            @<?php echo $instagramFeedParams['instaID']; ?>
        </a>
    </h2>
    <div id="instagramFeed"
        data-instaid="<?php echo $instagramFeedParams['instaID']; ?>"
        data-maxposts="<?php echo $instagramFeedParams['postNb']; ?>"
        data-thumbsize="<?php echo $instagramFeedParams['thumbSize']; ?>"></div>
</div>