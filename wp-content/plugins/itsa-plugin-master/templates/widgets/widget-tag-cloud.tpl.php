<?php if ( !empty( $listCloud ) ) : ?>
    <aside id="tag_cloud-<?php echo esc_attr($args['widget_id']); ?>" class="widget col-md-3 ztl-footer-widget widget_tag_cloud">
        <h2 class="widget-title"><?php echo esc_html($instance['title']); ?></h2>
        <div class="tagcloud">
            <?php foreach ( $listCloud as $tag ) : 
                $tag_link = get_term_link( $tag );
                if ( is_wp_error( $tag_link ) ) {
                    continue;
                }

                $count = $tag->count;
                $font_size = 8 + ($count * 2); 
                ?>
                <a href="<?php echo esc_url( $tag_link ); ?>" 
                   class="tag-cloud-link tag-link-<?php echo esc_attr($tag->term_id); ?>" 
                   style="font-size: <?php echo esc_attr($font_size); ?>pt;" 
                   aria-label="<?php echo esc_attr($tag->name . ' (' . $count . ' items)'); ?>">
                    <?php echo esc_html( $tag->name ); ?>
                </a>
            <?php endforeach; ?>
        </div>
    </aside>
<?php endif; ?>
