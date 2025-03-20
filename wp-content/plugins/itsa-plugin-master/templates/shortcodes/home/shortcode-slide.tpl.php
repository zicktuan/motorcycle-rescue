<picture>
    <div id="loop-slider" class="container-fluid" data-autoplay="true" data-speed="8000">
        <ul id="img-group" >
            <?php if(!empty($listItems[0])): 
                    foreach ($listItems as $value):
                ?>
            <li class="slide" style="background-image: url(&quot;undefined&quot;);">
                <img src="<?php echo !empty($value['itsa_home_slide__img']) ? wp_get_attachment_url($value['itsa_home_slide__img']) : '' ?>">
            </li>
            <?php endforeach; endif; ?>
        </ul>
    <div>
    <div class="control-container">
        <div class="controls prev"></div>
        <div class="controls next"></div>
    </div>
    </div>
    </div>
</picture>