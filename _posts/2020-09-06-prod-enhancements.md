---
title: Product enhancements main
sidebar: release
permalink: prod-enhancements.html
layout: post
description: This document is intended to briefly explain both generic and client-specific features implemented in HR Works & HR Works Plus.
product: HRW, ESS
tags: Generic
---

<DIV class="scope">
{{ page.description }}
</DIV>


# HR Works
## Administration

### Missing document Notification to employee and HR

### June 2019 - #14555

The client required to send notification to HR and employees in case of missing documents.

For implementing this the following steps were followed.

1.  Added a new category named “Missing Personal Record Notification” in Email settings.

2.  Execute the REPX file for the Custom Report.

3.  Run three scripts for displaying the custom report created in the email settings and for displaying the new category created in the email settings.

> ![](images/prod-enhance-image3.png)

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

# Payroll Management

## Validation for TS on payroll process

### July 2019 - #15852

A new validation was added in the payroll processing. If daily time sheet of the employees is missing for any day, then the payroll for the employee must be in hold.

![](images/prod-enhance-image6.png)

_Figure: Validation shown while processing payroll_

## Balance Compensatory Off need to payout during Final Settlement

### June 2019 - #14875

The client required to payout the balance compensatory off to the employee when an employee resign. Following steps are executed to implement this.

In Application parameter, LV-1 Tab, a new parameter named “Compensatory Settlement Paycode” was introduced.

Execute a script to enable the parameter.

![](images/prod-enhance-image7.png)

_Fig: PAF Screen showing Settle Outstanding Compensatory Off during separation_

## Loan Amount limit based on employee service

### May 2019 - #14551

The client required to add a validation message in the Loan Application screen to limit the loan amount based on the service period of the employees.

Execute an SP and set the Entity ID for bringing the validation message in the Loan Application Screen.

![](images/prod-enhance-image8.png)

_Fig: Loan Application Screen showing the validation message_

## Approved OT to Pay through Off cycle Payroll

### May 2019 - #14550

Initially OT payments were processed through the monthly payroll sheet. Now the client required to approve the OT payments through the Off cycle Payroll.

For this a new parameter was introduced in the Application parameter, named ‘OT Integration From ESS’ in the ESSTS-1 tab in the HRW + Application parameters. The value of the Parameter must be set as ‘OT Entry (Off cycle)’.

Execute a query for enabling the Application parameter.

![](images/prod-enhance-image9.png)

_Figure: HRW + Application parameter Screen_

## Option to restrict payroll period visibility in the final settlement screen

### May 2019 - #14880

Currently in the Final Settlement Screen, pay period combo box list all the pay period starting from the system. The client required to restrict the visibility of the payroll period in the Final Settlement Screen.

For this a new parameter called ‘Backdated Periods For Final Settlement’ was introduced in the PRL-1 tab in the Application parameter.

This restrict the payroll period visibility based on a flag in the system. By default, it lists all the pay periods Or else the payroll visibility will be based on the number set in the Application parameter.

![](images/prod-enhance-image10.png)

## Option to correct Attendance data from Payroll Module

### April-2019 - #14605

In HR Works payroll module, the details regarding the attendance such as overtime hours, shortage hours etc was not able to edit and the information from the attendance module was considered. Hence the client required to add a feature which enables to edit the attendance data if required from the payroll module and thus to calculate the payroll accurately.

In order to achieve this, a new parameter is added in the PRL-1 Tab named OT Entry Batch for TAM Interface Employees.

The new parameter contains three options which are

1\. Do not Allow - OT from Overtime Entry Batch will not be considered in payroll calculation.

2\. Add OT Batch OT to TAM OT - OT from Overtime Entry Batch will be added to OT from attendance data.

3\. Override TAM OT with OT Batch OT - OT from attendance will not be considered if OT entry exist in Overtime entry batch.

![](images/prod-enhance-image11.png)

_Fig: Application parameter settings for Attendance correction from Payroll Module_

## Separation of employees without salary information

### Mar 2019 - #14441

Some of the clients want to separate the employees without completing the Payroll process and Final Settlement. In such cases Termination Date is updated at the time of employee separation approval.

In order to implement this, following changes are made.

In Application parameter, in HRW-1 tab, a new value named “Set Separation Date in Employee Master” was introduced with two options such as approval of Final Settlement and On Separation Action Form Approval if no Payroll Sheet exists for Employee.

While selecting On Separation Action Form Approval if no Payroll Sheet exists for Employee from the Application parameter, it will check whether the employees in the employee separation Batch already have a payroll sheet and if not, it will update the Termination date or else will work as usual as the final settlement.

![](images/prod-enhance-image12.png)

_Fig: Application parameter Settings_

## OT Report Template

### March-2019 - #13897

An OT report was required for the client in the Wage type Based Timesheet report screen.

For these two additional options was added in the Summary options in the Wage Type screen named as OT Sheet and OT Summary.

For this execute a script for getting the OT options.

Only one could be selected from OT Sheet and OT Summary at once during a specific month.

The OT Sheet report will show the complete OT Data during the selected month with displaying the data of each day, whereas OT Summary shows the summarised data of the OT details.

![](images/prod-enhance-image13.png)

Fig: Wage Type Based Timesheet report

## Customization on Salary Hold and Release

### Feb 2019  - # 11755

In Salary Hold and Release, initially the total salary of an employee was hold till the month where the release hold is applied. It was not able to hold a Lumpsum amount or percentage of the employee salary for a particular month.

The client needed the following changes in the Salary Hold and Release.

1.  To hold the Lumpsum amount or Percentage of Net amount of the salary of a particular month.

2.  To release the amount either through monthly payroll or off cycle payroll.

> **In order to implement this, following changes are made.**

1.  In the **Salary Hold and Release** screen, a new option to select the Hold period is added.

2.  A query is executed in the DB.

> **Salary Hold:**
> 
> While selecting the Batch Type as Hold Salary, a new check box and Hold period is displayed.

1.  For Holding the salary for a particular period. Click the check box and enter the hold period.

> **Salary Release**
> 
> While selecting the Batch Type as Release Hold, a new option to select the Release method will be displayed.

1.  Select either Normal Payroll or Off cycle Payroll as the Release method.

> Further, release the batches, through Off cycle payroll, if the payment option is Off cycle. Or else process the settlement through normal Payroll sheet.
> 
> ![](images/prod-enhance-image14.png)

_Figure: Salary Hold in Salary Hold and Release_

## Upload option in Cost Allocation Setup

### Oct 2018 (#11912)

Cost Allocation transaction did not have **Upload data from Excel** option. This option has been added to the cost allocation transaction screen with the following features.

*   Generate Excel Template: As with other transactions with Excel upload option, cost allocation transaction also requires that an excel template be generated into which users can add cost allocation details of employees and then upload it. The generated excel template will have separate columns for every project so that the users can enter project-wise cost allocation data. Note that Project is one of the positional entities in the client DB.

*   Upload from Excel: Users can enter employee’s cost allocation details into the generated excel template and then upload it to proceed with rest of the transaction process.

## Loan Repayment Installments Amount Deduction during Leave Settlement

### July 2018 (#10375)

Usually, when an employee goes for leave, his loan repayment amount for leave start month is only deducted while processing leave settlement. But now, with this new feature, the loan repayment amount can be deducted for not only the leave start month but also for leave end month as per settings done in Application parameter. Furthermore, there is an additional functionality where if the days in next month falls less than 15 days, then the deduction is not taken.

In order to achieve this functionality, a new parameter **Loan Installment Deductions in Leave Settlement** is added in the **Application parameter> LOAN-1** tab. It consists of three options as:

<table>

<thead>

<tr>

<th>Sl. No</th>

<th>Parameter</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td>Loan Deductions till Payroll End Date of Leave Start Date</td>

<td>

By default, the parameter is set to ‘Loan Deductions till Payroll End Date of Leave Start Date’. Loan deduction in leave settlement works as normal in this case.

For instance, if an employee is going for leave from May 15<sup>th</sup> to June 15<sup>th</sup>, then if this parameter is set, then the loan repayment amount for the month of May only is deducted.

</td>

</tr>

<tr>

<td>Loan Deductions till Payroll End Date of Leave To Date</td>

<td>

Loan amount is deducted till the payroll end date of the ‘Leave to date’ month.

For instance, if an employee is going for leave from May 15<sup>th</sup> to June 15<sup>th</sup>, then if this parameter is set, then the loan repayment amount for the month of May and June is deducted.

</td>

</tr>

<tr>

<td>Loan Deductions till Payroll End Date of Leave To Date (Cutoff 15th)</td>

<td>

Loan amount is deducted till the payroll end date month of the Leave to date only if the settlement to date falls after 15th day of the Leave to date.

In this case, if the ‘Leave to date’ falls within 15<sup>th</sup> date of the next month, loan amount is deducted only for previous month.

For instance, if an employee is going for leave from May 15<sup>th</sup> to June 15<sup>th</sup>, then if this parameter is set, then the loan repayment amount for the month of May will be deducted and if the leave to date falls below 15<sup>th</sup> of next month, then the amount is not deducted for the month of June.

</td>

</tr>

</tbody>

</table>

The deducting of loan repayment amount while performing leave settlement will be done on the basis of the value assigned for this parameter.  
![](images/prod-enhance-image15.png)

# Leave and Accrual Management

## Year End leave balance in Vacation accrual report

### July 2019 - #15626

The client required to add additional field in the Vacation Accrual Report named Pending Leaves and Year End Leave balance.

Pending leave displays the leave that need to be deducted for the year.

Year End Leave Balance displays the balance leave for the selected year.

For implementing the change, execute a SQL query.

In the RPT-1 Tab of Application parameter, Set the value for ‘Additional fields in Vacation Accrual Report’.

![](images/prod-enhance-image16.png)

_Figure: Vacation Accrual Report showing Pending leaves and Year end leave balance_

## Training cost recovery through Final Settlement

### June 2019 - #14554

The client required to deduct the training cost during the final settlement. The training provided to the employees are tracked in the HR Works under the Personal Records. When an employee resigns before one year of training taken date, the amount of training cost is deducted during the employee’s final settlement.

The training details stored in the HR Works are Effective Date, Training Type, Training subject and Training cost.

In order to implement the feature, execute the custom SP.

## Show Leave From Date and Leave To Date in the leave settlement screen

### May 2019 - #15232

