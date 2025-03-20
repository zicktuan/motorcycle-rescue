<?php
    namespace MyPlugin\AdminPage;

    use MyPlugin\AdminPage\ManagerBooking;

    /**
     * @author lookawesome team
     * @version 1.0
     * @package AdminPage
     *
     * Init module AdminPage
     */
    class Init
    {
        static $getInstance = null;

        public static function getInstance()
        {
            if (!(self::$getInstance instanceof self)) {
                self::$getInstance = new self();
            }
            return self::$getInstance;
        }

        protected function __construct(){
            add_action('admin_menu', array($this, 'init'));
        }

        public function init(){
            // new ManagerBooking;
        }

    }
