<?php
namespace MyPlugin\ThemeSettings\CustomField;

use MyPlugin\ThemeSettings\CustomField\AbstractField;

class InputText extends AbstractField
{

    public function render( $args = [])
    {
        echo '<input class="itsa-url-social-js">';
    }
}
?>

