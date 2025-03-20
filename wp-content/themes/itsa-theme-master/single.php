<?php
get_header();
?>
<main id="main" class="site-main">
    <div class="container">
        <div class="row">
            <div id="primary" class="clearfix ztl-right-sidebar-template col-xl-8 col-lg-8 col-md-8 col-sm-12 ">
                <?php
                while (have_posts()) : the_post();
                ?>
                    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                        <div class="entry-content ztl-single">
                            <div class="vc_row wpb_row vc_row-fluid">
                                <div class="wpb_column vc_column_container vc_col-sm-12">
                                    <div class="vc_column-inner">
                                        <div class="wpb_wrapper">
                                            <h1 class="ztl-accent-font custom-header-title">
                                                <?php the_title(); ?>
                                            </h1>

                                            <div class="wpb_text_column wpb_content_element new_content ">


                                                <div class="wpb_wrapper">
                                                    <p></p>
                                                    <?php the_content(); ?>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    

                    
                <?php endwhile; ?>
            </div>
            <div class="clearfix post-sidebar-right col-xl-4 col-lg-4 col-md-4 col-sm-12 ">
                <aside class="sidebar">
                <?php get_template_part( 'blog', 'sidebar' ); ?>
                </aside>
            </div>
        </div>
        
    </div>
</main>

<?php get_footer() ?>