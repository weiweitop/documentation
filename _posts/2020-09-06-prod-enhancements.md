---
title: Product enhancements main
sidebar: release
permalink: prod-enhancements.html
layout: post
description: This document is intended to briefly explain both generic and client-specific features implemented in HR Works & HR Works Plus.
product: HRW, ESS
tags: Generic
---
# HR Works
## Administration

### Missing document Notification to employee and HR

### June 2019 - #14555

The client required to send notification to HR and employees in case of missing documents.

For implementing this the following steps were followed.

1.  Added a new category named “Missing Personal Record Notification” in Email settings.

2.  Execute the REPX file for the Custom Report.

3.  Run three scripts for displaying the custom report created in the email settings and for displaying the new category created in the email settings.

_Fig: Email settings_

## Option to copy master and application details from existing company

### Dec 2018  - # 9976

The client wants to clone the following items (data, fields, settings, etc.) from an existing company to the new company they are creating.

*   **Data, fields and settings to be cloned**: card types, card master, sequence control, action form, application parameters etc.

For this option to appear in HR Works, two different scripts have to be executed in the HR Works database.

1.  Script to create **Company Creation** menu. This will insert a new screen (Company Creation) in the **Administration** module >> **System Management** section.

2.  Script to create new value types (screen selections)

Once the above scripts are executed, can make a clone of the existing company from the **Compony Creation** screen. From the **Data to Copy** dropdown field of the **Company Creation** screen, users can select the items they want to copy from the existing company to the new company they are creating.  
![](images/prod-enhance-image4.png)

On successful completion of the company creation process, the following message appears:  
![](images/prod-enhance-image5.png)

