<?php

    class FrontendAjax {

        public function __construct()
        {
            $argsAction = [
                'awe_reservation'  => array($this, 'aweReservation'),
                'awe_submit_mess'  => array($this, 'aweSendMess'),
            ];

            foreach ($argsAction as $key => $value) {
                add_action('wp_ajax_'.$key, $value);
                add_action('wp_ajax_nopriv_'.$key, $value);
            }
        }

        public function aweReservation() {
            $status = false;
            $reservationDate = $_POST['reservationDate'];
            $reservationName = $_POST['reservationName'];
            $reservationEmail = $_POST['reservationEmail'];
            $reservationPhone = $_POST['reservationPhone'];
            $reservationTime = !empty($_POST['reservationTime']) ? $_POST['reservationTime'] : 0;
            $reservationHours = !empty($_POST['reservationHours']) ? $_POST['reservationHours'] : '';
            $reservationHourt = !empty($_POST['reservationHourt']) ? $_POST['reservationHourt'] : '';
            $reservationAdult = !empty($_POST['reservationAdult']) ? $_POST['reservationAdult'] : 0;
            $reservationChild = !empty($_POST['reservationChild']) ? $_POST['reservationChild'] : 0;
            $reservationBranch = !empty($_POST['reservationBranch']) ? $_POST['reservationBranch'] : '';
            $reservationDesc = !empty($_POST['reservationDesc']) ? $_POST['reservationDesc'] : '';

            $reservationHour = '';
            if (1 == $reservationTime) {
                $reservationHour = $reservationHourt;
            } else {
                $reservationHour = $reservationHours;
            }

            $argsData = array(
                'name' => $reservationName,
                'mail' => $reservationEmail,
                'time' => $reservationTime,
                'hour' => $reservationHour,
                'adult' => $reservationAdult,
                'child' => $reservationChild,
                'branch' => $reservationBranch,
                'content' => $reservationDesc,
            );

            $dataReservation = array(
                'post_content'          => $reservationDesc,
                'post_title'            => $reservationName,
                'post_type'             => 'awe_reservation',
                'post_date'             => date("Y-m-d H:i:s")
            );

            $listMail = getListEmail();
            $headers = array(
                "Content-type: text/html; charset=UTF-8'",
                "X-UA-Compatible: IE=edge'",
                "viewport: width=device-width, initial-scale=1",
            );
            $subject = __( ''.$reservationName.' đặt bàn lúc', 'bookawesome' ) .' ' . date('H: i : s, d-m-Y' );

            ob_start();
            include aweLoadTemplate('email/reservationMail.php');
            $body = ob_get_clean();

            $id = wp_insert_post($dataReservation);

            if($id !== 0) {
                update_post_meta($id, 'awe_reservation_meta', $argsData);
                update_post_meta($id, 'awe_reservation_date', $reservationDate);
                update_post_meta($id, 'awe_reservation_phone', $reservationPhone);
                update_post_meta($id, 'awe_reservation_status', 0);
                if (!empty($listMail)) {
                    wp_mail( join(',', $listMail), $subject, $body, $headers );
                }
                $status = true;
            }

            echo wp_json_encode($status);
            wp_die();
        }

        public function aweSendMess() {
            $status = false;

            $data = array(
                'comment_author' => $_POST['name'],
                'comment_author_email' => $_POST['email'],
                'comment_content' => $_POST['desc'],
            );

            $id = wp_insert_comment($data);

            if (0 !== $id) {
                $status = true;
            }

            echo wp_json_encode($status);
            wp_die();
        }
    }