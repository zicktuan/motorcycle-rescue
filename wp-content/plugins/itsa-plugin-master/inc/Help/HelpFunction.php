<?php

if( ! function_exists( 'getListEmail' ) ) {
    function getListEmail() {
        global $myplugin;
        $optionTheme = $myplugin->themeSettings->getSettings();

        $listEmail = [];
        if (!empty($optionTheme['awe_email_to'])) {
            $argsEmail = explode(',', $optionTheme['awe_email_to']);
            if (!empty($argsEmail) && is_array($argsEmail)) {
                foreach ($argsEmail as $value) {
                    if (!in_array($value, $listEmail)) {
                        $listEmail[] = $value;
                    }
                }
            }
        }

        if (!empty($optionTheme['awe_email_cc_to'])) {
            $argsEmail = explode(',', $optionTheme['awe_email_cc_to']);
            if (!empty($argsEmail) && is_array($argsEmail)) {
                foreach ($argsEmail as $value) {
                    if (!in_array($value, $listEmail)) {
                        $listEmail[] = $value;
                    }
                }
            }
        }

        if (!empty($optionTheme['awe_email_bcc_to'])) {
            $argsEmail = explode(',', $optionTheme['awe_email_bcc_to']);
            if (!empty($argsEmail) && is_array($argsEmail)) {
                foreach ($argsEmail as $value) {
                    if (!in_array($value, $listEmail)) {
                        $listEmail[] = $value;
                    }
                }
            }
        }
        return $listEmail;
    }
}

if ( ! function_exists( 'aweLoadTemplate' ) ) {

    function aweLoadTemplate( $filename ) {
        $path = '';
        if ( file_exists( MYPLUGIN_PLUGIN_DIR . 'templates/' . $filename ) ) {
            $path = MYPLUGIN_PLUGIN_DIR . 'templates/' . $filename;
        }
        return $path;
    }
}



