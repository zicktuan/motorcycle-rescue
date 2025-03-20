<div class="header-image ztl-breadcrumb-show">
    
    <div class="ztl-header-image" style="background-color:#f2f2f2;background-image: url(<?php echo !empty($atts['itsa_banner_about__img']) ? wp_get_attachment_url($atts['itsa_banner_about__img']) : '' ?>)">
        <div class="container">

            <?php if(!empty($atts['itsa_banner_about__title'])):?>
                <h1 class="ztl-accent-font custom-header-title" style="color:#ffffff;"><?php echo $atts['itsa_banner_about__title'] ?></h1>
            <?php endif ?>
            

        </div>
    </div>
    <div class="ztl-breadcrumb-container">
        <div class="container">
            <nav role="navigation" aria-label="Breadcrumbs" class="breadcrumb-trail breadcrumbs" itemprop="breadcrumb">
                <ul class="trail-items" itemscope="" itemtype="">
                    <meta name="numberOfItems" content="2">
                    <meta name="itemListOrder" content="Ascending">
                    <li itemprop="itemListElement" itemscope="" class="trail-item trail-begin">
                        <a href="<?php echo home_url()?>" rel="home" itemprop="item">
                        <span itemprop="name">Trang chủ</span></a>
                        <meta itemprop="position" content="1">
                    </li>
                    <li itemprop="itemListElement" itemscope="" class="trail-item trail-end">
                        <span itemprop="item">
                            <span itemprop="name">
                                <?php echo !empty($atts['itsa_banner_about__title']) ? $atts['itsa_banner_about__title'] : ''?>
                            </span></span>
                        <meta itemprop="position" content="2">
                    </li>
                </ul>
            </nav>
        </div>
    </div>
     
</div>