<?php
    namespace MyPlugin\AdminPage;

    /**
     * @author lookawesome team
     * @version 1.0
     * @package AdminPage
     *
     * Init module page manager booking
     */
    class ManagerBooking
    {
        public $pageReservation = 'manager-reservation';

        public function __construct()
        {
            add_menu_page('Quản lý đặt bàn', 'Quản lý đặt bàn', 'manage_options', $this->pageReservation, array($this, 'pageReservation'), 'dashicons-list-view', 5);
            add_action('admin_enqueue_scripts', array($this, 'pageScripts'));
        }

        public function pageReservation(){
            ?>
            <div class="wrap bk-wrap" style="margin: 10px 20px 100% 2px;">
                <h1 class="wp-heading-inline">Quản lý đặt bàn</h1>
                <hr class="wp-header-end">
                <?php
                    require_once MYPLUGIN_PLUGIN_DIR . 'inc/AdminPage/Reservation/layout/reservation-table.php';
                ?>
            </div>
            <?php
        }

        public function pageScripts() {
            global $myplugin;
            if (isset($_GET['page'])) {
                if ( 'manager-reservation' == $_GET['page'] ) {
                    wp_enqueue_style('jquery-ui-style', MYPLUGIN_BASE_URL_PLUGIN . '/assets/backend/css/jquery-ui.min.css', $myplugin->version, true);
                    wp_enqueue_script( 'jquery-ui-min', MYPLUGIN_BASE_URL_PLUGIN . '/assets/backend/js/jquery.min.js', ['jquery'], $myplugin->version, true );
                    wp_enqueue_script( 'jquery-admin', MYPLUGIN_BASE_URL_PLUGIN . '/assets/backend/js/jquery-ui.min.js', ['jquery'], $myplugin->version, true );
                    wp_enqueue_script( 'manager-reservation', MYPLUGIN_BASE_URL_PLUGIN . '/assets/backend/js/manager-reservation.js', ['jquery'], $myplugin->version, true );
                    wp_localize_script('jquery-admin', 'awe_admin',
                        array(
                            'url' => admin_url(),
                        )
                    );
                }
            }

        }

    }
