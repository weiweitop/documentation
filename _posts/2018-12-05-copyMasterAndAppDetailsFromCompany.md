---
title: Option to copy master and application details from existing company
sidebar: release
permalink: copyMasterAndAppDetailsFromCompany.html
product: HRW
layout: post
description: Request by client to enable copying items from an existing company while creating a new one. 
tags: HR-Works Dec-2018 Company-creation Copy-master-data Administration   
---

### Dec 2018  - # 9976
<div class="prodSummary">The client wanted to clone the items such as data, fields, and settings from an existing company to the new company they are creating.</div>

**Data, fields and settings to be cloned**: *Card types*, *Card master*, *Sequence controls*, *Action form*, *Application parameters* etc.

To enable this optionn, two different scripts have to be executed in the HROn database.

   1.  Script to create **Company Creation** menu. 
       
       This will insert a new screen named `Company creation` in the **Administration** module >> **System Management** section.

   2.  Script to create new value types `(screen selections).`

       Once the above scripts are executed, users can make a clone of the existing company from the **Compony Creation** screen. 
       
       From the **Data to Copy** dropdown field of the **Company Creation** screen, users can select the items they want to copy from the existing company to the new company they are creating.  
       ![](images/prod-enhance-image4.png)

       On successful completion of the company creation process, the following message appears:  
       ![](images/prod-enhance-image5.png)


<br>
{% include links.html %}
