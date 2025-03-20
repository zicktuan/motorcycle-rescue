jQuery(document).ready(function($) {
	"use strict";

	/**
	 * Widget Banner
	 * @void
	 */
	var HONGDANG_WIDGET_BANNER = {
		banner : null,

		init : function(){
			// Init event click open media choose banner.
			this.handleChooseBanner();
		},

		handleChooseBanner: function(){
			var self = this;
			$('body').on('click',".hongdang-banner-image, .hongdang-banner-buttons button", function(e)
			{
				var self2 = $(this);
				e.preventDefault();
		        //If the uploader object has already been created, reopen the dialog
		        if (self.banner) {
		            self.banner.open();
		            return;
		        }

		        //Extend the wp.media object
		        self.banner = wp.media.frames.file_frame = wp.media({
		            title: 'Choose Image', 
		            button: {
		                text: 'Choose Image'
		            },
		            multiple: false
		        });
		        //When a file is selected, grab the URL and set it as the text field's value
		        self.banner.on('select', function(event) {
		            var selection = self.banner.state().get('selection');

		            selection.map( function( attachment ) {
						attachment = attachment.toJSON();
						var wrap = self2.closest('.hongdang-banner-wrap'),
							nameImage = wrap.find('#hongdang-images-name').val();
						wrap.find('.hongdang-banner-image').html('\
							<img src="' + attachment.url + '" />\n\
		                    <input type="hidden" name="' + nameImage + '" value="' + attachment.id + '" >\n\
						');
						wrap.find('.hongdang-banner-buttons button').text('Edit image');

					});
		        });

		        self.banner.open();
			});
		}
	}

	HONGDANG_WIDGET_BANNER.init();

});