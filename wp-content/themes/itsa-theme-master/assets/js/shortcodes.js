(function ($) {
    'use strict';

    $(document).ready(function () {

        // count up settings
        var options = {
            useEasing: true,
            useGrouping: true,
            separator: '',
            decimal: '',
            prefix: '',
            suffix: '',
        }

        if ($('.ztl-counter .counter').length > 0) {
            // start count up when div containing numbers is at the bottom of viewport
            $('.ztl-counter .counter').each(function () {
                var currentElm = $(this).attr('id');
                new Waypoint.Inview({
                    element: $('#' + currentElm)[0],
                    enter: function (direction) {
                        var elmId = this.element.id;
                        if ($('#' + elmId).data('count_up') == '0') {
                            $('#' + elmId).data('count_up', '1');
                            var elmNumber = $('#' + elmId).data('value_no');
                            var elmInstance = new CountUp(elmId, 0, elmNumber, 0, 5, options);
                            elmInstance.start();
                        }
                    },
                });
            });
        }

        $('.ztl-coupon-wrapper a').on('click', function (e) {

            //disable default behavior
            e.preventDefault();

            var button_id = $(this).attr('id');
            var coupon_id = button_id.replace('button_', '');
            var coupon = $('#' + coupon_id);

            //if the id exists
            if (coupon.length > 0) {
                coupon.print();
            }
        })


    })
}(jQuery));