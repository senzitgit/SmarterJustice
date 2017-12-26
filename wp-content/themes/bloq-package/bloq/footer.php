<?php
/**
 * The Template for displaying footer.
 *
 * @package WordPress
 * @subpackage Bloq
 * @since Bloq 1.0
 */
?>
<footer class="row">
	<div class="container row">
	<!--	<div class="col span_16" style="border:2px solid;"> -->
			<?php /*if(!function_exists('dynamic_sidebar') || dynamic_sidebar('Footer 1 Widget')) {};*/

/* echo do_shortcode("[glg_short_team][/glg_short_team]"); */


 ?>
		<!-- </div> -->
		<!-- <div class="col span_4">
			<?php if(!function_exists('dynamic_sidebar') || dynamic_sidebar('Footer 2 Widget')) {}; ?>
		</div>
		<div class="col span_4">
			<?php if(!function_exists('dynamic_sidebar') || dynamic_sidebar('Footer 3 Widget')) {}; ?>
		</div> -->
		
		<div class="clear"></div>
	</div>
</footer>
<div class="row" id="copyright">
	<div class="container row">
		<div class="col span_6">
		&copy; <?php _e('Copyright', 'themelovin') ?> <?php echo date( 'Y' ); ?> <a href="http://www.esenzit.com/">Senzit</a>
		</div>
	<div class="col span_6">
			<?php /*echo glg_social_link();*/?>

<div style="text-align: center; font-size: 20px; margin:0;">
	<a class="ss-icon vs-twitter" href="#"><span></span></a>
	<a class="ss-icon vs-facebook" href="#"><span></span></a>
	<a class="ss-icon vs-dribbble" href="#"><span></span></a>
	<a class="ss-icon vs-google" href="#"><span></span></a>
	<a class="ss-icon vs-mail" href="#"><span>✉</span></a>
	<a class="ss-icon vs-skype" href="#"><span></span></a>

	</div>
	
		</div>
	</div>
</div>
<?php echo get_option('adm_tracking'); ?>
<?php wp_footer(); ?>
</body>
</html>