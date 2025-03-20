<?php if ( !empty( $pages ) ) : ?>
    <aside id="custom_html-<?php echo esc_attr($args['widget_id']); ?>" class="widget_text widget col-md-3 ztl-footer-widget widget_custom_html">
        <h2 class="widget-title"><?php echo esc_html( $instance['title'] ); ?></h2>
        <div class="textwidget custom-html-widget">
            <ul>
                <?php foreach ( $pages as $page ) : ?>
                    <li>
                        <a href="<?php echo esc_url( get_permalink( $page->ID ) ); ?>">
                        <i class="fa-solid fa-badge-check"></i>
                            <?php echo esc_html( $page->post_title ); ?>
                        </a>
                    </li>
                <?php endforeach; ?>
            </ul>
        </div>
    </aside>
<?php endif; ?>
