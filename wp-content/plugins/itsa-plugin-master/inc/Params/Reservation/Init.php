<?php

    namespace MyPlugin\Params\Reservation;
    use MyPlugin\Params\Reservation\Backend\ReservationBackend;


    /**
     * @author lookawesome team
     * @version 1.0
     * @package Booking
     *
     * Init module Booking
     */
    class Init
    {
        static $getInstance = null;

        public $version = '1.0';

        protected $keyMethod = ['settingReservation', 'enqueueScripts', 'query'];

        /**
         * Auto-load in-accessible properties on demand.
         *
         * @param mixed $key
         *
         * @return mixed
         */
        public function __get($key)
        {
            if (in_array($key, $this->keyMethod)) {
                return $this->$key();
            }
        }

        public static function getInstance()
        {
            if (!(self::$getInstance instanceof self)) {
                self::$getInstance = new self();
            }
            return self::$getInstance;
        }

        protected function __construct(){
            $this->backEndAjax();
        }

        public function init(){
        }

        public function backEndAjax()
        {
            new ReservationBackend;
        }

        public function enqueueScripts()
        {

        }


        public function query(){
        }

    }
