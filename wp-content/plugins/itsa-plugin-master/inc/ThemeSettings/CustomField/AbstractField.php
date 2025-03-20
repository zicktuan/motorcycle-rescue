<?php

    namespace MyPlugin\ThemeSettings\CustomField;

    /**
     * @author lookawesome team
     * @version 1.0
     * @package ThemeSettings
     *
     * Abstract factory add custom field for option tree.
     */
    abstract class AbstractField
    {
        public function __construct( $args = [] ){
            $this->render($args);
            $this->registerScripts();
        }

        abstract public function render( $args = []);

        public function registerScripts(){}

    }