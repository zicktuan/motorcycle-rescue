
<section>
    <div>
        <div class="wpb_column ">
            <div>
                <div class="wpb_wrapper">
                    <?php if(!empty($atts['itsa_service_home_title'])):?>
                    <h2 style="line-height:1.5;" class="ztl-title  ztl-accent-font ztl-center ztl-font-semi-bold">
                        <?php echo $atts['itsa_service_home_title']?>
                    </h2>
                    <?php endif?>
                    <?php if(!empty($atts['itsa_service_home_desc'])):?>
                        <p style="line-height:1.5;" class="ztl-title  ztl-main-font ztl-center ztl-font-normal">
                            <?php echo $atts['itsa_service_home_desc']?>
                        </p>
                    <?php endif?>
                    
                    <div class="ztl-divider  center primary ">
                        <span class="ztl-main-divider">
                            <span></span>
                            <span></span>
                        </span>
                    </div>
                    <div style="height: 60px">
                        <span class="vc_empty_space_inner"></span>
                    </div>
                    
                    <div class="container">
                        <?php foreach (array_chunk($listItems, 3) as $row) : ?>
                            <div class="vc_row wpb_row vc_inner vc_row-fluid">
                                <?php foreach ($row as $service) : ?>
                                <div class="ztl-mobile-container ztl-mobile-center wpb_column vc_column_container vc_col-sm-4">
                                    <div class="vc_column-inner">
                                        <div class="wpb_wrapper">
                                            <div class="ztl-icon-container  ">
                                                <div class="ztl-flex ztl-mobile-container ztl-flex-center">
                                                    <div class="ztl-icon-wrapper">
                                                        <div class="ztl-icon" style="background-color:#f2f2f2;"></div>
                                                        <div class="ztl-icon-content">
                                                            <div class="ztl-icon-svg">
                                                                <img src="<?php echo !empty($service['img']) ? wp_get_attachment_url($service['img']) : '' ?>" class="img-fluid" alt="<?= htmlspecialchars($service['img']) ?>">
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="vc_empty_space" style="height: 20px"><span class="vc_empty_space_inner"></span></div>
                                            <h5 style="line-height:1.3;" class="ztl-title  ztl-accent-font ztl-center ztl-font-semi-bold">
                                                <?= htmlspecialchars($service['title']) ?>
                                            </h5>
                                            <div class="vc_empty_space" style="height: 15px"><span class="vc_empty_space_inner"></span></div>

                                            <div class="wpb_text_column wpb_content_element ">
                                                <div class="wpb_wrapper">
                                                    <p style="text-align: center;"><?= htmlspecialchars($service['desc']) ?></p>
                                                </div>
                                            </div>
                                            <div class="vc_empty_space" style="height: 20px"><span class="vc_empty_space_inner"></span></div>
                                        </div>
                                    </div>
                                </div>
                                <?php endforeach; ?>
                            </div>
                        <?php endforeach; ?>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>