<div class="tablenav top">
    <?php require_once( MYPLUGIN_PLUGIN_DIR. 'inc/AdminPage/Reservation/layout/reservation-action.php'); ?>
    <?php
        $table = new \MyPlugin\AdminPage\Reservation\ReservartionTable();
        $table->prepare_items();
    ?>
    <form method="post">
        <input type="hidden" name="page" value="item_list_table">
        <?php
//            $table->search_box( 'search', 'search_id' );
            $table->display(); ?>
    </form>
    <br class="clear">
</div>