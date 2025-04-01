
<?php
global $myplugin;
    $optionTheme  = $myplugin->themeSettings->getSettings();
    $logo = $optionTheme['awe_header_logo'];
?>
</main>
</div>

<footer id="colophon" class="site-footer">
    <div class="sidebar-above-footer sidebar-ztl clearfix">
        <div class="container">
            <div class="row">
                <?php if(!empty($optionTheme['awe_fax_online'])):?>
                <aside id="autoresq_info_widget-1" class="widget col-md-4 widget_autoresq_info_widget">
                    <div class="ztl-widget-info-1">

                        <div class="ztl-widget-info">
                            <div class="ztl-widget-info-image">
                                <img src="<?php echo get_template_directory_uri() . '/assets/images/support-24-hours.png'?>">
                            </div>
                            <span class="ztl-widget-info-description">
                                <span style="font-size:12px;color:#f4c70b">THỜI GIAN LÀM VIỆC</span><br>
                                <span style="font-size:20px;font-weight:600"><?php echo $optionTheme['awe_fax_online']?></span> </span>
                        </div>

                    </div>
                </aside>
                <?php endif?>
                <?php if(!empty($optionTheme['awe_address_ft'])):?>
                <aside id="autoresq_info_widget-4" class="widget col-md-4 widget_autoresq_info_widget">
                    <div class="ztl-widget-info-4">

                        <div class="ztl-widget-info">
                            <div class="ztl-widget-info-image">
                                <img src="<?php echo get_template_directory_uri() . '/assets/images/nation-wide.png'?>">
                            </div>
                            <span class="ztl-widget-info-description">
                                <span style="font-size:12px;color:#f4c70b">HỖ TRỢ SÀI GÒN</span><br>
                                <span style="font-size:18px;font-weight:600"><?php echo $optionTheme['awe_address_ft']?></span> </span>
                        </div>

                    </div>
                </aside>
                <?php endif?>
                <?php if(!empty($optionTheme['awe_hotline'])):?>
                <aside id="autoresq_info_widget-5" class="widget col-md-4 widget_autoresq_info_widget">
                    <div class="ztl-widget-info-5">

                        <div class="ztl-widget-info">
                            <div class="ztl-widget-info-image">
                                <img src="<?php echo get_template_directory_uri() . '/assets/images/24-hours.png'?>">
                            </div>
                            <span class="ztl-widget-info-description">
                                <span style="font-size:12px;color: #f4c70b">TỔNG ĐÀI 24/7</span><br>
                                <span style="font-size:18px;font-weight:600"><?php echo $optionTheme['awe_hotline']?></span> </span>
                        </div>

                    </div>
                </aside>
                <?php endif?>
            </div>
        </div>
    </div>

    <div class="sidebar-footer clearfix">
        <div class="container">
            <div class="row">
                <aside id="custom_html-2" class="widget_text widget col-md-3 ztl-footer-widget widget_custom_html">
                    <h2 class="widget-title">Giới thiệu</h2>
                    <div class="textwidget custom-html-widget">
                        <p><?php echo !empty($optionTheme['awe_about_ft']) ? $optionTheme['awe_about_ft'] : '' ?></p>

                        <img src="<?php echo $logo?>" style="max-width:140px; display:block; margin: auto;" alt="ZuttoRide Việt Nam">
                    </div>
                </aside>
                
                <?php dynamic_sidebar('awe-footer-address-area');?>

            </div>
        </div>
    </div>
    <a href="https://zalo.me/<?php echo $optionTheme['awe_hotline']?>" class="zalo-button" target="_blank">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg" width="50" alt="Chat Zalo">
    </a>
    <a href="tel:<?php echo $optionTheme['awe_hotline']?>" class="call-button">
        <i class="fa-solid fa-phone"></i>
    </a>
    <div class="site-info">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-xs-12">
                    <div id="ztl-copyright">
                        <?php echo !empty($optionTheme['awe_footer_copyright']) ?$optionTheme['awe_footer_copyright']: '' ?>
                    </div>
                </div>
            </div>
        </div>
    </div><!-- .site-info -->
	
</footer>
<link rel="stylesheet" id="animate-css-css" href="<?php echo get_template_directory_uri() . '/assets/css/animate(1).min.css'?>" type="text/css" media="all">
<link rel="stylesheet" id="zoutula-icons-css" href="<?php echo get_template_directory_uri() . '/assets/css/ztliconsce.css'?>" type="text/css" media="all">
<link rel="stylesheet" id="themepunchboxextcss-css" href="<?php echo get_template_directory_uri() . '/assets/css/jquery.esgbox.min.css'?>" type="text/css" media="all">
<script type="text/javascript" src="<?php echo get_template_directory_uri() . '/assets/js/underscore.min.js'?>"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri() . '/assets/js/countup.min.js'?>"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri() . '/assets/js/jquery.countdown.js'?>"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri() . '/assets/js/shortcodes.js'?>"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri() . '/assets/js/jquery.print.min.js'?>"></script>

<script type="text/javascript" src="<?php echo get_template_directory_uri() . '/assets/js/scripts-contact-form-7.js'?>"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri() . '/assets/js/js.cookie.min.js'?>"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri() . '/assets/js/js.cookie.min.js'?>"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri() . '/assets/js/cart-fragments.min.js'?>"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri() . '/assets/js/bootstrap.min.js'?>"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri() . '/assets/js/navigation.js'?>"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri() . '/assets/js/jquery.waypoint.min.js'?>"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri() . '/assets/js/inview.min.js'?>"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri() . '/assets/js/affix.js'?>"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri() . '/assets/js/retina.min.js'?>"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri() . '/assets/js/general.js'?>"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri() . '/assets/js/wp-embed.min.js'?>"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri() . '/assets/js/js_composer_front.min.js'?>"></script>

<script type="text/javascript" src=".<?php echo get_template_directory_uri() . '/assets/js/skrollr.min.js'?>"></script>

    </div>
</body>

</html>