---
title: Product enhancements (datatable)
sidebar: release
permalink: prodEnhanceDataTable.html
datatable: true
layout: post
product: HRW, ESS
tags: Generic
---
<div class="summary"><br>All enhancement docs that we create automatically get listed here with respective data.<br>We can any have columns other than product and tag columns if required.</div>
<hr>

<div class="datatable-begin"></div>

<table>
<thead>
<tr>
<th width="10">Product</th>
<th width="50">Point [Title]</th>
<th width="40">Tags</th>
</tr>
</thead>
<tbody>
{% for my_post in site.posts %}
<tr>
<td>{{ my_post.product }}</td>
<td><a href="{{ my_post.url | prepend: site.baseurl }}">{{ my_post.title }}</a></td>
<td>
<ul>

    {% for tag in my_post.tags %}
      {% capture tag_name %}{{ tag }}{% endcapture %}
      <a href="{{ site.baseurl }}/tag/{{ tag_name }}"><nobr>{{ tag_name }}</nobr></a> | 	  
    {% endfor %}
</ul>


</td>
</tr>
{% endfor %}

</tbody>
</table>

<div class="datatable-end"></div>




{% include links.html %}
