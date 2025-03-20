<div class="row">
    <div class="col-sm-12">
        <?php if(!empty($atts['itsa_feedback_home_title'])):?>
            <h2 style="line-height:1.5;" class="ztl-title  ztl-accent-font ztl-center ztl-font-semi-bold">
                <?php echo  $atts['itsa_feedback_home_title']?>
            </h2>
        <?php endif ?>
        <div class="ztl-divider  center primary ">
            <span class="ztl-main-divider">
                <span></span>
                <span></span>
            </span>
        </div>
        <div class="vc_empty_space" style="height: 60px"><span class="vc_empty_space_inner"></span></div>
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <!-- Carousel indicators -->
            
            <!-- Wrapper for carousel items -->
            <div class="carousel-inner">

                <div class="item carousel-item active">
                    <?php if(!empty($listItems[0])): ?>
                    <div class="row">
                    <?php foreach($listItems as $item): ?>
                        <div class="col-sm-6">
                                <div class="media row">
                                    <div class="media-left d-flex mr-3 vc_col-sm-4">
                                        <a href="#">
                                            <img src="<?php echo !empty($item['img']) ? wp_get_attachment_url($item['img']) : '' ?>" alt="">
                                        </a>
                                    </div>

                                    <div class="testimonial vc_col-sm-8">
                                        <p><?php echo !empty($item['desc']) ? $item['desc'] : ''?></p>
                                        <?php if(!empty($item['name'])):?>
                                        <p class="overview">Khách hàng: <b><?php echo $item['name']?></b></p>
                                        <?php endif ?>
                                        <?php if(!empty($item['address'])):  ?>
                                        <p class="overview">Địa điếm: <b><?php echo $item['address']?></b></p>
                                        <?php endif ?>
                                    </div>

                                </div>
                            </div>
                    <?php endforeach ?>
                    </div>
                    <?php endif ?>
                        
                </div>

            </div>
        </div>
    </div>
</div>