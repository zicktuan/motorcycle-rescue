<?php

    class HelpersFunction {

        private static $instance = null;

        public static function getInstance() {
            if ( !(self::$instance) instanceof self) {
                self::$instance = new self();
            }

            return self::$instance;
        }

        public static function awePagination($totalPages = 0) {
            $big = 999999999;
            $currentPage = max(1, get_query_var('paged'));
        
            if ($totalPages > 1) {
                echo '<div class="pagination">';
        
                // Nút Previous
                if ($currentPage > 1) {
                    echo '<a class="page-numbers" href="' . esc_url(get_pagenum_link($currentPage - 1)) . '">
                            <span class="page-numbers-wrap">&lt;</span>
                            <span class="page-numbers-hexagon"></span>
                          </a>&nbsp;';
                }
        
                // Tạo danh sách trang
                for ($i = 1; $i <= $totalPages; $i++) {
                    if ($i == $currentPage) {
                        echo '<span class="page-numbers current">
                                <span class="page-numbers-wrap">
                                    <strong>' . $i . '</strong>
                                </span>
                                <span class="page-numbers-hexagon"></span>
                              </span>&nbsp;';
                    } else {
                        echo '<a class="page-numbers" href="' . esc_url(get_pagenum_link($i)) . '">
                                <span class="page-numbers-wrap">' . $i . '</span>
                                <span class="page-numbers-hexagon"></span>
                              </a>&nbsp;';
                    }
                }
        
                // Nút Next
                if ($currentPage < $totalPages) {
                    echo '<a class="page-numbers" href="' . esc_url(get_pagenum_link($currentPage + 1)) . '">
                            <span class="page-numbers-wrap">&gt;</span>
                            <span class="page-numbers-hexagon"></span>
                          </a>&nbsp;';
                }
        
                echo '</div>';
            }
        }

        /**
         * setting url image default
         */
        static function basImageDefault ( $img = '' ) {
            $defaultImage = get_template_directory_uri().'/assets/images/default-image.png';

            if( function_exists('getimagesize') && !@getimagesize($img) ) {
                return $defaultImage;
            }

            return $img;
        }
    }