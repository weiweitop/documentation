---
title: App param (Datatable demo)
permalink: appParam_dataTable.html
sidebar: jekyllhowto
product: Jekyll How-to Guide
datatable: true
---

Use the **`Search`** `field` to `search` and/ or `filter` the table.
  
<hr>
<div class="datatable-begin"></div>
<!---Email Engine -1-->
<table>
<colgroup>
<col width="20" />
<col width="50" />
<col width="22" />
<col width="8" />
</colgroup>
<thead>
<tr>
<th>Tab</th>
<th>Parameter</th>
<th>Values </th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Email Engine -1</strong></td>
<td><b>Schemes for Password<br>Protection in Payslip</b></td>
<td>Use this to enable password protection for payslips sent to your employees.</td>
<td>NA</td>
</tr>
<tr>
<td><strong>Email Engine -1</strong></td><td><b>Sender Email</b></td>
<td>Enter the full email address from which all mails should be sent to the target recipients.<br><br><strong>Ex</strong>: hr@example.com</td>
<td>NA</td>
</tr>
<tr>
<td><strong>Email Engine -1</strong></td><td><b>Sender Email Password</b></td>
<td>Enter the sign-in password of the email account.</td>
<td>NA</td>
</tr>
<tr>
<td><strong>Email Engine -1</strong></td><td><b>Sender Name</b></td>
<td>Enter a name you want to dusplay in the <b>From</b> field of the outgoing mail.<br><br>If you are using any business emails such as <code>info@yourOrg.com</code> and want to set your emails as coming from any entities such as Payroll Manager, and HR Department, you can enter that entity name here.<br></td>
<td>NA</td>
</tr>
<tr>
<td><strong>Email Engine -1</strong></td><td><b>Sender User Name</b></td>
<td>Enter the username for your mail server, this is typically your complete email address, which you have provided in the <code>Sender Email</code> field.</td>
<td>NA</td>
</tr>
<tr>
<td><strong>Email Engine -1</strong></td><td><b>SMTP Port Number</b></td>
<td>Enter the port number to use with SMTP which usually is set to <code>587</code>. <br><br>Refer to your email provider's recommended setttings for any changes</td>
<td>NA</td>
</tr>
<tr>
<td><strong>Email Engine -1</strong></td><td><b>SMTP Server Name</b></td>
<td>Enter the SMTP server name.<br><br><strong>Example</strong>: smtp.yourdomain.com<br></td>
<td>NA</td>
</tr>
<tr>
<td><strong>Email Engine -1</strong></td><td><b>Default Credentials</b></td>
<td>Some SMTP servers require that the client be authenticated before the server sends e-mail on its behalf. Set this to Yes if needed.</td>
<td>NA</td>
</tr>
<tr>
<td><strong>Email Engine -1</strong></td><td><b>SSL Status</b></td>
<td>Set this as true to enable SSL feature.</td>
<td>NA</td>
</tr>
<tr>
<td><strong>Email Engine -1</strong></td><td><b>Alert Notifcation</b></td>
<td>Select Yes if you want to enable alert notification for respective events in OmniHR Web. For more details, refer to the OmniHR Web User Guide.</td>
<td>NA</td>
</tr>
<tr>
<td><strong>Email Engine -1</strong></td><td><b>Email Client</b></td>
<td>• To make the system use the SMTP settings you are configuring here, select SMTP.<br><br>• To use the settings made in your Microsoft Outlook instead of the SMTP settings you are configuring for alert mails, select Microsoft Outlook.<br></td>
<td>NA</td>
</tr>
<tr>
<td><strong>Email Engine -1</strong></td><td><b>Send Email on Each Request</b></td>
<td>This parameter has to be set to &quot;Yes&quot; for the mails to be send mails at the time of submission of requests. This will not be affected by the Employee Self Service mail alerts (if any) created on the Email Settings screen.<br><br>The parameter must be set to &quot;No&quot; to send mail through EmailAttendanceDetails service so that mails will be send as per the Employee Self Service mail alerts created on the Email Settings screen.<br><br>Refer to the Employee Self Service section in the Email Settings user guide.<br></td>
<td>NA</td>
</tr>
<tr>
<td><strong>Email Engine -1</strong></td><td><b>Send Email On Each Approval</b></td>
<td>This parameter has to be set to &quot;Yes&quot; for the mails to be send the approval mails at the time of approval. This will not be affected by the Employee Self Service mail alerts (if any) created on the Email Settings screen.<br><br>The parameter must be set to &quot;No&quot; to send mail through EmailAttendanceDetails service so that mails will be send as per the Email Sending Frequency you set in this alert set up.<br><br>Refer to the Employee Self Service section in the Email Settings user guide.<br></td>
<td>NA</td>
</tr>
<tr>
<td><strong>Email Engine -1</strong></td><td><b>Default Email-ID</b></td>
<td>NA</td>
<td>NA</td>
</tr>
<tr>
<td><strong>Email Engine -1</strong></td><td><b>Enable Approval Notification Cc</b></td>
<td>NA</td>
<td>NA</td>
</tr>
<tr>
<td><strong>Email Engine -1</strong></td><td><b>Enable Reject Notification Cc</b></td>
<td>NA</td>
<td>NA</td>
</tr>


<!---ESSLOAN -1-->

<tr>
<td><b>ESS LOAN -1</b></td><td><b>Attachment Mandatory?</b></td>
<td>Select Yes to make Attachments manadatory to save/ subit loan application.</td>
<td>This can be linked entity-wise. Ex.: You can select the entity being used as loan code in OmniHR so that the  parameter value can be set differently for each loan code.</td>
</tr>
<tr>
<td><b>ESS LOAN -1</b></td><td><b>Loan Entitlement Limit</b></td>
<td>Select the loan entitlement limit calculation formula.</td>
<td>This can be linked entity-wise. Ex.: You can select the entity being used as loan code in OmniHR so that the  parameter value can be set differently for each loan code.</td>
</tr>
<tr>
<td><b>ESS LOAN -1</b></td><td><b>Loan Type Applicable in OmniHR+</b></td>
<td>Slect Yes to make all  loan type availabe in ESS for the employees to apply for loan.</td>
<td>This can be linked entity-wise. Ex.: You can select the entity being used as loan code in OmniHR so that the  parameter value can be set differently for each loan code.</td>
</tr>
<tr>
<td><b>ESS LOAN -1</b></td><td><b>View Salary Details in Loan Application</b></td>
<td>Selecting Yes will show the salary detail of employees in the loan application.</td>
<td>This can be linked entity-wise. Ex.: You can select the entity being used as loan code in OmniHR so that the  parameter value can be set differently for each loan code.</td>
</tr>
<tr>
<td><b>ESS LOAN -1</b></td><td><b>Terms And Conditions (Loan)</b></td>
<td>Go to Card Types &gt;&gt; Other Cards &gt;&gt; Loan Codes and create  a parameter “Terms &amp; Conditions” .<br><br>Select the above parameter here.</td>
<td>This can be linked entity-wise. Ex.: You can select the entity being used as loan code in OmniHR so that the  parameter value can be set differently for each loan code.</td>
</tr>
<tr>
<td><b>ESS LOAN -1</b></td><td><b>Ammendment in Loan Application</b></td>
<td>The values you select here decides which approvers can make changes to an employees loan application record.</td>
<td>This can be linked entity-wise. Ex.: You can select the entity being used as loan code in OmniHR so that the  parameter value can be set differently for each loan code.</td>
</tr>
</tbody>
</table>


<div class="datatable-end"></div>
