var viewportW = jQuery(window).width(),
	postCount = 6,
	thumbSize = 3;
if (viewportW < 1350) {
	postCount = 5; thumbSize = 2;
	if (viewportW < 1050) { postCount = 4; }
	if (viewportW < 720)  { postCount = 3; thumbSize = 1;}
}

let instaDataUrl = 'https://www.instagram.com/sam_va_photographie';
jQuery.ajax({
	type: 'GET',
	url: instaDataUrl,
	error: function () {
		console.log('Error fetching instgram data');
	},
	success: function (data) {
		var instaData = JSON.parse(data.split("window._sharedData = ")[1].split(";<\/script>")[0]).entry_data.ProfilePage[0].graphql;
		var media = instaData.user.edge_owner_to_timeline_media.edges;
		jQuery.each(media, function(i, value) {
			if(i == postCount) {
				return false;
			} else {
				var thumbSrc = value.node.thumbnail_resources[thumbSize].src,
					thumbWidth = value.node.thumbnail_resources[thumbSize].config_width,
					thumbHeight = value.node.thumbnail_resources[thumbSize].config_height,
					postCode = value.node.shortcode,
					postLink = 'https://www.instagram.com/p/' + postCode;
				var postContent = '<a href="'
						+ postLink +
						'" target ="_blank"><img src="'
						+ thumbSrc +
						'" width="'
						+ thumbWidth +
						'" height="'
						+ thumbHeight +
						'" /></a>';
				jQuery('#instaFeed').append(postContent);
		    }
	    });
	}
});