<aside id="autoresq_recent_posts_widget-1" class="widget widget_autoresq_recent_posts_widget sidebar-right">
    <div class="ztl-widget-recent-posts-container ztl-widget-recent-posts-3">
        <h2 class="widget-title"><?php echo isset($instance['title']) ? esc_html__($instance['title'], 'bookawesome') : 'Bài tương tự'; ?></h2>
        <?php if (!empty($listPost)) : ?>
            <div class="ztl-widget-recent-posts">
                <ul class="recent-posts ztl-list-reset">
                    <?php foreach ($listPost as $value) : 
                        $thumb = wp_get_attachment_image_src(get_post_thumbnail_id($value->ID), 'itsa-thumbnail-320x168', false);
                        $thumb_url = !empty($thumb) ? $thumb[0] : get_template_directory_uri() . '/assets/default-thumbnail.jpg'; 
                    ?>
                    <li class="item-post clearfix">
                        <a href="<?php echo get_the_permalink($value->ID); ?>" title="<?php echo esc_attr($value->post_title); ?>">
                            <img width="300" height="300" src="<?php echo esc_url($thumb_url); ?>" class="attachment-autoresq-square-thumb size-autoresq-square-thumb wp-post-image" alt="<?php echo esc_attr($value->post_title); ?>" sizes="(max-width: 300px) 100vw, 300px">
                        </a>
                        <h6>
                            <a href="<?php echo get_the_permalink($value->ID); ?>" title="<?php echo esc_attr($value->post_title); ?>">
                                <?php echo esc_html($value->post_title); ?>
                            </a>
                        </h6>
                        <span class="ztl-recent-post-date ztl-date-line">
                            <a class="" href="<?php echo get_the_permalink($value->ID); ?>" target="_self">
                                <?php echo get_the_date('d/m/Y', $value->ID); ?>
                            </a>
                        </span>
                    </li>
                    <?php endforeach; ?>
                </ul>
            </div>
        <?php endif; ?>
    </div>
</aside>
