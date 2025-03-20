<?php

/**
 * 
 */
class AwesomeScripts
{

	public function __construct()
	{
		add_action('wp_enqueue_scripts', array($this, 'frontendScripts'));
		add_action('wp_enqueue_scripts', array($this, 'frontendStyles'));
        add_action( 'admin_enqueue_scripts', array($this, 'backendScripts') );
	}

	public function frontendScripts()
	{
		global $awesomeTheme;
		wp_enqueue_script('jquery-1.11.2.min', get_template_directory_uri() . '/assets/js/jquery-1.11.2.min.js', array('jquery'), $awesomeTheme->version, true);
		wp_enqueue_script('bootstrap.min.', get_template_directory_uri() . '/assets/bootstrap/js/bootstrap.min.js', array('jquery'), $awesomeTheme->version, true);
		wp_enqueue_script('owl.carousel.min', get_template_directory_uri() . '/assets/owlcarouse/dist/owl.carousel.min.js', array('jquery'), $awesomeTheme->version, true);
		wp_enqueue_script('mmenu', get_template_directory_uri() . '/assets/mmenu/jquery.mmenu.js', array('jquery'), $awesomeTheme->version, true);
		wp_enqueue_script('frontend', get_template_directory_uri() . '/assets/js/frontend.js', array('jquery'), $awesomeTheme->version, true);
        

        wp_localize_script('frontend', 'awe_admin',
            array(
                'url' => admin_url(),
            )
        );
	}

	public function frontendStyles()
	{
		global $awesomeTheme;
        wp_enqueue_style('bootstrap.min', get_template_directory_uri() . '/assets/bootstrap/css/bootstrap.min.css', $awesomeTheme->version, true);
        wp_enqueue_style('font-awesome', get_template_directory_uri() . '/assets/font-awesome/css/font-awesome.min.css', $awesomeTheme->version, true);
        wp_enqueue_style('animate', get_template_directory_uri() . '/assets/js/animate.css', $awesomeTheme->version, true);
        wp_enqueue_style('owl.carousel', get_template_directory_uri() . '/assets/owlcarouse/dist/assets/owl.carousel.css', $awesomeTheme->version, true);
        wp_enqueue_style('owl.carousel.min', get_template_directory_uri() . '/assets/owlcarouse/dist/assets/owl.carousel.min.css', $awesomeTheme->version, true);
        wp_enqueue_style('owl.theme.default.min', get_template_directory_uri() . '/assets/owlcarouse/dist/assets/owl.theme.default.min.css', $awesomeTheme->version, true);
        wp_enqueue_style('mmenu', get_template_directory_uri() . '/assets/mmenu/jquery.mmenu.css', $awesomeTheme->version, true);
        wp_enqueue_style('mmenu.all', get_template_directory_uri() . '/assets/mmenu/jquery.mmenu.all.css', $awesomeTheme->version, true);
        wp_enqueue_style('mmenu_custom', get_template_directory_uri() . '/assets/css//mmenu_custom.css', $awesomeTheme->version, true);
        wp_enqueue_style('facebook', get_template_directory_uri() . '/assets/css/facebook.css', $awesomeTheme->version, true);
        wp_enqueue_style('mega-menu', get_template_directory_uri() . '/assets/css/mega-menu.css', $awesomeTheme->version, true);
        wp_enqueue_style('app_front', get_template_directory_uri() . '/assets/css/app_front.css', $awesomeTheme->version, true);
		
        wp_enqueue_style('style', get_template_directory_uri() . '/assets/css/style.css', $awesomeTheme->version, true);
	}

	public function backendScripts() {
        global $awesomeTheme;
        // wp_enqueue_script('sweetalert2', get_template_directory_uri() . '/assets/lib/sweetalert2/sweetalert2.js', array('jquery'), $awesomeTheme->version, true);
        // wp_enqueue_style('sweetalert2', get_template_directory_uri() . '/assets/lib/sweetalert2/sweetalert2.css', $awesomeTheme->version, true);
    }
}
?>