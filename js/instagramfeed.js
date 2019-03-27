jQuery(document).ready(function() {
	const instaFeedWrap = jQuery('#instagramFeed');
	const instaId = instaFeedWrap.data('instaid');
	const maxPosts = instaFeedWrap.data('maxposts');
	const maxThumbSize = instaFeedWrap.data('thumbsize');

	let viewportW = jQuery(window).width(),
		postCount = maxPosts,
		thumbSize = maxThumbSize;
	if (viewportW < 1350) {
		postCount = 5; thumbSize = 2;
		if (viewportW < 1050) { postCount = 4; }
		if (viewportW < 720)  { postCount = 3; thumbSize = 1;}
	}

	let instaDataUrl = 'https://www.instagram.com/' + instaId;
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
				var thumbnailsData = value.node;
				if(i == postCount) {
					return false;
				} else {
					var thumbSrc  = thumbnailsData.thumbnail_resources[thumbSize].src,
						thumbWidth  = thumbnailsData.thumbnail_resources[thumbSize].config_width,
						thumbHeight = thumbnailsData.thumbnail_resources[thumbSize].config_height,
						postLink    = 'https://www.instagram.com/p/' + thumbnailsData.shortcode;
					var postContent = '<a href="'
							+ postLink +
							'" target ="_blank"><img src="'
							+ thumbSrc +
							'" width="'
							+ thumbWidth +
							'" height="'
							+ thumbHeight +
							'" /></a>';
					instaFeedWrap.append(postContent);
					}
				});
		}
	});
});