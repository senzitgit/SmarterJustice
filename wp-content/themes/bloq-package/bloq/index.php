<?php
/**
 * The Template for index.
 *
 * @package WordPress
 * @subpackage Bloq
 * @since Bloq 1.0
 */
$page_id = get_option('page_for_posts');
$subtitle = get_post_meta($page_id, 'glg_page_subtitle', true);
$header = '';
get_header();
$slider = glg_header_slider($page_id, 'post');
if($slider != false)
	echo $slider;
else
	$header = 'simple';
if(!empty($subtitle)) :
?>
<div id="claim" <?php if($header == 'simple') echo "class='big'"; ?>>
	<div class="container row">
		<?php echo $subtitle; ?>
	</div>
</div>
<?php else: ?>
<div id="spacer" <?php if($header == 'simple') echo "class='big'"; ?>></div>
<?php endif; ?>
<div class="container row">
	<div class="col span_9">
	<?php
		if (have_posts()) :
			while (have_posts()) : the_post();
				$format = get_post_format();
				if($format == 'quote') :
					get_template_part('loop', 'single-quote');
				elseif($format == 'link'):
					get_template_part('loop', 'single-link');
				elseif($format == 'video'):
					get_template_part('loop', 'single-video');
				else :
					get_template_part('loop', 'single');
				endif;
			endwhile;
		endif;
	?>
	<nav id="navigation">
	<?php
		posts_nav_link('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;', '<span class="pictogram post-nav">&#59225;</span> Previous page', '<span class="pictogram post-nav">&#59226;</span> Next page');
	?>
	</nav>
	</div>
	<aside class="col span_3 col_last">
		<?php if(!function_exists('dynamic_sidebar') || dynamic_sidebar('Blog Widget')) {}; ?>
	</aside>
</div>
<script type="text/javascript">
      jQuery('.flexslider').flexslider({
         animation: "fade",
        directionNav: false,
        controlNav: true
      });
</script>
<?php
	get_footer();
?>