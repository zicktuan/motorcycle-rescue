<section class="vc_section" style="position: relative; left: -135px; box-sizing: border-box; width: 1440px; padding-left: 135px; padding-right: 135px;">
    <div class="vc_row wpb_row vc_row-fluid">
        <div class="wpb_column vc_column_container vc_col-sm-6">
            <div class="vc_column-inner ">
                <div class="wpb_wrapper">
               
                    <div class="wpb_text_column wpb_content_element ">
                        <div class="wpb_wrapper">
                                <?php echo !empty($atts['itsa_about_infor__desc']) ? $atts['itsa_about_infor__desc'] : '' ?>
                        </div>
                    </div>
                    <?php $split_data = array_chunk($listItems, ceil(count($listItems) / 2)); ?>
                    <div class="vc_row wpb_row vc_inner vc_row-fluid">
                        <?php foreach ($split_data as $data_chunk): ?>
                            <div class="wpb_column vc_column_container vc_col-sm-6">
                                <div class="vc_column-inner">
                                    <div class="wpb_wrapper">
                                        <div class="wpb_raw_code wpb_content_element wpb_raw_html">
                                            <div class="wpb_wrapper">
                                                <ul class="ztl-list">
                                                    <?php foreach ($data_chunk as $item): ?>
                                                    <li><?php echo $item['title']?></li>
                                                    <?php endforeach ?>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <?php endforeach ?>
                    
                    </div>
                    <div class="vc_empty_space" style="height: 60px"><span class="vc_empty_space_inner"></span></div>
                </div>
            </div>
        </div>
        <div class="wpb_column vc_column_container vc_col-sm-6">
            <div class="vc_column-inner vc_custom_1514655011564">
                <div class="wpb_wrapper">
                    <h4 style="line-height:1.3;" class="ztl-title">
                    <?php echo !empty($atts['itsa_about_infor__title_sidebar']) ? $atts['itsa_about_infor__title_sidebar'] : '' ?></h4>
                    <div class="vc_empty_space" style="height: 20px"><span class="vc_empty_space_inner"></span></div>
                    <div class="vc_tta-container" data-vc-action="collapse">
                        <div class="vc_general vc_tta vc_tta-tabs vc_tta-color-grey vc_tta-style-classic vc_tta-shape-rounded vc_tta-spacing-1  ztl-tabs vc_tta-tabs-position-top vc_tta-controls-align-center">
                            <div class="vc_tta-panels-container">
                                <div class="vc_tta-panels">
                                    <div class="vc_tta-panel vc_active" id="1494880036945-447ce935-1452" data-vc-content=".vc_tta-panel-body">

                                        <div class="vc_tta-panel-body">
                                            <div class="wpb_text_column wpb_content_element ">
                                                <div class="wpb_wrapper">
                                                <?php echo !empty($atts['itsa_about_infor__content']) ? $atts['itsa_about_infor__content'] : '' ?>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <img src="<?php echo !empty($atts['itsa_about_infor_img']) ? wp_get_attachment_url($atts['itsa_about_infor_img']) : '' ?>">
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="vc_empty_space" style="height: 45px"><span class="vc_empty_space_inner"></span></div>
                </div>
            </div>
        </div>
    </div>
    
</section>