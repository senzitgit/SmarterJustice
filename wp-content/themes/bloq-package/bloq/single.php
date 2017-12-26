<?php
/**
 * The Template for single post.
 *
 * @package WordPress
 * @subpackage Bloq
 * @since Bloq 1.0
 */
get_header();
$format = get_post_format();
if($format === false ) $format = 'standard';
$header = get_post_meta($post->ID, 'glg_header', true);
echo glg_post_header($post->ID);
?>
<div class="container row <?php if($header == 'simple') echo 'big'; ?>">
	<?php
		while (have_posts()) : the_post();
			get_template_part('content-single', $format);
		endwhile;
	?>
</div>
<script type="text/javascript">
	 jQuery('.flexslider#inner-slider').flexslider({
        animation: "slide",
        directionNav: false,
        controlNav: true,
		smoothHeight: true,
		slideshow: false
      });
      
      jQuery('.flexslider').flexslider({
        animation: "slide",
        controlNav: false,
		directionNav: false 
      });
</script>
<?php get_footer(); ?>