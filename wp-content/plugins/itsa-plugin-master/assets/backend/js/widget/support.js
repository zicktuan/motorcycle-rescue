jQuery(document).ready(function($) {
	"use strict";

	/**
	 * Widget Support
	 * @void
	 */
	var HONGDANG_WIDGET_SUPPORT = {
		icon : null,

		init : function() {
			this.handleAddDepartment();
			this.handleAddHotline();
			this.handleChooseIcon();
			this.handleRemoveDepartment();
			this.handleRemoveHotline();
		},

		handleAddDepartment: function(){
			$('body').on('click',".hd_support_department_add", function(e)
			{
				var num = parseInt( $(".hd_support_department_item").last().attr('data-num') );
				if ( isNaN(num) ) { num = 0 }
				var support_name_id = $(this).closest(".hd_support_wrap").find('.hd_support_name_id').val();
				var department_wrap = $(this).closest(".hd_support_wrap").find(".hd_support_department_wrap");
				department_wrap.append('\
					<div class="hd_support_department_item" data-num="'+ (num + 1) +'">\
						<label>Name department</label> \
						<input type="text" name="'+ support_name_id +'['+ (num + 1) +'][title]"><br>\
						<label>List hotline:</label> \
						<div class="hd_support_hotline_wrap">\
						</div>\
						<span class="hd_support_hotline_add">Add hotline</span>\
						<div class="hd_support_department_item_del"><span class="dashicons dashicons-no"></span></div>\
					</div>');
			});
		},

		handleAddHotline: function(){
			$('body').on('click',".hd_support_hotline_add", function(e)
			{
				var numDep = parseInt( $(this).closest(".hd_support_department_item").attr('data-num') );
				var numHot = parseInt( $(this).closest(".hd_support_department_item").find(".hd_support_hotline_item").last().attr('data-num') );
				if ( isNaN(numHot) ) { numHot = 0 }
				var support_name_id = $(this).closest(".hd_support_wrap").find('.hd_support_name_id').val();
				var hotline_wrap = $(this).closest(".hd_support_department_item").find(".hd_support_hotline_wrap");
				hotline_wrap.append('\
					<div class="hd_support_hotline_item" data-num="'+ (numHot + 1) +'">\
						<label>Icon: </label>\
						<span class="hd_support_icon_img"></span>\
						<span class="hd_support_icon_add">Chosse image</span><br>\
						<label>Title </label> \
						<input type="text" name="'+ support_name_id +'['+ (numDep ) +'][value]['+ ( numHot + 1 ) +'][hotline]"><br>\
						<label>Desc </label> \
						<input type="text" name="'+ support_name_id +'['+ (numDep ) +'][value]['+ ( numHot + 1 ) +'][phone]"><br>\
						<div class="hd_support_hotline_item_del"><span class="dashicons dashicons-no"></span></div>\
					</div>');
			});
		},

		handleChooseIcon: function(){
			var self = this;
			$('body').on('click',".hd_support_icon_add", function(e)
			{
				var self2 = $(this);
				e.preventDefault();

		        //Extend the wp.media object
		        self.icon = wp.media.frames.file_frame = wp.media({
		            title: 'Choose Image', 
		            button: {
		                text: 'Choose Image'
		            },
		            multiple: false
		        });
		        //When a file is selected, grab the URL and set it as the text field's value
		        self.icon.on('select', function(event) {
		            var selection = self.icon.state().get('selection');

		            selection.map( function( attachment ) {
						attachment = attachment.toJSON();
						var support_name_id = self2.closest(".hd_support_wrap").find('.hd_support_name_id').val();
						var numDep = parseInt( self2.closest(".hd_support_department_item").attr('data-num') );
						var numHot = parseInt( self2.closest(".hd_support_hotline_item").attr('data-num') );
						var wrap = self2.closest('.hd_support_hotline_item');
						wrap.find('.hd_support_icon_img').html('\
							<img src="' + attachment.url + '" />\n\
		                    <input type="hidden" name="'+ support_name_id +'['+ (numDep ) +'][value]['+ ( numHot ) +'][icon]" value="' + attachment.id + '" >\n\
						');

					});
		        });

		        self.icon.open();
			});
		},

		handleRemoveDepartment: function(){
			$('body').on('click',".hd_support_department_item_del", function(e)
			{
				$(e.currentTarget).closest(".hd_support_department_item").remove();
			});
		},

		handleRemoveHotline: function(){
			$('body').on('click',".hd_support_hotline_item_del", function(e)
			{
				$(e.currentTarget).closest(".hd_support_hotline_item").remove();
			});
		}
	}

	HONGDANG_WIDGET_SUPPORT.init();

});