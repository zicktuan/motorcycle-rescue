<?php if ( !empty( $recent_posts ) ) : ?>
    <aside id="autoresq_recent_posts_widget-2" class="widget col-md-3 ztl-footer-widget widget_autoresq_recent_posts_widget">
        <div class="ztl-widget-recent-posts-container ztl-widget-recent-posts-2">
            <h2 class="widget-title">Tin tức</h2>
            <div class="ztl-widget-recent-posts">
                <ul class="recent-posts ztl-list-reset">
                    <?php foreach ( $recent_posts as $post ) : ?>
                        <li class="item-post clearfix">
                            <a href="<?php echo esc_url( get_permalink( $post->ID ) ); ?>" title="<?php echo esc_attr( $post->post_title ); ?>">
                                <?php if ( has_post_thumbnail( $post->ID ) ) : ?>
                                    <?php echo get_the_post_thumbnail( $post->ID, 'medium' ); ?>
                                <?php else : ?>
                                    <img width="300" height="300" src="https://via.placeholder.com/300" class="attachment-autoresq-square-thumb size-autoresq-square-thumb wp-post-image" alt="No Image">
                                <?php endif; ?>
                            </a>
                            <h6>
                                <a href="<?php echo esc_url( get_permalink( $post->ID ) ); ?>" title="<?php echo esc_attr( $post->post_title ); ?>">
                                    <?php echo esc_html( $post->post_title ); ?>
                                </a>
                            </h6>
                            <span class="ztl-recent-post-date ztl-date-line">
                                <a href="<?php echo esc_url( get_permalink( $post->ID ) ); ?>" title="<?php echo esc_attr( $post->post_title ); ?>">
                                    <span><?php echo get_the_date( 'd //', $post->ID ); ?></span> <?php echo get_the_date( 'M Y', $post->ID ); ?>
                                </a>
                            </span>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </div>
        </div>
    </aside>
<?php endif; ?>
