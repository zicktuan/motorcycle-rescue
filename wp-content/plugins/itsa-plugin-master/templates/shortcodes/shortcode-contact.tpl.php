<article id="post-314" class="post-314 page type-page status-publish hentry">
    <div class="entry-content">
        <div class="vc_empty_space" style="height: 25px">
            <span class="vc_empty_space_inner"></span>
        </div>
        <div class="vc_row-full-width vc_clearfix"></div>
        <div data-vc-full-width="true" data-vc-full-width-init="true" class="vc_row wpb_row vc_row-fluid" style="position: relative; left: -135px; box-sizing: border-box; width: 1440px; padding-left: 135px; padding-right: 135px;">
            <?php if(!empty($listItems[0])): ?>
                <?php foreach ($listItems as $value):?>
                <div class="wpb_column vc_column_container vc_col-sm-3">
                    <div class="vc_column-inner">
                        <div class="wpb_wrapper">
                            <div class="ztl-icon-container  ">
                                <div class="ztl-flex ztl-mobile-container ztl-flex-center">
                                    <div class="ztl-icon-wrapper">
                                        <div class="ztl-icon" style="background-color:#f2f2f2;"></div>
                                        <div class="ztl-icon-content">
                                            <div class="ztl-icon-svg">
                                                <img src="<?php echo !empty($value['img']) ? wp_get_attachment_url($value['img']) : '' ?>">
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="vc_empty_space" style="height: 20px"><span class="vc_empty_space_inner"></span></div>
                            <h5 style="line-height:1.3;" class="ztl-title  ztl-accent-font ztl-center ztl-font-semi-bold">
                            <?php echo !empty($value['title']) ? $value['title'] : ''?>
                            </h5>
                            <div class="vc_empty_space" style="height: 15px"><span class="vc_empty_space_inner"></span></div>

                            <div class="wpb_text_column wpb_content_element  ztl-contact-box">
                                <div class="wpb_wrapper">
                                    <?php echo !empty($value['desc']) ? $value['desc'] : ''?>
                                </div>
                            </div>
                            <div class="vc_empty_space" style="height: 25px"><span class="vc_empty_space_inner"></span></div>
                        </div>
                    </div>
                </div>
                <?php endforeach?>
            <?php endif ?>
        </div>
    </div>
    <div class="vc_row-full-width vc_clearfix"></div>
</article>