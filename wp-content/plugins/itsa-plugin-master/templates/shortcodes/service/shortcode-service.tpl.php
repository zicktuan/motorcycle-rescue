<div class="category-listing clearfix">
    <div class="container">
        <div class="row">
            <div class="ztl-flex-wrapper clearfix entry-content ">
                <?php if(!empty($listItems[0])): ?>
                <?php foreach ($listItems as $value):?>
                    <div class="ztl-service-item">
                        <div class="row table-row">
                            <div class="first ztl-col col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
                                <div class="ztl-flex">
                                    <div class="ztl-post-thumbnail" 
                                        style="background-image:url('<?php echo !empty($value['img']) ? wp_get_attachment_url($value['img']) : '' ?>');">
                                        <a href="<?php echo !empty($value['url']) ? $value['url'] : '#'?>" title="<?php echo !empty($value['title']) ? $value['title'] : ''?>"></a>
                                    </div>
                                    <div class="ztl-post-details">
                                        <div class="ztl-service-info ztl-font-bold">
                                            <span class="ztl-service-info-line" style="padding-right:0px;">
                                                <span><span>PHỤC VỤ </span>24/24 </span>
                                            </span>
                                        </div>
                                        <div class="ztl-service-title ztl-accent-font">
                                            <h3>
                                                <a href="<?php echo !empty($value['url']) ? $value['url'] : '#'?>" title="<?php echo !empty($value['title']) ? $value['title'] : ''?>"> 
                                                    <?php echo !empty($value['title']) ? $value['title'] : ''?>
                                                </a>
                                            </h3>
                                        </div>
                                        <div class="ztl-service-description">
                                        <?php echo !empty($value['desc']) ? $value['desc'] : ''?>
                                        </div>
                                        <div class="clear40"></div>
                                        <?php if (!empty($value['url'])) :?>
                                        <div class="ztl-button-one">
                                            <a href="<?php echo $value['url'] ?>" title="Vá xe tận nơi"> Chi tiết</a>
                                        </div>
                                        <?php endif ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <?php endforeach ?>
                <?php endif ?>
            </div>
        </div>
    </div>
</div>