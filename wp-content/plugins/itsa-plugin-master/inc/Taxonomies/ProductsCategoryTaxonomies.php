<?php

namespace MyPlugin\Taxonomies;

class ProductsCategoryTaxonomies extends AbstractTaxonomies {

    protected $taxonomie = 'product';

	protected $argsPostType = ['itsa_product_pt'];

    public function __construct(){
		parent::__construct();
	}

	public function labels(){
        return array(
			'name'              => _x( 'Categories Product', 'taxonomy general name', 'bookawesome' ),
			'singular_name'     => _x( 'Products', 'taxonomy singular name', 'bookawesome' ),
			'search_items'      => __( 'Search Product Category', 'bookawesome' ),
			'all_items'         => __( 'All Product Category', 'bookawesome' ),
			'parent_item'       => __( 'Parent Product Category', 'bookawesome' ),
			'parent_item_colon' => __( 'Parent Product Category:', 'bookawesome' ),
			'edit_item'         => __( 'Edit Product Category', 'bookawesome' ),
			'update_item'       => __( 'Update Product Category', 'bookawesome' ),
			'add_new_item'      => __( 'Add New Product Category', 'bookawesome' ),
			'new_item_name'     => __( 'New Product Category Name', 'bookawesome' ),
			'menu_name'         => __( 'Danh mục sản phẩm', 'bookawesome' ),
		);
    }

    public function argsRegister(){
        return array(
			'hierarchical'      => true,
			'labels'            => $this->labels(),
			'show_ui'           => true,
			'show_admin_column' => true,
			'query_var'         => true,
			'rewrite'           => array( 'slug' => 'product' ),
		);
    }

    public function taxonomieName(){
		return $this->taxonomie;
	}
}