Initially the Leave Settlement Screen did not showcase the From Date and To Date information regarding the leave. Therefore, the client required to include the Leave From Date and Leave To Date in the Leave Settlement Screen.

![](images/prod-enhance-image17.png)

_Fig: Leave Settlement screen_

## Two levels of approval during leave settlement.

### Feb 2019  - # 12491

In HR Works, there was a parameter (Multilevel AWF) by which users can set approval workflow for all common transactions.

The client requires a different workflow to be set for leave settlement transaction. For this a new parameter ‘ M**ultilevel AWF on Leave Settlement** ‘ is added in Application parameter AWF1 Tab.

## Air ticket encashment report

### Feb-2019 - #13263

Initially, air ticket encashment report was not generated.

The client required to avail the Air ticket encashment report through the pay slip.

For implementing this change, import REPX file and execute XML file.

For creating the Air Ticket Encashment report, follow the steps below:

1.  In the Air Ticket Availment screen, Select the ‘Off Cycle Payroll’ as the Availment Option. This will allow to complete the availment process through the Off-cycle screen.

2.  While printing Pay slip select the report type as Air ticket Encashment and select Type as Off Cycle.

> ![](images/prod-enhance-image18.png)
> 
> _Figure: Payslip screen_

## Vacation eligibility based on service days.

### Dec 2018  - # 12943

For the client, for a few employees, vacation days or eligibility will change as per the service days of employee.

Below lists the slab for accrual.

*   0-3 Years > 22 working Days

*   3-6 Years > 24 working Days

*   6-10 Years > 26 working Days

*   10-20 Years > 28 working Days

20 Years and above > 30 working Days

Leave Days will be accrued on Pro-data basis, which means if an employee’s slab changes at the mid of a month. His/ her balance should be calculated pro-data basis.

**Example**: If an employee completes the 3 years by 15th of June, his leave accrual should be 15 days with 22 working days and rest with 24 working Days.

In both ESS and HR Works Leave application, leave balance need to show as per the above accrual method. The client needs to show the leave balance as of leave start date

For this, a new parameter (**Apply Prorata Calculation in Vacation**) is added to **Application parameter >>** **LV-1**. If the value of this parameter is set to ‘Yes’, leave days will be accrued based on pro-data basis. Leave balance in leave application will be shown as per this accrual method.

## Leave Settlement pay on Calendar days

### Dec 2018  - # 11866

Vacation pay is calculated based on the calculation criteria set in vacation codes alone. The client requires that it should be calculated based on the daily rate policy applicable to the employee.

To customize the system as per client’s requirement, a new application parameter (**Leave Advance Pay Calculation**) is added to the **LV-1** tab of the **Application parameter**. If its value is set as **Daily Rate Basis Till Leave To Date**, then the vacation pay calculation in leave settlement will change and new calculation will be as follows:

Vacation pay = sum (salary for pay components in vacation pay from leave start period to leave to date) - sum (salary for pay components in vacation pay from leave start period to leave from date)

## Leave settlement Recovery changes

### ******Oct 2018 (#11068)**

In HR Works, when an employee goes on vacation and requests for Leave salary advance, he/ she will be paid the salary till the leave start date and leave salary for the leave days. The leave salary consists of gross salary excluding COLA, OTHER and MOBILE allowance. These allowances will be paid for the leave days along with month end payroll. Leave salary paid to the employee will be considered as leave salary advance and it will be recovered from the subsequent payrolls.

In case if an employee has got any additional payments such as OT, Bonus or allowances (COLA, OTHER and MOBILE), those payments will be made only after recovering the leave salary advance paid to the employee. The client now requires that the recovery be made only from the paid leave salary components and if any additional payments are there, they should not be touched and have to be paid as usual.

Example:

**Employee Salary**- Basic: 500, HRA: 200, TRA: 50, OTH: 50

**Leave** – 16th May 2018 to 19 June 2018 (25 days)

**Off days** – FRI-SAT

<table>

<thead>

<tr>

<th>HR works process</th>

<th>New process</th>

</tr>

</thead>

<tbody>

<tr>

<td>

Leave Settlement calculation

Salary till 15th May = 373.33 BHD

Leave Salary for 25 days = 625 BHD

Net pay = 998.33 BHD Leave Salary Advance = 998.33 BHD

June Payroll

Salary for June = 800 BHD

OT payable in June = 35 BHD

Total Payable in June = 835 BHD

Leave Salary advance Recovery = 835 BHD

Net Pay for June = 0 BHD Leave Salary Advance = 998.33 -835 =163.33 BHD

July Payroll

Salary for the July = 800 BHD (considering employee returned on time)

OT payable in July= 30 BHD

Total Payable in July= 830 BHD

Leave Salary Advance recovery = 163.33 BHD

Net Pay for July = 666.67 BHD

Leave Salary advance = 163.33 – 163.33= 0 BHD

</td>

<td>

Leave Settlement calculation

Salary till 15th May = 373.33 BHD

Leave Salary for 25 days = 625 BHD

Net pay = 998.33 BHD Leave Salary Advance = 998.33 BHD

June Payroll

Salary for June = 800 BHD

OT payable in June = 35 BHD

Total Payable in June = 835 BHD

Leave Salary advance Recovery = 750 (BASIC+ HRA + TRA) +23.33 (OTHER allowance for 15 days) =773.33 BHD

Net Pay for June = 61.67 BHD Leave Salary Advance = 998.33 -773.33 =225 BHD

July Payroll

Salary for the July = 800 BHD (considering employee returned on time)

OT payable in July= 30 BHD

Total Payable in July= 830 BHD

Leave Salary Advance recovery = 225 BHD

Net Pay for July = 605 BHD

Leave Salary advance = 225 – 225= 0 BHD

</td>

</tr>

</tbody>

</table>

**Summary of Changes**

The following changes are made

1.  **Application parameter** A new parameter ‘**Enable Pay Codewise Leave Advance Recovery Setup**’ is added in the **LV-1** tab of the **Application parameter** screen. Default value will be ‘**No’**. In order to meet client requirement and to enable the **Pay Pay Code-wise Leave Advance Recovery Setup** tab, the parameter value should be set to Yes.  
    ![](images/prod-enhance-image19.png)

2.  Vacation Codes screen:  
    The **Pay Code-wise Leave Advance Recovery Setup** tab displays the following:

    1.  All payable earning codes which are not a part of Accrual Components will be displayed

    2.  An additional component named ‘Salary Arrear’.

> For each earning code, any of the following Recovery Amount options can be set

1.  **Full Amount** (this will be the default option. If this is selected, then the full amount corresponding to the pay code will be subject to recovery).

2.  **Amount up to the amount Paid in Leave Settlement.** (if this option is selected then only the amount paid in the corresponding leave settlement will be subject to recovery)  
    ![](images/prod-enhance-image20.png)

**Note**: The **Pay Codewise Leave Advance Recovery Setup** tab will appear only if the **_Recovery Amount_** options are active in the db.

## Vacation Availment Based on Accrual Average

### **Oct 2018 (#10176)**

Currently the daily rate calculation method for vacation encashment is based on the **Daily Rate Calculation Basis** selection on the **Vacation Scheme** menu. The client now requires an option to set daily rate calculation method for vacation encashment based on vacation accrual average (ie Daily rate = total accrual amount/ total accrual days). For this a new dropdown field (**Vacation Encashment Calculation Method**) is added to the **Vacation Scheme** settings. Users can select any of the following two options from the **Vacation Encashment Calculation Method** dropdown field**.**

1.  **Based On Current Daily Rate**: current functionality/ default setting

2.  **Based On Vacation Accrual Average**: Daily rate = total accrual amount/ total accrual days

![](images/prod-enhance-image21.png)

Another requirement of the client is to have an option to specify how arrears are recalculated against salary revisions. For this, a new dropdown field (**Accrual Amount Arrear Recalculation on Salary Revision**) is added to the **Vacation Scheme** menu from which any of the following options can be selected as required:

*   **For Full Accrual Days Balance:** current functionality/ Default setting

*   **From Salary Revision Effective Date**: recalculate accrual only from salary revision period

*   **No Calculation**: no recalculation of accruals on salary changes

    ![](images/prod-enhance-image22.png)

## Leave split up based on leave balance

### July 2018 (#10175)

Normally, if an employee is delayed from annual leave, system will be extending the leave with annual leave itself. But, if the employee doesn't have sufficient annual leave balance, then the system will split up the leave extension in to two- one with available annual leave balance and the rest with unpaid leave (salary will be zero and accruals are excluded for these days).

This functionality is achieved by introducing a new parameter **Default Leave Type in Leave Return Screen for Delayed Return if Balance Exceeds** in Leave Master for leaves having leave type category ‘Adjust Vacation Balance’ ![](images/prod-enhance-image23.png)

While creating Leave Return, the user can create a new leave based on ‘default leave type in leave return screen for delayed leave’ if employee have enough leave balance. Otherwise, return leave will be split in to two leaves, first leave days will be leave balance days, second leave will be difference between total leave days and leave balance. User will not be able to modify this leave data.

## Time Lieu Expiration

### July 2018 (#8245)

There was no expiry for employee’s Time in Liew hours. On the **Application parameter>LV-1 tab,** a new parameter (**Cut-off for availing Compensatory Off Balance)** is added to set a cut-off value so that the Time in Lieu hours will expire after a predefined value (Days).

![](images/prod-enhance-image24.png)  
The values available for selection are listed below. These values refer to the time period for the expiration of the compensatory off. For instance, If the value is set as 30 days, the employee will have to avail this compensatory off within this 30 days’ time, otherwise it will get expired and so it will not be available for him.

*   30 Days

*   60 Days

*   Till end of Next Month

*   Till end of next 2 months

*   Till end of Current Month

**Max -ve allowed Compensatory-Off Balance** parameter in **Application parameter>LV-1** tab is used to validate the leave days while taking the compensatory off Type Leave.

For instance, on assigning a value 5 for this parameter, while applying for compensatory off, even though the leave balance is 17, an additional 5 leaves also can be applied.![C:\Users\LENOVO\AppData\Local\Temp\SNAGHTML38435d0c.PNG](images/prod-enhance-image25.png)

## Probation notification with Attachment

### July 2018 (#9955)

Here the customization requirement was such that an email notification should be send to the Line Manager and head of department 30 days before the probation end date with Probation evaluation form. The header details of Probation need to be filled based on employee’s data. The probation notification to Managers should only be send once.

