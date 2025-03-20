<div class="row">
    <div class="clearfix col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <article id="post-6227" class="post-6227 service type-service status-publish has-post-thumbnail hentry services_taxonomy-mechanical">
            <div class="entry-content">
                <section data-vc-full-width="true" data-vc-full-width-init="true" class="vc_section vc_custom_1487248683356 vc_section-has-fill" style="position: relative; left: -135px; box-sizing: border-box; width: 1440px; padding-left: 135px; padding-right: 135px;">
                    <div class="vc_row wpb_row vc_row-fluid">
                        <div class="wpb_column vc_column_container vc_col-sm-5">
                            <div class="vc_column-inner vc_custom_1514654999659">
                                <div class="wpb_wrapper">
                                    <div class="vc_empty_space" style="height: 5px"><span class="vc_empty_space_inner"></span></div>
                                    
                                    <div class="vc_empty_space" style="height: 30px"><span class="vc_empty_space_inner"></span></div>

                                    <div class="wpb_text_column wpb_content_element ">
                                        <div class="wpb_wrapper">
                                            <p><?php echo !empty($atts['itsa_service_detail_desc']) ? $atts['itsa_service_detail_desc'] : '' ?></p>
                                        </div>
                                    </div>

                                    <div class="wpb_raw_code wpb_content_element wpb_raw_html">
                                        <div class="wpb_wrapper">
                                        <?php if(!empty($listItems[0])):?>
                                            <ul class="ztl-list">
                                                <?php foreach ($listItems as $value):?>
                                                <li><?php echo !empty($value['title'])  ? $value['title'] : '' ?></li>
                                                <?php endforeach?>
                                            </ul>
                                        <?php endif;?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="wpb_column vc_column_container vc_col-sm-7">
                            <div class="vc_column-inner vc_custom_1514655011564">
                                <div class="wpb_wrapper">
                                    <div class="vc_empty_space" style="height: 5px">
                                        
                                    <span class="vc_empty_space_inner"></span></div>
                                    <h4 style="line-height:1.3;" class="ztl-title ztl-mobile-center ztl-main-font ztl-left ztl-font-normal">
                                    <?php echo !empty($atts['itsa_service_detail_title']) ? $atts['itsa_service_detail_title'] : '' ?></h4>
                                    <div class="vc_empty_space" style="height: 50px"><span class="vc_empty_space_inner"></span></div>

                                    <div class="wpb_raw_code wpb_content_element wpb_raw_html">
                                        <div class="wpb_wrapper">
                                            <table class="ztl-table">
                                                <thead>
                                                    <tr>
                                                        <th><strong>Dịch vụ <br> Service</strong></th>
                                                        <th><strong>Ban ngày (6:00 - 20:00) <br> Daytime</strong></th>
                                                        <th><strong>Ban đêm (20:00 - 06:00) <br> Nighttime</strong></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <?php if(!empty($listItems2[0])):?>
                                                        <?php foreach($listItems2 as $item):?>
                                                    <tr>
                                                        <td><strong><?php echo !empty($item['title']) ? $item['title'] : ''?></strong></td>
                                                        <td><?php echo !empty($item['day_price']) ? $item['day_price'] : ''?></td>
                                                        <td><?php echo !empty($item['night_price']) ? $item['night_price'] : ''?></td>
                                                    </tr>
                                                    <?php endforeach;?>
                                                    <?php endif; ?>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="vc_row-full-width vc_clearfix"></div>
                    
                </section>
                <div class="vc_row-full-width vc_clearfix"></div>
            </div>
        </article>
    </div>
</div>