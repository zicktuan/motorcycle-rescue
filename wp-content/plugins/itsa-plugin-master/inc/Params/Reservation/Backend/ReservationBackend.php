<?php
namespace MyPlugin\Params\Reservation\Backend;

/**
 * @author Nguyen Anh Tuan
 * @version 1.0
 * @package Reservation
 *
 * Ajax backend module reservation
 */
class ReservationBackend
{
    public function __construct()
    {
        $argsAction = [
            'awe_manage_reservation'  => array($this, 'manageReservation'),
            'awe_manage_reservation_trash'  => array($this, 'manageReservationTrash'),
        ];

        foreach ($argsAction as $key => $value) {
            add_action('wp_ajax_'.$key, $value);
            add_action('wp_ajax_nopriv_'.$key, $value);
        }
    }

    public function manageReservation() {
        $status = false;

        if(!empty($_POST['id'])) {
            update_post_meta($_POST['id'], 'awe_reservation_status', 1);
            $status = true;
        }

        echo wp_json_encode($status);
        wp_die();
    }

    public function manageReservationTrash() {
        $status = false;
        if(!empty($_POST['argsId'])) {
            $this->deleteReservation($_POST['argsId']);
            $status = true;
        }

        echo wp_json_encode($status);
        wp_die();
    }


    public function deleteReservation($bkIds) {
        global $wpdb;
        $table      = 'wp_posts';
        $tableMeta  = 'wp_postmeta';
        $bkIds      = is_array($bkIds) ? $bkIds : [$bkIds];

        foreach ($bkIds as $bkId) {
            $wpdb->delete( $table, array( 'id' => $bkId ) );
            $metaList = $wpdb->get_results( "SELECT post_id FROM $tableMeta WHERE post_id = $bkId" );

            foreach ($metaList as $key => $value) {
                $wpdb->delete( $tableMeta, array( 'post_id' => $value->post_id ) );
            }
        }
    }


}