The solution approach is done in the following manner:

*   This feature is handled by introducing a new alert type in Alert Configuration screen - 'Probation Alert Prior to

*   Probation End Date'.

*   The custom report should be made for Probation Report and this will be available for selection in Alert

*   Configuration.

**Note:**

*   Alert functionality is moved from **HRW License Manager** to **Email Attendance Details** service.

*   A new key is added in HRW License Manager and Email Attendance Details – **EnableAlert** which will be **true in former and false in later (by default**). This parameter, if set as true, Alert functionality will be working as usual. This key **should not be** set as true in both services.

*   The probation report uses **Report Emailer** application for mail sending, like the Attendance Report emailing functionality. So the URL to Report Emailer exe should be set in service’s config file.

*   The key **TimeInterval** used in License Manager is also added in Email Attendance Details service (default as 1)

![](images/prod-enhance-image26.PNG)

## Dashboard

### July 2018 (#5266)

Development of Dashboard Module in HRW. This include the following sub modules:

*   **Widget Creation**: This screen is mainly used to create a dashboard widget of any type.

*   **Dashboard Designer**: Once the widget is created, the user can design the dashboard.

*   **Dashboard Viewer**: Finally, the dashboard can be viewed from Dashboard Viewer screen.

    *   The dashboard viewer working is based on the settings in widget creation and the design in the dashboard designer page.

    *   The filter option in Dashboard viewer is based on the filter option of each widgets in widget screen.

    *   The dashboard user can filter the dashboard from the filter option set in widget screen.

    *   If the filter selection is checked in 'Is user overridable', then the user can select all available filter options otherwise user can apply only the selected filter options in the widget screen.

# Common

## Employee Detail report without Salary

### July 2019 - #16094

In some companies, some of the members in the HR team do not have the access to salary of the employees. Hence, the client required to view the employee detail report without the salary information.

For implementing this feature, execute an SQL.

![](images/prod-enhance-image27.png)

## Send ICT form on Employee creation

### May 2019 - #14851

The client requires to send an ICT form to the IT department head while a new employee is created in the system. In this format we are not sending employee details.

For this, a new view is created. Execute the view.

In Card Types >> Other Cards, create the fields to Upload and attach the files in the Card Master and name the action form as NEWEMP.

Crete the workflow for sending the email and link it with the action form.

![](images/prod-enhance-image28.png)

## Dashboard Items

### March-2019 - #13835

The client required to view the below details in the Dashboard window.

*   Pending Leave details upon which leave settlement is not processed.

*   Pending separated employee details, whose final settlement is not processed.

*   Upcoming Leaves of 30 days, where leave start date is within 30 days from today.

*   Alert Details of Company Document.

*   Alert details of Employee Document.

Changes based on the customised SP

![](images/prod-enhance-image29.png)

_Fig: Dashboard Viewer_

## Transaction Period option (as same feature available in TAS)

### March-2019 - #14031

The transaction period of the reports is customised in this point. The requirement of the client was to view the transaction period in three different ways such as Today, Previous working Day and Period. However more options for selecting the transaction period has added in this point. This change is applicable in both HR Works and HR Work Plus in the general transaction screen and report screens.

The changes are made as follows.

1.  Three new parameters named ‘Default Date Range in Transaction & Reports’, ‘Default From Date’ and ‘Default To Date’ are added in the TAM-1 tab in the Application parameter.

2.  Execute a script for enabling the newly added parameters and its selections.

![](images/prod-enhance-image30.png)

_Fig: Application parameter Settings_

## Company Wise Employee Strength Report

### March-2019 - #12954

The client requires to view the Company wise employee strength indicating the number of employees working, absent, on annual leave and E-Leave. Follow the below steps.

1.  Run the SP (In the SP you can change the leave which you need to filter.)

2.  In the Custom Report Designer, create the Template and set Report Source and set the parameters.

> ![](images/prod-enhance-image31.png)
> 
> _Figure: Report showing employee strength_

## Employee Head Count Report

### March-2019 - #12953

The client required to view the number of employees working in each project separately.

Therefore, a report was developed showcasing the project name, project manager and number of employees by grouping the employees based on the destination.

1.  Execute the SP for getting the head count details.

2.  In the Administration Module, in the Custom Report Designer, create the Template and set Report Source as the Custom SP and set the Custom Report Module with required module.

3.  Set the required parameters of Custom SP and the data types in User Entry Values.

4.  To view the report, Select Document Template and set parameters for the template and Preview.

![](images/prod-enhance-image32.png)

> _Figure: Report showing employee strength in each project_

## Additional Field in Employee Profile Report

### March-2019 - #14269

In the Employee Profile Report, there was no option to add the photo of the employee. As per the client requirement Employee Profile Report was customised by adding the option to add the Photo of the employee, gratuity as on date and leave balance as on date.

In order to implement this, an XML file and REPX file must be executed.

The fields required in the Report Template screen is saved through the XML file.

The format for the report is designed in the REPX file.

![](images/prod-enhance-image33.png)

_Figure: Employee Profile Report_

## Entity Headcount Report

### Feb-2019 - #13464

The client maintains Designation, Department and Grade as the positional entities. There was no provision to get the head count of the employees by these entities in form of a report. Therefore, a new report named Entity Headcount report in which entity wise head count can be viewed is introduced.

Changes based on view and xml

![](images/prod-enhance-image34.png)

_Figure: Custom Reports- Common_

## Dash Board to show Pending Approval Items

### Feb 2019  - # 12361

Initially, Pending Approvals were listed in the Pending Action Screen in the Administrative module on the basis of the access rights. Now, the client needed a dashboard that shows pending approval items with the user, when logged into the HR Works. Need to show the dashboard as landing page. These changes are made as below:

1.  A new menu '**Dashboard Pending Actions**' is added to HRW

2.  Changes based on SP

![](images/prod-enhance-image35.png)

_Fig: Dashboard viewer_

## Employee Report with specific format

### Dec 2018  - # 13628

The client needs to generate employee report in specific format in HR Works. A new field (Date of birth) has been added to personal record report.

![](images/prod-enhance-image36.png)

## File upload restriction in document upload

### Dec 2018  - # 12051

The client wanted to set the maximum upload file size for the following:

1.  Employee photograph upload (in Employee Master data screen)

2.  Fields with its datatype set as file in Personal Records fields

For employee photograph upload, a new parameter named **Maximum Size of Employee Photo in KBs** is introduced on the **Application parameter >> HRW-1** tab. Users can specify the maximum upload limit for employee photograph in kilobytes.

For the fields on the personal records field groups for which you want to have file upload size limit, do the following:

*   A query needs to be executed in the HR Works DB, in which the type and size of the file to be uploaded can be specified.

*   Once the query is executed, an appropriate value will be available for selection in the **Validations** dropdown field against any of the personal records fields provided it’s data type is set as _File_.

## Employee status **Oct 2018 (#11056)**

Currently the status of employees such as terminated, separated, absconding, and on leave are system generated statuses meaning they are generated by the system based on the respective transaction. In order to track employee’s current and last status, the client requires additional statuses such as Cancelled, Left country, Run away, and Police case to be set for their employees.

For this, a new field is provided in the Employee master for users to update the status with effective date. Status needs to be updated even if the employee is separated. The Employee list now shows employee's system generated status as well as the status that is set manually.

Based on XML change

## Service day in employee Master

**Oct 2018 (#11912)**

Employee master should show service days as of the current date in Year/s Month/s Day/s format. Date should be displayed on the employee’s master screen below his/ her age.

A new parameter is added so that users can specify the format in which service days is displayed (**Application parameter >> HRW-1 >> Service Days Display Format**).

![](images/prod-enhance-image37.png)

If an employee is terminated or is included in employee separation transaction (Payroll Action form) and if the effective date on the separation record is less than the current date, then his/ her service period is calculated and displayed as follows:

No. of service days (Current Date - Hire Date) + 1) till the effective date .

## Select all option in the personal record change action form

### July 2018 (#10647)

Implemented Select ‘all’ option for personal record action form on employee list grid. Maximum 5 Employees personal records can be updated through manual entry. The user can generate excel template for all employees and upload the personal record.

![](images/prod-enhance-image38.png)

## Organization Chart Design

### July 2018 (#7971)

*   Added new column named 'Organization Chart By' in Organization Chart Types screen.

*   Entities with ‘This Employee’ data type is shown in this column.

*   The value of this column is used for the new JSON Organization chart.

*   Setting the 'Organization Chart By' value will also enables you to filter the data that needs to be shown in Chart by different Entities within an Entity Type. (Image 1)

*   These selections are shown in Selected Values column.

*   We can show / hide the nodes by clicking on the green arrows in the organization chart. (Image2)

*   Entity Type with Sort order 1 is shown in the organization chart.

![](images/prod-enhance-image39.png)

Image 1

![](images/prod-enhance-image40.png)

Image 2

# Reports

## Missing Document Report

### July 2018 (#10782)

New Report has to be generated for obtaining missing document of employee based on document type. We have added a new report Missing Personal Records. Here, on selecting corresponding document types missing cases will be displayed on previewing.

![](images/prod-enhance-image41.png)

## Company name in reports with Export Friendly option

### July 2018 (#10111)

Company name and report title are now included for the following screens where export friendly print option is used:

*   Attendance Integration

*   Cost Allocation Report

*   Payroll Sheet

*   Employee Details

*   Indemnity Accruals

*   Leave Report

*   Air Ticket Accrual

*   Period Summary Report

*   Salary Register

*   Salary Transfer Details Report

*   User Defined Accrual Register

*   Vacation Accruals

> ![](images/prod-enhance-image42.png)

## Company document in expiry report

## July 2018 (#10141)

We have provided a new screen for company records and in this screen the Company Document Expiry details will be displayed and in Document Expiry report the Employee Document Expiry details will only be displayed. The setup and configuration are all the same as that of Employee document expiry screen and the data are displayed based on alert in each report screen.

The format of the report is embedded here:

![](images/prod-enhance-image44.png)

# Payroll Reports

## Employee Distribution Report

### May 2019 - #6948

The client required a new report named Employee Distribution Report which is a two-dimensional entity report where the entities are taken from the positional and personal entities.

Execute a query for enabling the report.

![](images/prod-enhance-image45.png)

_Fig: Employee Distribution Report_

