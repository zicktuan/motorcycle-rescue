<?php

if (!function_exists('ot_type_input_empty')) {

    function ot_type_input_empty($args = [])
    {
        new MyPlugin\AdminSettings\CustomField\InputEmpty($args);
    }
}

    if ( ! function_exists( 'ot_type_tabs' ) ) {

        function ot_type_tabs( $args = []) {
            new MyPlugin\ThemeSettings\CustomField\Tabs($args);
        }
    }

    if ( ! function_exists( 'ot_type_textUrl' ) ) {

        function ot_type_textUrl( $args = []) {
        new MyPlugin\ThemeSettings\CustomField\InputText($args);

            // new MyPlugin\ThemeSettings\CustomField\InputText($args);
        }
    }