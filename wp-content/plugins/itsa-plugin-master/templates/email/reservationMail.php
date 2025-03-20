<html>
<head>
    <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
    <style>
        *{
            box-sizing: border-box;
        }
        body {
            font-family: "Helvetica Neue",Helvetica,Arial, DejaVu Sans, sans-serif;
            font-size: 14px;
            line-height: 1.42857143;
            color: #333;
            background-color: #fff;
        }
        strong {
            font-weight: 700;
        }
        hr {
            margin-top: 20px;
            margin-bottom: 20px;
            border: 0;
            border-top: 1px solid #eee;
        }
        h1, h2, h3, h4, h5, h6 {
            font-family: inherit;
            font-weight: 500;
            line-height: 1.1;
            color: inherit;
        }
        h3 {
            font-size: 24px;
        }
        h4 {
            font-size: 18px;
        }
        a {
            color: #337ab7;
            text-decoration: none;
        }
        a {
            background-color: transparent;
        }
        .table {
            width: 95%;
            max-width: 100%;
            margin: 0 auto 20px;
            border-spacing: 0;
            border-collapse: collapse;
        }
        .table-bordered {
            border: 1px solid #ddd;
        }
        .table>tbody>tr.active>th {
            background-color: #f5f5f5;
        }
        .table-bordered>tbody>tr>td{
            border: 1px solid #ddd;
        }
        .table>tbody>tr>td, .table>tbody>tr>th {
            padding: 8px;
            line-height: 1.42857143;
            vertical-align: top;
            border-top: 1px solid #ddd;
        }
        .table .bas-td-first {
            text-align: left;
            vertical-align: middle;
            font-weight: 500;
        }
        .table .bas-td-second {
            padding-left: 20px;
        }
        .table .bas-td-bg {
            background-color: #f5f5f5;
        }
    </style>
</head>
<body>
<table style="background-color:#EBEEF2;height:100%;padding:5px 0" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%">
    <tbody>
    <tr valign="top">
        <td valign="top" align="center">
            <table border="0" cellpadding="0" cellspacing="0" height="100%" style=" width: 200px; padding: 20px; margin :auto;">
                <tbody>
                <tr valign="top">
                    <td valign="top" align="center">

                    </td>
                </tr>
                </tbody>
            </table>
        </td>
    </tr>
    <tr valign="top">
        <td valign="top" align="center">
            <table border="0" cellpadding="0" cellspacing="0" height="100%" style="width: 800px; background-color:#fff; padding:20px 40px; margin :auto; margin-bottom: 20px;">
                <tbody>
                <tr valign="top">
                    <td valign="top" align="center">
                        <h2>Thông tin khách hàng</h2>
                    </td>
                </tr>
                <tr valign="top">
                    <td valign="top" align="center">
                        <table class="table table-bordered" border="0" cellpadding="0" cellspacing="0" height="100%">
                            <tbody>
                            <tr>
                                <td class="bas-td-first" style="width: 23%;"><?php _e("Tên khách hàng", "bookawesome"); ?></td>
                                <td class="bas-td-second"><?php echo $reservationName ?></td>
                            </tr>
                            <tr class="bas-td-bg">
                                <td class="bas-td-first"><?php _e("Ngày nhận bàn", "bookawesome"); ?></td>
                                <td class="bas-td-second"><?php echo $reservationDate ?></td>
                            </tr>
                            <tr>
                                <td class="bas-td-first"><?php _e("Thời gian", "bookawesome"); ?></td>
                                <td class="bas-td-second"><?php echo ((0 == $reservationTime) ? "Sáng" : "Tối") . ' ' . $reservationHour ?></td>
                            </tr>
                            <tr class="bas-td-bg">
                                <td class="bas-td-first"><?php _e("Số người lớn", "bookawesome"); ?></td>
                                <td class="bas-td-second"><?php echo $reservationAdult ?></td>
                            </tr>
                            <tr>
                                <td class="bas-td-first"><?php _e("Số trẻ em", "bookawesome"); ?></td>
                                <td class="bas-td-second"><?php echo $reservationChild ?></td>
                            </tr>
                            <tr>
                                <td class="bas-td-first"><?php _e("Cơ sở", "bookawesome"); ?></td>
                                <td class="bas-td-second"><?php echo $reservationBranch ?></td>
                            </tr>
                            <tr class="bas-td-bg">
                                <td class="bas-td-first"><?php _e("Thông tin bổ sung", "bookawesome"); ?></td>
                                <td class="bas-td-second"><?php echo $reservationDesc ?></td>
                            </tr>

                            </tbody>
                        </table>
                    </td>
                <tr valign="top">
                    <td valign="top" align="center">
                        <div style="text-align:center; width:100%; ">
                            <h2><?php _e('Thank you!', 'bookawesome') ?> </h2>
                            <p><?php _e('Deli4b', 'bookawesome') ?></p>
                            <p>http://deli4b.vn</p>
                        </div>
                    </td>
                </tr>


                </tr>
                </tbody>
            </table>
        </td>
    </tr>
    </tbody>
</table>
</body>
</html>