## Account No and remarks in pay slip

### Dec 2018  - # 14045

Client requires that the following two more details be shown in their pay slip

1\. Account no (entered in the employee > Payment details > Account No

2\. Loan Remarks in the deduction part (remarks which is entered through loan application)

This is implemented by executing xml script in the db.

## Budgetary Report for Company Records

### Dec 2018  - # 12535

The client has a field for displaying amount, which they maintain as the expiry document budget amount, for all items on their company records menu. These data can be viewed as a report when they generate the **Company Document Expiry** report from the Payroll Management module >> Reports section. The client wants to have the total amount for each item on the Company records displayed in the **Company Document Expiry** report which shows the total of all the values in the respective **Amount** field.

![C:\Users\ADARSH~1.ADA\AppData\Local\Temp\SNAGHTML2e899d7f.PNG](images/prod-enhance-image46.png)

## All company Consolidated report

### Dec 2018  - # 12677

The client who has multiple company set up in their DB wants the following:

Now, on the Common >> Company Records menu, users can view the company records of the company they have logged into. The client requires that the users should be able to view the company records data of all the companies in the database regardless of the company they have logged into. For this, user can now configure the Custom Reports in the following manner:

*   A few Stored procedures need to be executed in the HR Works DB. Separate SPs are created for every item on the Company Records menu. Only when you execute the SP meant for an item, the respective view will be available for selection in the **Report Source** dropdown field on the **Custom Report Designer** screen.

*   On the **Administration >> System Management >> Custom Report Designer** screen, a new report will be created by selecting appropriate values from the **Report Source** field. The values that you select here appear as result of executing the respective Stored Procedure in the HR Works DB.  
    ![](images/prod-enhance-image47.png)

*   From the Custom Reports Module dropdown field, select the module in which you want to have the **Custom Reports** menu appear.

> ![](images/prod-enhance-image48.png)
> 
> ![](images/prod-enhance-image49.png)

## Absent details in pay slip

### **Oct 2018 (#12250)**

For one of the clients, the interface period is set as _21st of previous month to 20th of current month_ (see **Application parameter >> TAM-1 >> Absent Leave Integration Period** parameter). The client requires that the reprocess records also be treated as absent. Changes have been implemented so that for whichever date the employee has reprocess (missing IN/ Out), those dates will be shown as absent in his/ her pays lip. The system will show the from date and to date of the days having reprocess as absence in employee’s pay slip in its leave section.

## Salary Pay-out report

### July 2018 (#10489)

Added new report “Salary Pay –out”

The report is included in existing Payment Summary Report. It is done as an XML change. Data will be shown in two grids which can be printed in Excel document.

![](images/prod-enhance-image50.png)

![](images/prod-enhance-image51.png)

## Custom Separated Employee Report

### July 2018 (#10487)

New Custom report is added through Report Template Designer. Execute the xml in order to include this report.

![](images/prod-enhance-image52.png)

## Header/Footer data with/without column headers - WPS

### July 2018 (#10727)

Usually in case of reports like WPS, report format for Header-Footer were pre-defined and couldn’t be changed. Now with this feature we can make changes using XML file.

## To implement Printable Version of Change Control Report

### July 2018 (#8259)

Added new **Change control report** Format.

In this format Company, Business Unit, Division and Department details (show only code) will show after the employee name column.

*   In Earning Deduction Batch, add New Column "Type" to show the Pay Component type Earning or Deduction. Rename the Existing "Type" field as "Component"

*   In Overtime Entry, please show the amount also

*   Please show the destination in Air Ticket Availment

All these requirements have been implemented in the report. Changes are done using XML and customized SP.

![](images/prod-enhance-image53.jpeg)

## Employee document for all companies in single report

### July 2018 (#10143)

Now we have an option to print the employee documents and company documents for all companies from the login company. Two customised SPs are used to show all Company document and Employee documents through the Custom Report Designer. On selecting the required SPs from the combo selection and by enabling respective menu Reports can be viewed.

![](images/prod-enhance-image54.png)

## Configurable separator for CSV and Text file formats

### July 2018 (#10726)

Usually in case of reports like WPS, the report format along with the separators used for differentiating items where pre-defined and couldn’t be changed. But now, by implementing this feature, the separators can be configured for both csv and text file. This is done by executing xml.

![](images/prod-enhance-image55.png)

![](images/prod-enhance-image56.png)

## Position Entity Codes to be added in column chooser

### July 2018 (#11032)

The requirement is to add Position Entity Codes in column chooser for the following reports:

> • Salary Audit Report – Variance
> 
> • Overtime Report
> 
> • Loan deduction List Report
> 
> • Indemnity Accrual Reports
> 
> • Air Ticket Accrual Report
> 
> • Vacation Accrual Report
> 
> • UDA Accrual Report

The feature is implemented in all of the above reports except salary audit report.

## To show the contents of remarks field of an Earning Deduction Batch in the Payroll Comparison report

### July 2018 (#10882)

Earlier in payroll comparison report comment field for earning deduction record it will display comment ‘EarningDeduction.

Now it will show the actual remarks we have entered through Earning deduction screen.

# Time and Attendance Module

## Day Wise OT Payable Report

### July 2019 - #15038

The client required a report that list the OT payable amount for each day. For this, a new grid was introduced in the OT Calculation Report Screen.

For implementing the change, execute a XML for enabling the Day Wise OT Payable Report.

![](images/prod-enhance-image57.png)

## Total OT Payable Report

### July 2019 - #15039

The client required a report that list the total payable OT amount. Hence, in the Period Summary Report new columns named OT Amount, Total OT Amount and Basic salary was added.

For implementing the change, follow the steps below:

Execute the Report Template to enable the Total OT Payable report.

![](images/prod-enhance-image58.png)

## Adjust Shortage hours with Over Time during Payroll calculation

### July 2019 - #15108

A new functionality for adjusting the shortage hours with the overtime is introduced in HR Works. Shortage hours is adjusted from overtime hours in an order of Holiday OT, Off day OT and Normal OT during payroll calculation and the remaining OT hours only will be paid. Further, this functionality must be linked on Department level.

Changes based on customized SP.

![](images/prod-enhance-image59.png)

## New Report - Attendance Summary Report in HR Works

### July 2019 - #15424

The client required to create the Attendance Summary Report in a new format.

For implementing the changes on the Attendance Summary Report, follow the steps below:

1.  Execute a query for enabling the menu.

2.  Import REPX in the Custom Report Designer.

![](images/prod-enhance-image60.png)_  
Figure: Attendance Summary Report_

## Absent Report Emailing

### May 2019 - #14615

The client required to send the Absent Summary Report via email to the supervisors and HR.

For this, Run the script for custom report designer.

Run the script for email settings.

Run the script for identifying the Entity Types.

Import the REPX file for the report.

![](images/prod-enhance-image61.png)

_Figure: Absent Report Generated_

## List Refreshment Allowance in Consolidated attendance Report

### March-2019 - #13346

The client required to view the details of the refreshment allowance of the employees in the Consolidated Attendance report which was not included in the report.

> Created new XML'ConsolidatedRPTTemplate' Report template for showing ' Refreshment allowance'.
> 
> ![](images/prod-enhance-image62.png)
> 
> _Fig: Consolidated Attendance Report showing Refreshment allowance_

## Project Details in Consolidated Attendance Report

### Feb 2019 - # 12955

The Project Details of the employees were not recorded in the Consolidated Attendance Report. Now the client requires the project information to be listed in Consolidated Attendance report. They also need the provision to list multiple project information, in case the employee has worked on one or more projects for a day. For this, an XML script is executed in the DB. Given below is a screenshot of the **Consolidated Attendance Report** once the changes were implemented.

![](images/prod-enhance-image63.png)

## Handling OFF day following an absent day

### Feb 2019 - #13434

Initially, while calculating the attendance of an employee, all the off days were considered as the OFF day.

The client needed to calculate the attendance in the following way:

1.  If an employee is absent on the day just before an OFF day that OFF day should to be considered as Absent.

2.  If there are consecutive off days after the Absent day, all the OFF days should be considered as absent day.

These changes are made as below.

1.  In the **Policy Code** Screen, two new fields were added named as ‘Weekly Off Following Absent Days’ & ‘Public Holiday Following Absent Days’ in the in the Weekly Off /Public Holiday Parameters section.

2.  New field display will be based on the query

![](images/prod-enhance-image64.png)

_Fig: Policy Code Screen_

## Yearly Weekly OFF Limit

### Feb-2019 - #14036

Initially, while calculating the attendance of the employees, all the Weekly Off days where considered as Weekly Off irrespective of any limits.

The client needed to set the Weekly Off days limit for a calendar year to all the employees. After the Weekly Off Day limit, the leaves must be considered as absent.

These changes are made as below.

1.  In the **Personal Records**, add a new field named ‘Weekly Off Limit’ which contains the Effective Date, Limit and Remarks.

2.  A query is executed in the DB for activating the functionality

![](images/prod-enhance-image65.png)

_Figure: Weekly Off Limit_

# TAM Reports

## List Terminal Information in Attendance Reports

### March-2019 - #14431

The client needed to list the terminal Information in the Attendance Reports.

In order to implement this, the following steps were followed.

For displaying the terminal information in the Consolidated Attendance Report, four additional field were added named as MachineID_IN, MachineID_OU, MachineID_IN_2, MachineID_OU_2 in the xml template. The header named could be changed according to the need of the clients. Moreover, the IN terminals and OUT Terminal details were introduced in the report.

Created new XML'ConsolidatedRPTTemplate' Report template for showing 'terminal information'.

![](images/prod-enhance-image66.png)

_Fig: Consolidated Attendance Report with Terminal Information_

## List OT Payable Hours in Attendance Reports

### March 2019 - #14430

The attendance report does not list the details of the OT payable hours. The client required to display the details of the OT Payable hours in the Attendance Reports.

The changes are made as follows.

Updated XML 'ConsolidatedRPTTemplate' Report template for showing ' OT Payable hours'

![](images/prod-enhance-image67.png)

_Fig: Consolidated Attendance Report showing OT details_

## Break Permission Report

### Dec 2018  - # 12814

As per the client’s requirement, a new report (Break Permission Report) is added to the **Reports** section of the Time and Attendance Management module. In this report, users can view the following:

*   break details which are entered through the Employee Break permissions transaction in HR Works

*   break permissions requests made through View Calendar transaction in HRW Web.

The following steps need to be followed to implement this report.

A query is provided, which when executed in the HRW database, will enable the creation of a break permission report template on the **Report Template Design** screen. Once you create the Break Permission Report, it will appear in the **Reports** section of **Time and Attendance** module.

![](images/prod-enhance-image68.png)

## Periodic Summary Report for Emailing

### Dec 2018  - # 12896

The client wants the same periodic summary report in excel format in HR Works to be sent over email as an alert which will be generated monthly from the system.

Changes done by executing scripts (xml).

![](images/prod-enhance-image69.png)

## Email Template for Attendance Exception

### Dec 2018  - # 13178

Client requires that all exceptions for the previous week to be send as attendance exception email alert. Changes based on XML and repx file need to be imported.

![](images/prod-enhance-image70.png)

## New Time Card report for Jordan Company

### Nov 2018  - # 12886

The Time Card report in HR Works web used to show employee name and code together in row and beneath that the time card details of the employees as shown below.

![](images/prod-enhance-image71.png)

It also did not show Branch, Location, and Department, which are positional entities in the client’s DB. As per the client’s requirement, changes have been made so that the report now displays employee code and name in separate columns. The report also displays the Branch, Location, and Department of employees in the respective column. The image below represents the Time card report as it is displayed after the changes:

![](images/prod-enhance-image72.png)

The aforementioned changes to the report was made through the report template in HR Works.

## Break Details in Consolidated Attendance Report

### Nov 2018  - # 12562

The Consolidated attendance report in HR Works did not show the Break details such as (Break IN Time, Break OUT Time, and Break hours. As per the client’s requirement the report now displays these details. If the employee has multiple breaks for a given day, the report will show those details as well.

![](images/prod-enhance-image73.png)

The aforementioned changes to the report was made through the report template in HR Works.

## New format for consolidated attendance Report emailing

### July 2018 (#9514)

New Consolidated Attendance Report for Email reporting which includes split shift.

![](images/prod-enhance-image74.png)

## New Timesheet Report Format

### August 2018 (#10740)

Added new timesheet report as shown below,

![](images/prod-enhance-image75.png)

*   The report will be generated in excel format in the system as per the required format.

*   Shift - this row will show the employees assigned shift codes and Off Day code “O” for the date, if any leaves are present then leave code will be shown as well.

*   Working Hours- this row will show the regular shift hours for the specific shift.

*   Late Hours -this row will show the late arrival or early departure hours Late arrival + Early departure (i.e. Total deduction) for the date.

*   If the employee has any approved break permission for the date, then that approved hours is not considered as late IN or early OUT.

*   OTH - this row will show the pre- approved overtime hours matched with extra hours worked in the TAS for the date. If there is no pre- approval for the day, employee have overtime, but it is not shown here.

*   Total (OT) Single- this column will show the total normal day OT hours for the month.

*   Total (OT) Double- this column will show the total of weekend day OT hours & Holiday OT hours for the month.

*   Total (Late Hours) – this column for total late hours. (Late coming + early out).

*   There are no headers like month, department, section etc. Month and year are shown as per the format. E.g.: Jan-18

*   Excel file name will be defined as Month and Year (MMYYYY).

*   Contains only one common header for all employees like Emp. No, Name, Type, Period, Total (OT) Single, Total (OT) Double, Total (Late Hours) etc.

*   The requirements are incorporated as XML change.

## Report for meal eligibility

### July 2018 (#9388)

New report for the eligible meals for the employees. Currently we are defining the meal eligibility and visitor meal eligibility in personal records screen of each employee. This eligibility needs to be shown in the report for each day.

The report is implemented in the following manner:

*   Created New Report (Meal Eligibility Report) in TAM Reports module.

![](images/prod-enhance-image76.png)

*   To select Date range, it contains the **from date** button and the **To Date** button.

*   Order of Grid column headers (**Break Fast, Lunch, and Dinner**) based on order from the Card Master screen (**Other Cards -> Meal Types**).

![](images/prod-enhance-image77.png)

**Case 1**: If Employee (Employee code = 13404) has Meal Eligibility – **Meal combinations (BF – LN - DN)**, and for the same day he has Visitor Meal Eligibility **(Meal type – Break Fast, Number of Visitor Meal =4)** then, Report shows **Breakfast -4, Lunch -1, Dinner -1**

*   Visitor Meal Eligibility is displayed only when **Visitor Card** is set as **Yes**.

# Services

## General Email Service

### July 2018 (#7694)

General Email Service using **DLIHRMailService** is implemented for the following email modules:

*   Email Settings in HR Works

    *   Attendance Exception

    *   Attendance Report

    *   Employee Self Service

    *   Previous Day Attendance Summary

*   View Calendar Requests and Approval in HR Works Web

*   Payslip emailing in HR Works

*   Transaction Email Alert in HR Works

*   Document Alert in HR Works License Manager and Email Attendance Details services (supports multi DB configurations in Email Attendance Details)

*   OT Pre-Approval Emailing in HR Works Web

*   Email Functionalities in HR Works Plus

## License Manager

### July 2018 (#126)

It is the License Manager utility which determines the Access Control, Menu Visibility and other core constituents of the system. These settings are configured in the utility file to suit to various customer needs. In addition, the number of entities that can be created in the Card Type screen, number of users that can access the system etc. can be restricted by assigning proper utility settings.

# HR Works Plus


# Administration

## User Interface Changes to HR Works Plus

### Dec 2018 # 12841

Added new parameter in HSS**-1** tab of the **HRW+ Application parameters** screen.

1.  **Default Skin**: Changing the skin will change the appearance, theme palette and other user interface elements. Users can change the default skin set for ESS and/ or set any of the available skins by choosing the respective values from this dropdown. If no values are set for this parameter or None is selected as its value, the ESS will appear in the default skin.

**Note**: This can be done by any users having admin rights or having the required permissions to make these changes in HR Works. If you want to allow the employees/ ESS users also to change the theme set here or the default theme, see the details provided on the **Allow Skin Change By Users** parameter.  
![](images/prod-enhance-image78.png)

1.  **Allow Skin Change By Users**: We can set either Yes or No as the values for this parameter, which will decide whether to allow employees/ ESS users to change the skin of ESS application.  
    ![](images/prod-enhance-image79.png)

2.  **Allow Banner Change By Users**: By selecting Yes or No as the value for this parameter, you can allow or disallow ESS users to change the ESS banner.  
    ![](images/prod-enhance-image80.png)

## Change in Validation Message view

### Dec 2018 # 12963

The validation messages that appear on transaction entry or processing are usually positioned at the bottom of the page/ form. Client wants it to customize it so that they can specify the position of all validation messages and also set the format like font size.

The following are done for implementing these changes:

*   Added new parameter in **HSS-1** tab of the **HRW+ Application parameters** screen.

    1.  The **Form Validation Message** parameter has the following options as its values which the user can select and specify the position of the validation message:

        *   In Bottom

        *   In Center.

        *   If nothing is set for this parameter or None is selected, the message appears at the bottom-right of the page/ form.

> ![](images/prod-enhance-image81.png)

1.  **Form Validation Message Font Size**: Users can specify the font size of the message text as follows:

    *   Small

    *   Medium

    *   Large:

    *   If no value is selected or None is selected for this parameter, the message text appears in the default font size.

> ![](images/prod-enhance-image82.png)

# Employee Profile

## Gross Salary in Salary details

### July 2018 (#10911)

Gross salary was not shown Payroll details of Employee profile in ESS. Now this has been implemented.

![](images/prod-enhance-image83.png)

# HR Portal

## Separated Employee Report in HRW+

### May 2019 - #13927

A new report for showcasing the details of the separated employees are created in ESS.

Execute a query for enabling the report.

![](images/prod-enhance-image84.png)

_Fig: Separated Employee Report_

## Export option in pay-slip

### Jan 2019# 13470

Users were not able to export pay slips from ESS. As per client’s requirement export option has been brought in for pay slips in ESS. Now the users can export the pay slip into PDF and/ or excel file formats.

## Reports to be added in ESS

### July 2018 (#7951)

Added the following reports into ESS.

*   Employee Master Report

*   Document Expiry

*   Salary Audit

*   Salary Register

*   Salary Increment

*   Loan Enquiry Report

*   Final Settlement

*   Leave Report

*   Leave Balance Report

*   Salary Transfer Details Report

## Need more fields in "Field Chooser" of HR works Plus

### July 2018 (#9400)

Earlier Time IN and Time OUT fields were not shown in the Field chooser, now this functionality is implemented in 'Time Card Report' Screen.

![](images/prod-enhance-image85.png)

## Option to show pay slip in HRW+

### July 2018 (#11057)

Earlier only approved batches were able to view or generate payslip. Now even unapproved batches can be viewed in ESS with the help of a new parameter in HRW+ Application parameters **'Show Payslip in HR Works Plus'** (HSS-1) with options, **None/Always/Only for Approved Batches/Only after Payment Date**. Display of Payslip is controlled based on this Parameter, However, default option will be 'Only for Approved Batches'. This parameter will be hidden by default.

![](images/prod-enhance-image86.png)

## Absent Report

### July 2018 (#9272)

A new report called as Absent report is integrated in the TAM Reports category of ESS.

![](images/prod-enhance-image87.png)

![](images/prod-enhance-image88.png)

## Need Day name column in HR works plus Consolidate report

### July 2018 (#10305)

The Day Name column can be introduced into the consolidated report by using template in the following manner.

<FIELD NAME="DayName" SHOWDEFAULT="" />

## Logo option for TAM reports

### July 2018 (#9406)

Logo option is implemented in all HR Works and HR Works plus reports.

# Self Service

## Option to print the L&C request details

## July 2019 - #15428

The client required to print the Letter and certificate instance form details and the approval details.

For implementing the change, execute a query.

![](images/prod-enhance-image89.png)

## Show Sub Company Value on Prints

### July 2019 - #9179

In some organisations, different companies are separated by using an entity named Sub Company. In such companies, the client required to show the Sub Company details while printing the Loan, General Expense and Air Ticket.

In order to implement the change, the parameter named 'Default Report Header Entity' in RPT-1 of HRW Application parameters was introduced in the ESS also.

![](images/prod-enhance-image90.png)

## Next Approver column in Leave Application

### July 2019 - #12979

The client required to add a new column in the Leave Application Widget of Request, Approval and proxy tabs in the leave Application Screen.

![](images/prod-enhance-image91.png)

## Loan Budget Feature

### July 2019 - #14583

A loan budget feature is introduced in the system. The loan budget amount of the organisation is saved in the system. The approvers have the option to view the loan budget amount and total outstanding loan amount of the company. While approving a loan request, approvers must check whether the existing loan budget of the company is enough to meet the loan amount. Thus, approver can determine whether to approve the request or to keep pending the request.

For implementing this change, follow the below steps:

1.  Execute a query to enable the Application parameter. New parameters are introduced in the LOAN-1 Tab of Application parameter which are ‘Individual Loan Wise Limit’ and ‘Loan Budget Exceeding Validation’.

2.  Execute a SP for implementing the validation feature.

3.  Execute a query for enabling the parameter All Loan/Requested loan.

4.  Execute SP for showing the company budget details.

> ![](images/prod-enhance-image92.png)

## Set Ceiling amount for General Expense request screen

### July 2019 - #15148

The organisations will have several types of general expenses and each expense will have ceiling amount. The HR admin have the provision to set the ceiling amount for each general expense. The client required to show validation when the expense exceeds the ceiling amount.

For implementing this change, a new parameter named ‘Ceiling amount for General Expense’ was introduced in the ‘General Expense-2’ tab in HRW + Application parameters.

Execute a query to enable the parameter.

![](images/prod-enhance-image93.png)

## Option to edit the Ticket Cost

### June 2019 - # 15050

For the client, employees are availing the ticket as Company ticket. By default, the amount specified in the destination slab will be considered as the ticket cost. Unlike from HR Works, there is no option to edit the amount and provide the actual ticket cost in ESS.

The following changes have been made by running a query in the DB in order to make the ticket amount visible and/or editable for either the requestor or for the approver or for both.

1.  A new Parameter ‘**Amend Air Ticket Availment**’ is added onto the HSS-1 tab of the **HRW+ Application parameters**. Users can select the following options as required:

    1.  Not Required

    2.  All Approvers

    3.  Final Approver

    4.  Air ticket amount should not be visible for Requester and for the Approvers who do not have Amend right.

![C:\Users\Anandhu\AppData\Local\Temp\\SnagitTemp\Snag_39c9f616.png](images/prod-enhance-image94.png)

## Option to print L&C before the final approval

### June 2019 - # 15233

The client needs to enable print option for Letters and certificates, even if the request is not fully approved. To enable this change a script needs to be run in the HR Works DB and then from the **HSS RPT** tab of the **HRW+** **Application parameters** screen print option needs to be enabled.

![](images/prod-enhance-image95.jpeg)

## Ticket Print Detail **June 2019 - # 15267**

The client required to show the travel details such as From Date, To Date and destination details in the ticket request while printing from ESS.

For implementing this, execute a script.

![](images/prod-enhance-image96.png)

_Fig: Print of Air Ticket Request with travel details_

## Option to escalate the request approval pending for time period

### June 2019 - #14371

Currently there is no option to escalate the pending approvals in HR Works or ESS. Hence a new feature to escalate the pending approvals is requested by the client. Now, in ESS, if an employee application request remains pending for approval for a long time, the employee can escalate the issue to the next approver.

For implementing this change, a new column is added in the ‘Approval Workflow Settings’ Screen named “Escalation Type”.

Execute a query for enabling the column.

![](images/prod-enhance-image97.png)

_Fig: ‘Escalation Type’ column in Approval Workflow Settings_

## ESS Leave Approval Change from/to/Resumption Date by HR

### June 2019 - #14486

The client required to edit From / To/ Resumption date of the employee’s leave request by the supervisor dept head, HR officer and manager. Moreover, if the Resumption Date exceeds than the To Date, the leave days till the Resumption Date are considered as LOP. After the Resumption Date. Leave days are considered as Delayed Vacation.

For implementing this feature, a new parameter named ‘Leave Type Between Leave To Date and Resumption Date’ is introduced in the LV-1 tab of the Application parameter.

Similarly, a new parameter named ‘Amend Leave Application’ is introduced in the HRW+ Application parameters in which you can set who all can edit the leave application.

Execute a query for enabling the parameters.

![](images/prod-enhance-image98.png)

_Figure: Leave Application screen with Resumption Date field_

## Employee Basic Info in All screen

### March-2019 - #14082

The client required to view the basic information of the employees such as division, department and designation in the leave application.

For this, a new tab named ‘Profile’ was generated in the Options next to the Workflow and Transaction history. Execute the query for activating this Profile tab.

![](images/prod-enhance-image99.png)

_Fig: Leave application displaying employee details_

## Leave Encashment

### April-2019 - #14488

It was not able to edit the details regarding the leave encashment of the employees. The client required to edit the number of days and to approve the leave encashment through the off-cycle payroll.

1.  For this, two new parameters were added in the HSS 1 tab of the HRW + Application parameter named ‘Amend Leave Encashment’ and ‘Default Settlement method for Vacation Encashment’.

2.  The options included in the ‘Amend Leave Encashment’ are Not Required, All Approvers and Final Approver and the options included in ‘Default Settlement method for Vacation Encashment’ are Off-cycle payroll and Payroll sheet.

3.  Run the query for enabling these parameters.

![](images/prod-enhance-image100.png)

_Fig: HRW + Application parameter Settings for Leave Encashment through Off-Cycle payroll_

## Need to show the employee details in MISC request Print

### March-2019 - #14105

The client required to view the employee details while printing the MISC request.

1.  Execute the four views for displaying the details such as division, location, department and designation.

2.  Also, execute a query for getting the report ID.

> ![](images/prod-enhance-image101.png)
> 
> _Fig: MISC print showing employee details_

## Block Loan Application during Probation

### March-2019 - #14210

Initially, it was able to apply for loan for all the employees including the employees in probation. However, the client needs to block the loan application for the employees in probation.

For this, a new parameter named, ‘Block Loan During Probation’ was added in the LOAN-1 Tab of Application parameter which is linked at loan level. When this parameter value is set as Yes, a validation message will appear while applying for the loan.

Execute a script for enabling the newly created parameter.

![](images/prod-enhance-image102.png)

_Fig: New parameter in Application parameter_

## OFF Day Validation

### Feb-2019 - #13437

In HR Works Plus, there was no any validation with respect to the minimum number of days that is required between two off days while creating Employee Daily Roster. As per the client’s requirement, a new option for setting a minimum gap between the OFF days of the employees is introduced.

For this a new Parameter named ‘**Minimum Days Gap Between Off Days**’ is added in the **ESSTAM-1** tab of the **HRW + Application parameters**. Users can enter the required minimum gap between the OFF days as the value of this parameter.

![](images/prod-enhance-image103.png)

_Figure: Setting ‘Minimum Days Gap Between Off Days’ in HRW + Application parameters_

### Text in loan request screen

### Jan2019 # 13397

As per clients request changes were made to display the following text in the ESS Loan Request page.

“I hereby accept the T&C of this loan”

## Leave Application

## Role delegation through leave for all employees

### Jan 2019 # 13605 application

Currently Role delegation option in leave application is appearing for transaction approvers only. The client wants the Role Delegation details to be displayed for concerned employees as well in view only mode in the leave application record.

This is now implemented in the following manner:

A new parameter (Role Delegation Validation in Leave Request) is added to the **HSS-1** tab of the **HRW+ Application parameter** screen in HRW.

Role Delegation option can be enabled for all employees by setting 'Mandatory At 1st Approval' as the value of **Role Delegation Validation in Leave Request** parameter. For all other selections, Role delegation in Leave Request will be displayed only for approvers.

## Leave Application template changes

### Jan 2019 # 13492

In the leave application template view in ESS, the client wanted to have some new fields and to remove some other fields.

Two views are executed in the DB to make this change

## Role delegation through leave application

### Dec 2018 # 11127

When role delegation request is placed with and through the leave application transaction, the leave request is approved first, then the role delegation request is sent to the delegate for acceptance.

The client needs to have control over the sequence in which the leave and role delegation requests are processed as follows:

When an employee places role delegation request with and through the leave application request:

1.  The delegate should accept role delegation request.

2.  Leave Request should be approved through work flow.

3.  If leave request is rejected by approvers, the role delegation should be cancelled.

To implement these changes, the following are done:

*   A new parameter (**Role Delegation Validation in Leave Request**) is added to the **HSS-1** tab of the **HRW + Application parameters** screen. Users can set any of the following values for this parameter:

    *   **Not Mandatory**: When this is selected, approvers can approve the leave application transaction regardless of the acceptance or rejection of role delegation request.

    *   **Mandatory At 1st Approval**: When this is selected, it becomes mandatory that the role delegation request be accepted before the first-level approver can approve the leave application. The system displays a validation message whenever the first-level approver tries to approve the leave application if the role delegation is not accepted.

    *   **Mandatory At Final Approval**: When this is selected, all approvers other than the final-level approver can approve the leave application regardless of the status of role delegation request. But it becomes mandatory that the role delegation request be accepted before the final-level approver approves the leave application. The system displays a validation message whenever the final-level approver tries to approve the leave application if the role delegation is not accepted.

        **Note**: In case if the role delegation request is not accepted or rejected by the delegate, the leave application too will be rejected.

![](images/prod-enhance-image104.png)

## Hide Save option in Leave Application

### Dec 2018 # 12963

The client does not require the Save option for leave application transactions in ESS. Users should only be able to submit a leave application for approval after providing the required information.

To get this working, a new check box field (**Allow to save Leave Applications**) is added to the **ESS Leave Parameters** tab in Leave Master. ESS users can save the leave application form only if this check box is selected. Otherwise they won’t be able to save the form but can submit the form for approval or cancel it.

![](images/prod-enhance-image105.png)

### Option to print leave application before approval

#### Nov 2018  - # 11762

The client wanted to print the leave application record from ESS in a specific template. This allows all approvers to take print out of leave application before final approval.

For this, an REPX file was created and it is then imported into the Custom Report Designer in HR Works. The user can now modify the template as required from the Custom Report Designer menu in HR Works.

### Attachment Option for Approver in Leave application

#### Nov 2018  - # 11760

The client wanted to have attachment option on leave application so that approvers can attach files while approving/ rejecting the leave application of employees. For this, a new parameter ‘**EntityID (User Defined Fields For Leave Approval)**’ is added to **HRW+ Application parameter >> HSS-1** tab. Users can create user defined field group on the Card Types >> User Defined tab where they create and define fields and their data types and then set that user defined field group as the value of **EntityID (User Defined Fields For Leave Approval)** parameter**.** Refer to the screenshots below**:**

![](images/prod-enhance-image106.png)

The above image shows the user defined fields, which are created on the **Card Types >> User Defined** tab**.** Note that three Attachments fields viz Attachment, Attachment2, and Attachment3 are created with ‘File’ as their data type.

![](images/prod-enhance-image107.png)

The above image shows how the user defined field group that was created on the Card Types screen is set as the value of **EntityID (User Defined Fields For Leave Approval)** parameter in **HRW+ Application parameters >> HSS-1** tab.

Once the above settings are saved, the approvers now will have the above-mentioned user defined fields on the leave application form. See the image below:

![](images/prod-enhance-image108.png)

### Sick Leave Settlement changes

#### Oct 2018  - # 11531

When an employee selects the leave type on the leave request form in ESS, he/ she can view his/ her leave balance and related information as follows:

1.  Clicking on the **View Details** link will show the leave balance and related information in a popup window as follows.

![](images/prod-enhance-image109.png)  
**Note**: The **View Details** link appears after the employee selects the leave type from the **Leave Type** drop down field.

Before implementing the changes requested by the client, when employees apply for any leave such as sick leave for which leave limit scheme is set, they can only view the split up of leave days (Entitled, availed, and balance) based on the previous leave requests. The data shows was not updated on the leave data (From date, To date, and/ or number of days) entered on the current leave request form.

A new parameter (**Show Leave Days Split up for Leave Limit Scheme**) is introduced in the **ESS-1** tab of the **ESS Application parameter**. Users can set the parameter value to **Yes** or **No** which tells whether to allow the employees to view the split up of leave days (Entitled, availed, and balance) against the days of leave specified in the leave form.

When set to **Yes**, employees view their leave balance against the applied leave day(s) as well as the split up of leave days based on the leave limit scheme as follows.

*   In addition to the **View Details** link, a new link (Leave Days Split Up Details) appears on selecting the leave type.

*   Clicking on the **Leave Days Split Up Details** link will show the split up of leave days against the number of leave day the employee has specified in the current leave request form. This means that the leave split up details are updated dynamically based on the Leave Type, From date and To date selections made by the employee.

![](images/prod-enhance-image110.png)

### Select All Option in Leave Return

#### Oct 2018  - # 10910

On the **Proxy** tab of the **Leave Return** screen, from the **Select Employee** dropdown above the **Leave Application Pending Return Date** grid, users had to select the employees for whom he/ she is acting as proxy so that the **Leave Application Pending Return Date** grid lists the leave application records (without return date) of the selected employee/s. As per the new requirement this selection is removed and instead of that the **Leave Application Pending Return Date** grid now lists all leave application records (without return date) of all employees for whom the logged in user is acting as proxy.

## Change in miscellaneous application

### Oct 2018  - # 11385

Based on the client’s requirement, miscellaneous application menu in Works plus need to be redirected to a new link in a new tab. That is, when the user clicks on the miscellaneous application menu, a new tab needs to be open instead of the standard menu.

## HSS-HLB/170d-Amendments in Loan Application

### July 2018 (#7782)

Payment History which was not present earlier is now shown as a last widget in the Loan Application screen, similar to those in Business Travel and General Expense. Now, the Employee can view when the loan has been disbursed, type of Settlement Method like Payroll/Off cycle/Outside and the Bank information too. Same is done in Approval & Proxy- Employee Record Snapshot.

## HSS-TKF/05 - Revoke the Delegated Role

### July 2018 (#7333)

Earlier in Role delegation we have options such as Submit and delete only.

Based on client requirement new feature is added in Role Delegation as –

*   Revoke: This option can be used to cancel a role delegation transaction performed.

*   Change To Date: This will update the “To Date” in an existing role delegation transaction.

*   Change From Date. This will update the “From Date” in an existing role delegation transaction.

These options are made available in the bulk action drop down. Once the action is selected, only those transaction will be filtered out which is fully approved and accepted by the Delegate.

![](images/prod-enhance-image111.png)

## Annual Leave and CME Leave Validation

### July 2018 (#10641)

On applying for AL or CME leave certain validations need to be checked with in a Branch and within a Category. Validation should be shown for following scenarios:

*   Annual leave **needs** to be applied at least 2 weeks in advance of leave start date else leave application to be blocked. **Similarly,** CME leave needs to be applied at least 1 week in advance.

*   Doctors can only apply for Annual Leave maximum of 14 calendar day at a time.

*   Not more than 3 doctors can **avail** AL or CME on a **same** day.

*   Rule for doctors to take leave during same period is

    *   1st doctor who applies can take 14 days.

    *   2nd doctor who applies in the same period can only take 7 days.

    *   3rd doctor who applies in the same period can only apply less than 7 days.

*   The rule applies only if the leave falls on same date.

*   The Validation shall be applied within a Branch within a category.

*   The rule shall be only applied for specific category of employees.

*   The rule shall not be applied during off peak days. i.e. June last week to Sep first week and Dec last week to 1st week of Jan.

**The solution approach is done in the following manner:**

*   Five new parameters are added in T00-1 tab in HRW + Application parameters

*   AL Application Advance Period (Days) Parameter to validate AL request to be applied before a specific period.

*   Max. Leave Days for 2nd staff Application

*   Max. Leave Days for 3rd staff Application

*   (2 & 3 determines the rule to be applied for various applications)

*   Off Season for Leave Validation. A season can be set for which the rules to need not be applied.

Parameters to be set through Application **Parameters (**Multiple Entity). Validation to be applied through back end additional validation function while applying the leave.

![](images/prod-enhance-image112.png)

## Export option in Time Sheet Requests

### July 2018 (#11087)

Following option are introduced in the Time sheet Menu.

*   Export to Excel option is implemented in the following Widgets of “Request, Approval and Proxy” pages- Employee List, Time Sheet Requests and Payment History.

*   In the Request, Approval and Proxy Page “Next Approver Column” is added in Time Sheet Requests Widget.

![](images/prod-enhance-image113.png)

## Print option in ESS screen

### July 2018 (#9741)

Print options in ESS screens are achieved by introducing a new tab HSSPRT-1 in HRW + Application parameters with values as 'None/All Stages/ Approved Only’ (tab). If the parameter is set to None, print button to be made hidden. If it is set as All Stages, print to be enabled for all Stages and if it is Approved only, print to be enabled only for approved records.

Print option in main screen for Leave Application screen has been removed.

![C:\Users\LENOVO\AppData\Local\Temp\SNAGHTMLef00806.PNG](images/prod-enhance-image114.png)

# Clearance Form and Exit Interview

## Ability to see all clearance form request by other users

### May 2019 - #15145

Currently the clearance form could be seen only by the requested User. However, the user required to view and print all the clearance request to all the users.

For this execute a query for enabling HRW+ Application parameter.

## Vacation Clearance Form and Automatic Initiation

### May 2019 - #14581

The client required to automatically initiate the clearance form during a vacation request approval. The clearance form will be initiated after the final approval of the vacation request.

For this a new parameter named 'Auto Initiate Clearance Form On Vacation Final Approval' was introduced in the HSS-1 Tab of the HRW + Application parameter. When the parameter is set to ‘Yes’ the clearrance form is automatically initiated.

Execute a query for enabling the parameter.

![](images/prod-enhance-image115.png)

_Figure: HRW + Application parameter Screen_

## Asset Details link to Clearance form

### May 2019 - #14212

The client required to track the Employee Asset Details such as Asset Name, Asset No etc through the Employee Personal Records. When an employee gets separated, the clearance form must list the assets the which the employee had, but not returned. The assets in which the return date is null will be listed.

For this Create assets in Card Types and set values in Card Master.

Create Different assets for checklist in the Personal Records fields of Card Types, further create corresponding parameters under each asset and set the values for the employees.

Execute a view for getting the details regarding the assets.

![](images/prod-enhance-image116.png)

_Fig: Clearance Form showing Asset Details_

## Provide Print option in all level of request and approval

### May 2019 - #15150

All the request and approval screen contain the option to Print the form in all levels. Hence the user required an option to print the Clearance form in all the request and approval screen.

Execute a query for enabling the clearance form in all request and approval screen.

Set the HRW + Application parameter for printing.

![](images/prod-enhance-image117.png)

_Figure: Clearance Form_

# Time and Attendance Module

## Attendance/OT Approval

### July 2019 - #14576

A new feature to approve the Attendance/Overtime/Shortage of employees by the supervisor till the last approver to get it paid through payroll is introduced. If it is not approved, the OT or Attendance are not considered for payroll calculation.

For implementing this change, follow the below steps:

1.  Execute a query for enabling the screen

> ![](images/prod-enhance-image118.png)

## Option for setting up the Daily and Monthly Limit for Excuse hour

### July 2019 - #15125

The client required an option to set up the Daily and Monthly limit for Attendance regularisation request.

Validation options are included in the Attendance Regularisation screen for break permission.

For implementing the change, execute a query.

![](images/prod-enhance-image119.png)

## OT Approval Screen

### June 2019 - # 13438

The client requires that the OT Approval screen similar to the one in eTAS should be added in HR Works Plus also. An option for converting the OT hours to Compo OFF should be added in this. If the employee applies for Compo OFF through the View Calendar Leave entry option, the balance against the accrued Compo OFF should be validated.

The following needs to be done in order to get these changes:

1.  A query needs to be executed in the HRW DB

2.  Create wage type for present days and set the **Wage Type Present Days** parameter on **Application parameter >> TS-1** tab.  
    ![](images/prod-enhance-image120.png)

3.  After final approval from ESS; wage type-based time sheet batch will be created for each employee in submitted status, which in further needs to approved from HR Works wage type base time sheet screen.

## Availed Weekly OFF Count in View Calendar

### March-2019 - #13545

In the Attendance Regularisation screen, in the Time and Attendance Module, the calendar view of the details was included in the screen. Now the client required to add the details of the availed weekly off details in the screen.

Therefore, the number of Availed Weekly Off till the selected month is included in the Attendance Regularisation screen.

![](images/prod-enhance-image121.png)

_Fig: Attendance Regularisation screen displaying Availed Weekly Off_

## Automatically create break permissions in view calendar

### March-2019 - #13431

In the Attendance Regularisation screen, Break Permission was enabled manually by the employees. The client required to automatically create the break permission the view calendrer screen.

1.  A new parameter is added in the HRW + Application parameter in the ESSTAM-1 tab named ‘Enable Auto Break Permission’.

2.  Run a query for enabling the Parameter.

3.  When ‘Enable Auto Break Permission’ parameter is set to true, a new button named ‘Create Break Permissions’ appears in the Attendance Regularisation screen near the ‘Add New’ button.

4.  While selecting the ‘Applicability’ as Break Permission, the break permission records will populate automatically.

> ![](images/prod-enhance-image122.png)
> 
> _Fig: Automatic Break permission button in Attendance Regularisation Screen_

## Shift Search Option

### Feb-2019 - #13436

In ESS, users were not able to search the **Shift List** grid for shifts with shift parameters/ data such as such as sift code, description, shift start time and shift end time on the **Employee Daily Roster**. This functionality is introduced as per the requirement by the client.

Now a new parameter (**Show Shift List in Employee Daily Roster**) is added in the **ESSTAM-1** tab of the **HRW + Application parameters**. If the value of this option is set As True, then the shift search Option will be enabled in the **Shift Lists** grid on the ESS **Employee Daily Roster** page as follows.

![](images/prod-enhance-image123.png)

_Figure: Shift list in the Employee Daily Roster_

## Shift Schedule Upload

### Feb-2019 - #13433

In the Daily Roster Grid, the option for assigning the shift schedule for each day were provided, but assigning the shift for each working hour was not present. The client required the option for assigning the shift for each hour through an excel sheet. The steps for the same is explained below.

In the **Daily Roster** grid of the **Employee Daily Roster** page, a new combo box named ‘**Roaster Type**’ is added.

1.  While selecting ‘Shift Schedule Upload’, select one Date and Upload the created Excel File.

2.  The shift timings are entered in the Excel sheet in the **xlsx** format.

![](images/prod-enhance-image124.png)

_Figure: Updated Daily Roaster Screen_

![](images/prod-enhance-image125.png)

_Figure: Excel Sheet of Shift Schedule Upload_

## Time sheet

### Feb-2019 - #13330

The client required employee timesheet option which they didn’t have in the ESS. They also need the following customizations in their timesheet:

*   Employees require to fill their Time sheet for a month based on which Cost Allocation report will be generated.

*   Validation and conditions are require for the data entry.

To implement this,

1.  In the HR Works, in the **TS1** tab of the Application parameter Menu, a new selection named ‘**Time Sheet Entity 4’** is added.

2.  In the **ESSTS-1** Tab, make the appropriate selections.

3.  In the **Wage Type Master** screen, create the Wage Type for Full Day, Half Day, Leave, Holiday and Off Day.

4.  A query needs to be executed in the DB by specifying the Wage Type ID.

5.  In the **TS-1** tab of **Application parameter**, the corresponding value for Wage Type of Weekly Off and Public Holiday should be specified.

6.  Execute the [script](https://dli-apps.sourcerepo.com/redmine/dli/attachments/download/38138/AppParamEnablingQry.sql) to enable the following two parameters in the **Application parameter** >> **ESSTS-1** tab and set the corresponding value to them.

7.  In ESS, **HR Portal >> Report Centre**, Run the Time Sheet by entering the From Date and To date.

![](images/prod-enhance-image126.png)

_Figure: Time Sheet Report_

## Cost Allocation Report

### Feb-2019 - #13332

Refer to Redmine ticket#13330 to know more about the particulars of time sheet mentioned in this section.

The client requires the cost allocation report generated for the employees from the data entered in the Time Sheet.

To implement this,

1.  A query needs to be executed to enable the menu.

2.  Select the Cost Allocation Report, Enter the From Date and To Date. You can run the report, clear the report, and save the report.

> ![](images/prod-enhance-image127.png)

_Figure: Cost Allocation Report_

## View Calendar Request Validations

### Jan2019 # 13432

The client requires that the following validations be added in View Calendar Request transaction while submitting Break Permissions/ Regularization requests. These validations should be enabled or disabled based on some flag in the **Request Master**.

• Missing IN/ OUT request should not be submitted for Absent Days

• If the selected date is back dated and attendance status of that date is “Absent” or “ReProcess”, Break Permission request should not be submitted. The existing option of submitting break permissions request for future dates should be available.

## Auto Marking

### Jan2019 # 13429

Client wants to show Absent entries in View Calendar as Auto. For this, a new parameter (**Auto Marking**) is added in **HRW+ Application parameters** (**ESSTAM**-). Users can select True/ False. If set to True, all absent entries in View calendar will be marked as Auto.

Users can set this parameter at entity-level and employee- level.

## Hiding Day Type in View Calendar

### Jan2019 # 13430

As per the client’s requirement, In **View Calendar Request > Break Permissions** transaction form, “Start Day Type” & “End Day Type” should not be visible if both the Start Day Type and End Day Type configured in **Shift Master** is “Today”. If the employee is trying to select future dates, either daily, weekly or company level roster should be considered for finding out the shift code for the day.

For this, a new checkbox field (**Hide** **Day** **Type)** is added in **Attendance Permission Types** screen, under the **Break Permission Parameters** section. If this checkbox is selected for any permission type, Start Day Type & End Day Type fields will be hidden in the break permission area.

## Color change for modified transactions in attendance regularization

### Jan 2019 # 13744

The **Approval** tab page of the **Attendance Regularization** page shows all original transactions as well as the modified ones. The client required that the font color of all modified transactions needs to be changed to red so that the users can distinguish between the original transactions and modified transactions.

## Executive Dashboard

### July 2018 (#6251)

An executive dashboard is designed as per user requirement. By default, the record is filtered on the basis of location. Sample Executive Dashboard will be as shown below:

![](images/prod-enhance-image128.png)

It consists of fields like Required Hours, Total Hours, Regular Hours, Total Wasted Hours, Overtime Hours, Approved Hours, Violation Hours, Absent Employees, Late IN Employees, Early OUT Employees, Approved Requests, Rejected Violations, Productivity, Violations.

## To have an option to export the transaction list data to excel from Attendance Regularization screen

### July 2018 (#10831)

As per the requirement, an export option is implemented in proxy tab of attendance regularization screen for the transaction list widget and added next approver column in the grid.

![](images/prod-enhance-image129.png)

# General

## Restrict the attachment size in all request page to 100 KB

### July 2018 (#6350)

Normally the attachment is ESS can hold size less than or equal to 8kb. Now, the attachment size in all request page can be specifically given by assigning a value for a **Maximum Size of Attachment in KBs** parameter in HSS-1 tab of HRW+Application parameter screen. The parameter includes values like 100kb, 200kb, 300kb.

![C:\Users\LENOVO\AppData\Local\Temp\SNAGHTMLefea8d6.PNG](images/prod-enhance-image130.png)

## Print option in ESS requests for Approvers

### July 2018 (#7163)

Print option is implemented for all Approval level users also. Approvers can print with all approver's comments after his approval. Currently this is implemented only in Leave Application and General Expense screen.

![C:\Users\LENOVO\AppData\Local\Temp\SNAGHTMLf2f4ae9.PNG](images/prod-enhance-image131.png)

## HSS-HLB/224- To include intermediate letters and words in proxy name filter

### July 2018 (#10954)

The requirement here is to list out the name of the employee even when it is searched with an intermediate word wherever search functionality is implemented. This functionality works fine with strings and texts but not applicable in case of numerals as well as dropdown lists.

# News Letter

## Attachment option in News letter

### March-2019 - #14582

Currently in news letter there was no option to attach any files. Thus, the client required to customise the newsletter to add the attachment.

For this,

1.  In the News Letter Entity, add a new parameter with data type as File in Card Types.

2.  The attachment for the corresponding News Letter could be attached in the Card Master screen which will be visible in the News Letter Screen in ESS.

![](images/prod-enhance-image132.png)

_Fig: Settings in the Card Master_

# AMM Module

**Accommodation Management** is a new module incorporated in ESS in order to manage and allocate camps, rooms and issue other items for employees. Some of the major screens in it are:

## Camp Master

### July 2018 #9733

**Camp Master** is a major screen in accommodation management through which the various details like location of the camp, number of rooms included in the camp and the number of beds accommodated in each room are managed.

## Item Category

### July 2018 #9918

**Item Category** screen will be used for defining Utilities (Uniform, Helmet, Gloves, Mattress, Pillow, Pillow Cover, Safety Shoes, Blankets, etc.). The details that would be there in the system are as follows: -

*   Category Code

*   Description

*   Frequency of Issuance: << (Lifetime, 6 Months, and 12 Months Etc.) Based on Employee Category - Staff, Labour, Driver, etc.>>

## Item Master

### July 2018 #9919

**Item Master** is a screen through which the various items in a category can be maintained and manipulated.

## Room Allotment

### July 2018 #9735

**Room Allotment** is used to assign Camp/ Room / Bed to Employees. This would also handle the case of Re- Allotments / Transfer of employee from one camp/ room/ bed to another.

## Stock Receipt

### July 2018 #9920

**Stock Receipt** is a screen through which the various stocks received by each camp are entered with effective date.

# RMM Module

Recruitment Management System includes following sub modules:

*   **Recruitment Budget Period** will be created in the HR Works in which users can create different Recruitment Budget periods, which defines the periods for which Recruitment Budgeting for recruitment are performed. The time period for Recruitment Budgeting can be specified using the fields “Start Date” and “End Date”.

*   **Recruitment Budget** functionality facilitates the process of allocating Budget for various designations as a part of Recruitment in a company. Budget needs to be prepared before the commencement of a Budget Period.

*   A **Job Description** template is a master which carries various designation related information. For Example, “Job Description Template” will contain – (a) Job Description (b) Suggested Salary (3) Qualification Required (4) Experience required, etc. In addition, it can be created for specific Location, Department etc.

*   **Manpower Requisition** enables a department to create a new vacancy request against the budget created.

*   **Publish Vacancy** is a transaction for converting approved vacancy requests into advertisement.

*   All activated vacancies from Publish Vacancy will be populated in the **Current Opening** section.

The System Process Flow of Recruitment Management System is given below:

![Activity Diagram - Rove RMS Ver 1](images/prod-enhance-image133.png)

