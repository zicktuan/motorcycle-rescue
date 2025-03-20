

<div data-vc-full-width="true" data-vc-full-width-init="true" class="vc_row wpb_row vc_row-fluid vc_custom_1515338910003 vc_row-has-fill" style="position: relative; left: -127.5px; box-sizing: border-box; width: 1425px; padding-left: 127.5px; padding-right: 127.5px; background-color: #f2f2f2 !important;">
    <div class="wpb_column vc_column_container vc_col-sm-12">
        <div class="vc_column-inner vc_custom_1480863659858">
            <div class="wpb_wrapper">
                <div class="ztl-announcement  ">
                    <div class="row table-row">
                        <div class="ztl-col col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12 ">
                            <div class="ztl-flex ztl-mobile-container">
                                <div class="ztl-icon left" style="background-color:#ffffff;"></div>
                                <div class="ztl-icon-content">
                                    <div class="ztl-icon-svg">
                                        <img src="<?php echo !empty($atts['itsa_home_about_img']) ? wp_get_attachment_url($atts['itsa_home_about_img']) : '' ?>">
                                    </div>
                                </div>
                                <div class="content" style="color:#313131;">
                                    <div class="line-1">
                                        <h3><?php echo $atts['itsa_home_about_title'] ? $atts['itsa_home_about_title'] : ''?></h3>
                                    </div>
                                    <div class="line-2">
                                        <?php echo $atts['itsa_home_about_desc'] ? $atts['itsa_home_about_desc'] : ''?>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <?php if (!empty($atts['itsa_home_about_hot_line'])):?>
                        <div class="ztl-action ztl-col col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                            <div class="ztl-button-one">
                                <a href="tel:<?php echo $atts['itsa_home_about_hot_line'] ?>" target="_self">
                                    HOTLINE:<?php echo $atts['itsa_home_about_hot_line'] ?>
                                </a>
                            </div>
                        </div>

                        <?php endif ?>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="vc_row-full-width vc_clearfix"></div>