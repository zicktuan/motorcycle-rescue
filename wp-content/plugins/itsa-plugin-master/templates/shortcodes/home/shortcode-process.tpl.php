<section>
    <div class="wpb_column vc_column_container" style="background-color:#f2f2f2;background-image: url(<?php echo !empty($atts['itsa_home_process_bg']) ? wp_get_attachment_url($atts['itsa_home_process_bg']) : '' ?>); height=100%">
        <div class="vc_column-inner" style="padding: 2.5em;">
            <?php if(!empty($atts['itsa_home_process_title'])):?>
            <h2 style="line-height:1.5;" class="ztl-title  ztl-accent-font ztl-center uppercase white-text">
                <?php echo $atts['itsa_home_process_title']?>
            </h2>
            <?php endif?>
            <?php if(!empty($atts['itsa_home_process_desc'])):?>
            <div class="ztl-title  ztl-accent-font ztl-center white-text">
                <p><?php echo $atts['itsa_home_process_desc'] ?></p>
            </div>
            <?php endif?>
            <div class="vc_row wpb_row vc_inner vc_row-fluid">
                <?php if(!empty($listItems[0])):?>
                    <?php foreach($listItems as $item): ?>

                    <div class="ztl-mobile-container ztl-mobile-center wpb_column vc_column_container vc_col-sm-3">
                        <div class="vc_column-inner">
                            <div class="wpb_wrapper">
                                <div class="ztl-icon-container  ">

                                    <img src="<?php echo !empty($item['img']) ? wp_get_attachment_url($item['img']) : '' ?>">

                                </div>
                                <div class="vc_empty_space" style="height: 20px"><span class="vc_empty_space_inner"></span></div>
                                <h5 style="line-height:1.3;" class="ztl-title  ztl-accent-font ztl-center ztl-font-semi-bold white-text">
                                    <?php echo !empty($item['step'])  ? $item['step'] : ''?>
                                    <br> <?php echo !empty($item['desc'])  ? $item['desc'] : ''?>
                                </h5>

                            </div>
                        </div>
                    </div>
                    <?php endforeach;?>
                <?php endif?>
                
                
            </div>
        </div>
    </div>
    <div class="vc_row-full-width vc_clearfix"></div>
</section>