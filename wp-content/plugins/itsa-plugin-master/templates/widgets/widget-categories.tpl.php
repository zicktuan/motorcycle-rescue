<aside id="categories-1" class="widget widget_categories sidebar-right">
    <h2 class="widget-title"><?php echo isset($instance['title']) ? esc_html($instance['title']) : __('Danh mục', 'MXD'); ?></h2>
    <?php if (!empty($pages)) : ?>
        <ul>
            <?php foreach ($pages as $page) : ?>
                <li class="cat-item cat-item-<?php echo esc_attr($page->ID); ?>">
                    <a href="<?php echo esc_url(get_permalink($page->ID)); ?>" title="<?php echo esc_attr($page->post_title); ?>">
                        <?php echo esc_html($page->post_title); ?>
                    </a>
                </li>
            <?php endforeach; ?>
        </ul>
    <?php else : ?>
        <p><?php _e('Không có trang nào được chọn.', 'MXD'); ?></p>
    <?php endif; ?>
</aside>
