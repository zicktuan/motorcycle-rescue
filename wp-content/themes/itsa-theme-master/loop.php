<?php
global $myplugin;
$pageId = get_queried_object_id();
$pageTitle = get_the_title($pageId);
$optionTheme  = $myplugin->themeSettings->getSettings();
$banner = $optionTheme['blog_bg'];
?>

<div class="header-image ztl-breadcrumb-show">
    <div class="ztl-header-image" style="background-color:#f2f2f2;background-image: url(<?php echo $banner ?>)">
        <div class="container">
            <h1 class="ztl-accent-font custom-header-title" style="color:#ffffff;">
                <?php echo !empty($optionTheme['blog_header_title_bg']) ? $optionTheme['blog_header_title_bg'] : ''?></h1>

        </div>
    </div>
    <div class="ztl-breadcrumb-container">
        <div class="container">
            <nav role="navigation" aria-label="Breadcrumbs" class="breadcrumb-trail breadcrumbs" itemprop="breadcrumb">
                <ul class="trail-items" itemscope="" itemtype="">
                    <meta name="numberOfItems" content="2">
                    <meta name="itemListOrder" content="Ascending">
                    <li itemprop="itemListElement" itemscope="" class="trail-item trail-begin">
                        <a href="<?php echo home_url()?>" rel="home" itemprop="item"><span itemprop="name">Trang chủ</span></a>
                        <meta itemprop="position" content="1">
                    </li>
                    <li itemprop="itemListElement" itemscope="" class="trail-item trail-end">
                        <span itemprop="item">
                            <span itemprop="name"> <?php echo !empty($optionTheme['blog_header_sub_title_bg']) ? $optionTheme['blog_header_sub_title_bg'] : ''?></span></span>
                        <meta itemprop="position" content="2">
                    </li>
                </ul>
            </nav>
        </div>
    </div>
     
</div>
<div id="content" class="site-content" style="padding-bottom: 745px;">
    <div class="category-listing clearfix content-area">
        <div class="container">
            <div class="row">
                <div class="clearfix ztl-full-width-template col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
                        <article class="myportfolio-container rotor-navigation source_type_post" id="esg-grid-8-custom_post-1-wrap" style="position: relative; z-index: 0; min-height: 100px; height: auto;">
                            <div class="esg-container-fullscreen-forcer" style="position: relative; left: 0px; top: 0px; width: auto; height: auto;">
                                <div id="esg-grid-8-custom_post-1" class="esg-grid esg-layout-masonry esg-container" style="background: transparent; box-sizing:border-box; -moz-box-sizing:border-box; -webkit-box-sizing:border-box;">
                                    <div class="esg-overflowtrick" style="width: 100%; ">
                                        <ul class="mainul row" style="">
                                       <?php 
                                        $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;

                                        $args = array(
                                            'post_type'      => 'post',  // Loại bài viết (có thể thay đổi nếu bạn dùng custom post type)
                                            'posts_per_page' => 10,       // Số bài viết mỗi trang
                                            'paged'          => $paged   // Sử dụng biến phân trang
                                        );
                                        
                                        $query = new WP_Query($args);
                                       ?>
                                        <?php if ( $query->have_posts() ) : while ( $query->have_posts() ) : $query->the_post(); ?>
                                            <li class="post-entry filterall filter-blog filter-maintenance filter-cleaning filter-maintenance eg-item-skin-autoresq-blog-wrapper eg-post-id-179 tp-esg-item itemtoshow isvisiblenow col-lg-4" data-date="1515769580">
                                                <div class="esg-media-cover-wrapper">
                                                    <div class="esg-entry-media-wrapper" style="overflow:hidden;position:relative;">
                                                        <div class="esg-entry-media">
                                                            <img src="<?php the_post_thumbnail_url() ?>" alt="<?php the_title() ?>" width="2000" height="1335" style="">

                                                        </div>
                                                    </div>

                                                    <div class="esg-entry-content">
                                                        <div class="esg-time-issue">
                                                            <a class="" href="<?php the_permalink()?>" target="_self">
                                                                
                                                            <span><?php echo get_the_date('d// M Y'); ?></span></a>
                                                        </div>
                                                        <div class="esg-title">
                                                            <a class="news-title" href="<?php the_permalink()?>" target="_self"><?php the_title() ?></a>
                                                        </div>
                                                        <div class="esg-content">
                                                                                                                    </div>
                                                    </div>
                                                </div>
                                            </li>
                                        <?php endwhile; endif; ?>
                                </ul>

                                <div class="pagination">
                                    <?php echo HelpersFunction::awePagination($query->max_num_pages); ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>
</div>




