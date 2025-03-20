<?php
$currentTerm = get_queried_object();

$argsByTerm = [
    'post_type'      => 'itsa_product_pt',
    'orderby'        => 'id',
    'order'          => 'DESC',
    'tax_query' => [
        [
            'taxonomy'  => 'product',
            'field'     => 'id',
            'terms'     => $currentTerm->term_id,
        ]
    ]
];

$postByTerm = new WP_Query($argsByTerm);
?>
<div class="container nopadding-top">
    <div class="row mg_bottom_20">
        <div class="col-md-12">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="<?php home_url()?>">Trang chủ</a></li>
                <li class="breadcrumb-item"><a href="#">Sản phẩm</a></li>
                <li class="breadcrumb-item active"><?php echo $currentTerm->name ?></li>
            </ol>
        </div>
    </div>
    <div class="row category-wp" style="padding-bottom: 30px;">
            <div class="col-md-12">
                <div class="section_title">
                    <h2><?php echo $currentTerm->name?></h2>
                </div>
            </div>
        </div>
    <div class="row">
        <?php
            if ($postByTerm->have_posts()) :
                while ($postByTerm->have_posts()) : $postByTerm->the_post();
                    get_template_part('templates/product/layout/item', 'list-product');
                endwhile;
                echo HelpersFunction::awePagination(2);

            endif;
            wp_reset_query();
        ?>
    </div>
</div>