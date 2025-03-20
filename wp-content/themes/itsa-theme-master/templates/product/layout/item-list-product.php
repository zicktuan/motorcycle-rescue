<?php 
    $thumbnail = get_the_post_thumbnail_url($post->ID, 'itsa-thumbnail');
    $urlImage  = HelpersFunction::basImageDefault($thumbnail);
?>
<div class="col-md-3 col-sm-6">
    <a href="<?php echo get_the_permalink($post->ID); ?>"></a>
    <div class="product_box">
        <a href="<?php echo get_the_permalink($post->ID); ?>"></a>
        <div class="product_box_image">
            <a href="<?php echo get_the_permalink($post->ID); ?>">
                <div class="content_image">
                    <div class="bg_flex">
                        <img alt="<?php echo !empty($post->post_title) ? esc_attr($post->post_title) : ''; ?>" data-src="<?php echo esc_url($urlImage); ?>" class="loaded" src="<?php echo esc_url($urlImage); ?>" data-was-processed="true">
                    </div>
                </div>
            </a>
            <a class="read_more" href="<?php echo get_the_permalink($post->ID); ?>">
                <div class="read_more_content">
                    Xem chi tiết
                    <span>
                        <i aria-hidden="true" class="fa fa-arrow-right">
                        </i>
                    </span>
                </div>
            </a>
        </div>
        <h3 class="product_box_name"><?php echo !empty($post->post_title) ? esc_attr($post->post_title) : ''; ?></h3>
    </div>
</div>