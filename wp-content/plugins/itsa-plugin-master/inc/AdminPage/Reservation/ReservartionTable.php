<?php
    namespace MyPlugin\AdminPage\Reservation;

    if ( ! class_exists( 'WP_List_Table' ) )
    {
        require_once( ABSPATH . 'wp-admin/includes/class-wp-list-table.php' );
    }

    class ReservartionTable extends \WP_List_Table {

        public function __construct()
        {
            parent::__construct();
        }

        function column_cb($item)
        {
            return sprintf(
                '<input type="checkbox" name="id[]" value="%s" class="awe-admin-check-bk" />',
                $item
            );
        }

        function column_name($item)
        {
            $inforMeta = get_post_meta($item, 'awe_reservation_meta', true);
            return !empty($inforMeta['name']) ? $inforMeta['name'] : '';
        }

        function column_phone($item)
        {
            $phone = get_post_meta($item, 'awe_reservation_phone', true);
            return !empty($phone) ? $phone : '';
        }

        function column_info($item)
        {
            $output   = '';

            $inforMeta = get_post_meta($item, 'awe_reservation_meta', true);

            $output .= 'Email: ' . (!empty($inforMeta['mail']) ? $inforMeta['mail'] : '');
            $output .= '<br/>';
            $output .= 'Thời gian: ' . ((0 === $inforMeta['time']) ? 'Sáng' : 'Tối') .' '.  (!empty($inforMeta['hour']) ? $inforMeta['hour'] : '');
            $output .= '<br/>';
            $output .= 'Người lớn: ' .  (!empty($inforMeta['adult']) ? $inforMeta['adult'] : 0);
            $output .= '<br/>';
            $output .= 'Trẻ em: ' .  (!empty($inforMeta['child']) ? $inforMeta['child'] : 0);
            $output .= '<br/>';
            $output .= 'Cơ sở: ' .  (!empty($inforMeta['branch']) ? $inforMeta['branch'] : '');
            return $output;
        }

        function column_book_date($item)
        {
            $bookDate = get_post_meta($item, 'awe_reservation_date', true);
            return !empty($bookDate) ? date('Y/m/d', strtotime($bookDate)) : '';
        }

        function column_status($item)
        {
            $output = '';
            $status = get_post_meta($item, 'awe_reservation_status', true);

            if (0 == $status) {
                $output .= '<a href="#" data-id="'.$item.'" class="awe-admin-status">Đang chờ</a>';
            } else {
                $output .= '<p data-id="'.$item.'" class="awe-admin-status-success" style="color: green;cursor: pointer;">Đã nhận bàn</p>';
            }

            return $output;
        }

        function column_date($item)
        {
            $info = get_post($item);
            $output = '';
            $output .= date("d M, Y", strtotime($info->post_date));
            $output .= '<br/>';
            $output .= date("H:i:s", strtotime($info->post_date));
            return $output;
        }

        function column_action($item)
        {
            $actions = [
                'delete' => sprintf('<span class="spinner"></span><a class="bas-admin-manage-res-delete" data-id="%u" style="cursor: pointer;">%s</a>', $item, __('Delete', 'bookawesome')),
            ];

            return sprintf('%s',
                $this->row_actions($actions, true)
            );
        }

        function get_columns()
        {
            $columns = [
                'cb'     => '<input type="checkbox" />',
                'name'   => __('Tên khách hàng', 'bookawesome'),
                'phone'  => __('Số điện thoại', 'bookawesome'),
                'info'  => __('Thông tin', 'bookawesome'),
                'book_date'   => __('Ngày nhận bàn', 'bookawesome'),
                'status'   => __('Status', 'bookawesome'),
                'date'   => __('Ngày đặt bàn', 'bookawesome'),
                'action' => __('Action', 'bookawesome'),
            ];

            return $columns;
        }

        function display_tablenav( $which = ''){}

        function process_bulk_action(){}

        function no_items()
        {
            _e( 'No itinerary found.', 'bookawesome' );
        }

        /**
         * Handles data query and filter, sorting, and pagination.
         */
        public function prepare_items() {

            global $myplugin;
            $phone = isset($_GET['phone']) ? $_GET['phone'] : '';
            $getDate  = isset($_GET['date']) ? $_GET['date'] : '';
            if(!empty($getDate)) {
                $date  = date('Y-m-d', strtotime($getDate));
            }

            $columns  = $this->get_columns();
            $hidden   = [];
            $sortable = $this->get_sortable_columns();

            // here we configure table headers, defined in our methods
            $this->_column_headers = array($columns, $hidden, $sortable);

            // [OPTIONAL] process bulk action if any
            $this->process_bulk_action();

            /** Process bulk action */
            $this->process_bulk_action();

            $args = array(
                'post_type'     => 'awe_reservation',
            );

            $phoneQuery = '';
            if ($phone) {
                $phoneQuery = array(
                    'key'     => 'awe_reservation_phone',
                    'value'   => $phone,
                    'compare' => 'LIKE',
                );
            }

            $dateQuery = '';
            if ($date) {
                $dateQuery = array(
                    'key'     => 'awe_reservation_date',
                    'value'   => $date,
                    'compare' => 'LIKE',
                );
            }

            if ( $phone || $date || ($phone && $date) ) {
                $args['meta_query'] = array(
                    'relation' => 'AND',
                    $dateQuery,
                    $phoneQuery
                );
            }

            $result = new \WP_Query($args);

            $argsId = [];

            if($result->have_posts() ) : while ( $result->have_posts() ) : $result->the_post(); ?>
                <?php
                $argsId[] = get_the_ID();
                ?>
            <?php endwhile; endif;

            $this->items = $argsId;

//            $per_page = 5;
//            $current_page = $this->get_pagenum();
//            $total_items = count($this->items);
//            $found_data = array_slice($this->items,(($current_page-1)*$per_page),$per_page);
//            $this->set_pagination_args(array(
//                'total_items' => $total_items,
//                'per_page'    => $per_page,
//            ));
//            $this->items = $found_data;
        }


    }
