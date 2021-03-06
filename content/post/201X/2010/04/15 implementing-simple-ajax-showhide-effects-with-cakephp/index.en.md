---
title: Implementing simple ajax show/hide effects with cakePHP
date: 2010-04-15T09:56:52+00:00
lastmod: 2020-02-14T00:14:09+00:00
author: Mathias Wellner
categories:
  - software
tags:
  - cakePHP
---

There are quite some tutorials on ajax effects out there [1, 2], but most were too complex for my needs. I simply wanted an enhanced index page for projects, which shows some details for each project and more on demand with a sliding effect. So here is what my solution looks like.

<!--more-->

#### Basics

I used cakePHP 1.3 RC3. I assume that you have a running cakePHP application with an index view of your main objects of concern. You also need to download the [prototype](http://www.prototypejs.org/) and [scriptaculous](http://script.aculo.us/) scripts and put all js-files into your /app/webroot/js folder.

#### Activating ajax

In your default layout, you have to include the links to the prototype and scriptaculous scripts in the head section of the template.

{{<highlight php>}}

<!-- file app/views/layout/default.ctp -->
<head>
	<!-- existing head settings -->
	<?php
	echo $javascript->link('prototype');
	echo $javascript->link('scriptaculous.js?load=effects');
	?>
</head>
{{</highlight>}}

You also need to activate the AJAX and Javascript helpers in the controller where you want to use it. I prefered to update the app controller, which enables the helpers for all controllers. Your app controller (usually at app/app_controller.php, create if necessary) should include the ajax and javascript helpers like this:

{{<highlight php>}}

<!-- file app/app_controller.php -->
<?php
class AppController extends Controller {
    var $helpers = array('Html', 'Form', 'Ajax', 'Javascript');
}
?>

{{</highlight>}}

#### In your view

In your view you can now include id-marked divs and ajax links to control the visibility of these divs. Assuming that your model is named Project, you need to update your index view at /app/views/project/index.ctp. I use two table rows for that. The first row contains the project name, the ajax links for showing/hiding details, and the actions. The second row is invisible at first (display:none) and contains the div which is controlled by the ajax links. To my knowledge it is not possible to hide/show entire table rows, therefore the second row is rendered empty at first. But it looks quite nice with the default alternate background color for table rows.

The real trick here was to leave the second argument for the ajax link empty, linking to the same page. All other examples had links to sub pages implemented there what seemed too complex for my wishes. Of course, this implementation means that the entire content is loaded every time. For huge amounts of data this could be a performance issue.

{{<highlight php>}}

<!-- file app/views/project/index.ctp -->
<table cellpadding="0" cellspacing="0">
<tr>
    <th><?php echo $paginator->sort('name');?></th>
    <th class="actions"><?php __('Actions');?></th>
</tr>
<?php
$i = 0;
foreach ($projects as $project):
    $id = $project['Project']['id'];
    $i++;
?>
<tr>
    <td>
	<?php echo $project['Project']['name'];?>
        <?php 
        // define string for div id
        $div_string = 'project_fold_'.$i;

    // create ajax link which shows project details
    echo $ajax->link(
        'show details',
        '',
        array(
     	'update' => $div_string,
    	'loading' => 'Effect.Appear(\''.$div_string.'\')',
        )
    );

    // create ajax link which hides project details
    echo $ajax->link(
        'hide details',
        '',
        array(
     	'update' => $div_string,
    	'loading' => 'Effect.Fade(\''.$div_string.'\')',
        )
    );
    ?>
    </td>
    <td class="actions">
    <?php echo $html->link(__('View', true), array('action'=>'view', $id));?>
    <?php echo $html->link(__('Edit', true), array('action'=>'edit', $id));?>
    <?php echo $html->link(
            __('Delete', true),
            array( 'action'=>'delete', $id),
            null,
            sprintf(__('Are you sure you want to delete # %s?', true), $id));
        ?>
    </td>

</tr>

<tr>
    <td colspan="2">
	<!-- display div which can be shown/hidden by ajax links -->
	<?php echo $ajax->div($div_string, array('style' => 'display:none')); ?>

    <!-- project details -->
    <h3><?php echo __('Project details');?></h3>
    <dl>

  	    <dt><?php echo __('Description');?></dt>
	    <dd><?php echo $project['Project']['description'];?></dd>
	    <dt><?php echo __('Budget');?></dt>
	    <dd><?php printf("%.2f&thinsp;kCHF", $project['Project']['budget']);?></dd>
	</dl>

    <?php echo $ajax->divEnd($div_string); ?>
    </td>

</tr>
<?php endforeach; ?>
</table>
{{</highlight>}}

If you want to go one step further, you can try to show/hide the ajax links as well. At first, only _show details_ is visible. When details are visible, only _hide details_ can be seen.

#### References

- [ajax cakephp](http://www.reversefolds.com/articles/show/ajax), ReverseFolds
