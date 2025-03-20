<?php

    namespace MyPlugin\ThemeSettings\CustomField;
    use MyPlugin\ThemeSettings\CustomField\AbstractField;

    class Tabs extends AbstractField
    {
        public function __construct(array $args = [])
        {
            parent::__construct($args);
            die;
        }

        public function render( $args = []){
            /* turns arguments array into variables */
            extract( $args );

            $tabLabel 	= '';
            $tabContent = '';

            foreach ($field_settings as $settings) {

                $tabLabel .= '<li><a href="#' . esc_attr(sanitize_title( $settings['label'] )) . '">' . esc_html( $settings['label'] ) . '</a></li>';

                $tabElement = '';
                foreach( $settings['settings'] as $key => $field ) {
                    /* build the arguments array */
                    $_args = array(
                        'type'              => $field['type'],
                        'field_id'          => $field_id . '_' . $field['id'] . '_' . $key,
                        'field_name'        => $field_name . '[' . $key . '][' . $field['id'] . ']',
                        'field_value'       => isset( $field_value[$key][$field['id']] ) ? $field_value[$key][$field['id']] : '',
                        'field_desc'        => isset( $field['desc'] ) ? $field['desc'] : '',
                        'field_std'         => isset( $field['std'] ) ? $field['std'] : '',
                        'field_rows'        => isset( $field['rows'] ) ? $field['rows'] : 10,
                        'field_post_type'   => isset( $field['post_type'] ) && ! empty( $field['post_type'] ) ? $field['post_type'] : 'post',
                        'field_taxonomy'    => isset( $field['taxonomy'] ) && ! empty( $field['taxonomy'] ) ? $field['taxonomy'] : 'category',
                        'field_min_max_step'=> isset( $field['min_max_step'] ) && ! empty( $field['min_max_step'] ) ? $field['min_max_step'] : '0,100,1',
                        'field_class'       => isset( $field['class'] ) ? $field['class'] : '',
                        'field_condition'   => isset( $field['condition'] ) ? $field['condition'] : '',
                        'field_operator'    => isset( $field['operator'] ) ? $field['operator'] : 'and',
                        'field_choices'     => isset( $field['choices'] ) && ! empty( $field['choices'] ) ? $field['choices'] : array(),
                        'field_settings'    => isset( $field['settings'] ) && ! empty( $field['settings'] ) ? $field['settings'] : array(),
                    );

                    ob_start();
                    if( isset( $field['label'] ) ) {
                        echo '<h3 class="label">'.$field['label'].'</h3>';
                    }
                    ot_display_by_type( $_args );
                    $tabElement .= ob_get_clean();
                }

                $tabContent .= '<div style="padding:10px;" id="' . esc_attr(sanitize_title( $settings['label'] )) . '">'.$tabElement.'</div>';
            }

            /* format setting outer wrapper */
            echo '<div class="bas-admin-setting-tab">
				<ul>'.$tabLabel.'</ul>
				'.$tabContent.'
			</div>';
        }

        public function registerScripts(){
//            wp_enqueue_script( 'bas-handle-theme-setting', BOOKAWESOME_BASE_URL_PLUGIN . '/assets/backend/js/bas-theme-settings.js', ['jquery','underscore','backbone','jquery-ui-tabs'], '1.0', true );
        }

    }