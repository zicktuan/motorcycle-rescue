var slug = function(str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    var from = "đáàảãạâấầẩẫậăắằẳẵặéèẻẽẹêếềểễệýỳỷỹỵìíịỉĩõòóơớờởỡợôốồổỗộúùủũụưứừửữựn·/_,:;";
    var to = "daaaaaaaaaaaaaaaaaeeeeeeeeeeeyyyyyiiiiiooooooooooooooouuuuuuuuuuun------";
    for (var i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by -
            .replace(/-+/g, '-'); // collapse dashes

    return str;
};

var SIMPLE_TOOLBAR_CKEDITOR = [
    ['NumberedList', 'BulletedList', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'Link', 'Smiley', 'TextColor'], '/',
    ['Bold', 'Italic', 'Underline', 'StrikeThrough', '-', 'Undo', 'Redo', '-', 'Cut', 'Copy', 'Paste', 'Find', 'Replace', '-', 'Outdent', 'Indent', '-', 'Print'], '/',
];

$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

isObject = function(a) {
    return (!!a) && (a.constructor === Object);
};

function openKCFinderByPath(element, type)
{
    type = '&type=' + type;
    if ($(element).length === 0) {
        alert("Input element is not exist.");
        return;
    }
    try {
        window.KCFinder = {};
        window.KCFinder.callBack = function(url) {
            window.KCFinder = null;
            $(element).val(url);
        };
        window.open('/layout/backend/libraries/kcfinder/browse.php?lang=en' + type, 'kcfinder_textbox',
                'status=0, toolbar=0, location=0, menubar=0, directories=0, resizable=1, scrollbars=0, width=700, height=500'
                );
    } catch (e) {
        alert(e.message);
    }

}

function setActiveMenu(page) {
    $('.nav-pills ul li.active').removeClass('active');
    $('.nav-pills ul li.nav-active').removeClass('nav-active');

    if ($('#menu-left-' + page).find('ul').length > 0) {
        $('#menu-left-' + page).addClass('nav-active');
    } else {
        $('#menu-left-' + page).addClass('active');
    }
}


function setDefaultValueSelect() {
    $('select').each(function(index) {
        $(this).val($(this).attr('default-value'));
    })
}

function htmlEncode(value) {
    //create a in-memory div, set it's inner text(which jQuery automatically encodes)
    //then grab the encoded contents back out.  The div never exists on the page.
    return $('<div/>').text(value).html();
}

function htmlDecode(value) {
    return $('<div/>').html(value).text();
}

function convertStringToDate(str) {
    var pattern = /(\d{2})\-(\d{2})\-(\d{4})/;
    var date = new Date(str.replace(pattern, '$3-$2-$1'));
    return date;
}
function switchStringDate(str) {
    var date = convertStringToDate(str);
    var yyyy = date.getFullYear();
    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    return yyyy + "-" + mm + "-" + dd;
}

function selecttext(obj){
    obj.focus();
    obj.select();
}

$(document).ready(function() {
    setDefaultValueSelect();

});



