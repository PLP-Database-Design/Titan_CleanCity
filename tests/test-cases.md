# 📋 Manual Test Case Suite for CleanCity Waste Pickup Scheduler

## ✅TC01 - Password Should Not Be Stored in Plaintext.
Objective: Ensure that user passwords are stored securely (not visible in plain text).

Precondition: User has successfully registered or logged in.

Steps:

Register or log in with any valid credentials.

Open the browser’s Developer Tools.

Navigate to Application → Local Storage → cleancity_users.

Inspect the saved user data.

Expected Result:
Passwords should be hashed or obfuscated — not human-readable.

Actual Result:
❌ Passwords are fully visible in plaintext JSON format (e.g., "password": "123456").

Status: Fail


## ✅ TC002 - Admin Edits Request Status
Objective: Admin can change request status

Steps:

Log in as admin

Click Edit on a request row

Select a new status

Click Update

Expected Result: One message should be displayed indicating a successful entry — "Request status updated successfully!"

Actual Result: ❌ Two messages appear: success + error alert- "Please select both a request and a new status" (bug)

Status: Fail



