## `Test Cases` – CleanCity Waste Management


### 1. Authentication

| Test ID | Test Case                      | Steps                                 | Expected Result                             | Actual Result | Status |
| ------- | ------------------------------ | ------------------------------------- | ------------------------------------------- | ------------- | ------ |
| TC-001  | Register a new user            | Fill name, email, password on /signup   | Redirect to dashboard, show welcome message | ❌ Not redirected to dashboard        | Failed |
| TC-002  | Prevent duplicate registration | Register with same email                | Show "Email already exists" error           | ✅ "Email already exists" error shown | Passed |
| TC-003  | Login with correct credentials | Fill email & password on /login         | Redirect to dashboard                       | ✅ Redirected to dashboard            | Passed |
| TC-004  | Reject invalid login           | Use wrong credentials                   | Show "Invalid credentials" error            | ✅ Invalid login rejected             | Passed |
| TC-005  | Logout                         | Click logout                            | Redirect to login page                      | ✅ Redirected to login page           | Passed |
| TC-006  | Password security              | Login or register, inspect LocalStorage | Password should be encrypted/hashed         | ❌ Password stored in plain text      | Failed |

---

### 2. Waste Pickup Scheduling

| Test ID | Test Case                 | Steps                                                           | Expected Result                       | Actual Result | Status |
| ------- | ------------------------- | --------------------------------------------------------------- | ------------------------------------- | ------------- | ------ |
| TC-007  | Successful pickup request | Fill all fields: name, location, phone, email, date, type, desc | Show success message                  | ✅ Success message shown  | Passed |
| TC-008  | Validation on empty form  | Submit form without inputs                                      | Show validation errors for all fields |✅ Validation errors      | Passed |
| TC-009  | Invalid phone format      | Enter wrong phone number                                        | Show error for phone field            | ✅ Invalid error          | Passed |
| TC-010  | Calendar date selection   | Select from date picker                                         | Date accepted and shown               | ✅ Date accepted          | Passed |
| TC-011  | Select valid waste type   | Choose from dropdown                                            | Value accepted                        |  ✅ Value accepted        | Passed |

---

### 3. Dashboard & Analytics

| Test ID | Test Case                   | Steps                                              | Expected Result                              | Actual Result               | Status |
| ------- | --------------------------- | -------------------------------------------------- | -------------------------------------------- | --------------------------- | ------ |
| TC-012  | View dashboard data         | Login and go to `/dashboard`                       | Statistics and pickups shown                 | ✅ Statistics shown          | Passed |
| TC-013  | Leaderboard loads           | Check leaderboard section                          | Leaderboard visible                          | ❌ Leaderboard not visible   | Failed |
| TC-014  | Charts render               | Check canvas/chart element                         | Chart renders with data                      | ❌ Chart not visible         | Failed |
| TC-015  | Filter Requests by Location | Select "Eldoret" in location filter                | Only Eldoret requests appear                 | ❌ Nairobi requests appear   | Failed |
| TC-016  | Clear All Filters           | Click "Clear Filters" after applying filters       | Filters reset and full list shown            | ❌ No clear button available | Failed |
| TC-017  | Sidebar responsiveness      | Resize screen (mobile/tablet), scroll with sidebar | Sidebar collapses or doesn’t overlap content | ❌ Sidebar overlaps content  | Failed |

---

### 4. Blog & Awareness Content (Admin)

| Test ID | Test Case          | Steps                             | Expected Result                  | Actual Result | Status |
| ------- | ------------------ | --------------------------------- | -------------------------------- | ------------- | ------ |
| TC-018  | Post blog article  | Fill title and content and submit | Success message and post visible | ✅ Success message and post visible | Passed |
| TC-019  | Prevent empty post | Submit with blank content         | Show validation error            | ❌ Invalid error                    | Passed |

---

### 5. Community Features

| Test ID | Test Case              | Steps                 | Expected Result        | Actual Result | Status |
| ------- | ---------------------- | --------------------- | ---------------------- | ------------- | ------ |
| TC-020  | Like a community post  | Click like button     | Likes count increments | ✅ Likes count increments | Passed |
| TC-021  | Prevent multiple likes | Click like repeatedly | Only 1 like allowed    | ✅ 1 like allowed         | Passed |

---

### 6. User Settings & Feedback

| Test ID | Test Case           | Steps                     | Expected Result      | Actual Result | Status |
| ------- | ------------------- | ------------------------- | -------------------- | ------------- | ------ |
| TC-022  | Update profile name | Change name and save      | Show success message | ✅ Success message shown  | Passed |
| TC-023  | Submit feedback     | Write and submit feedback | Show success message | ✅ Success message shown  | Passed |
| TC-024  | Empty feedback form | Submit without typing     | Show error           | ✅ Invalid error          | Passed |

---

### 7. Accessibility & Performance 

| Test ID | Test Case           | Steps                     | Expected Result      | Actual Result | Status |
| ------- | ------------------- | ------------------------- | -------------------- | ------------- | ------ |
| TC-025  | All images have appropriate alternative text descriptions | Disable images in browser | Images are replaced with alt texts |❌ No alt text | Failed |
| TC-026  | Keyboard navigation is consistent and predictable | Navigate the website using the "Tab" key | Navigation is consistent throughout the website | ❌Navigation is not consistent | Failed |
| TC-027  | Test the website's usability with high contrast settings enabled | Go to your PC's settings and click "high contrast mode" | The website works well with the high contrast theme | ✅ The website works well with the high contrast theme | Passed |
| TC-028  | Check that the website is compatible with different browsers | Open the website using different browsers | Website still works | ✅ Website still works | Passed |
| TC-029  | Test the website's zoom functionality to ensure it maintains usability and readability at various zoom levels | Change zoom levels on your browser | The website is still working well irregardless of the font size and zoom levels | ✅ Website is working well | Passed |
| TC-030  | Test the website with NVDA to ensure compatibility | Enable NDVA on your device | Website has good compatibility | ✅ Website has good compatibility | Passed |
| TC-031  | Use lighthouse for  overall website accessibility score | Open lighthouse on your browser | Website has a good accessiblity score | ✅ Website has good accessibility score (100) | Passed |
| TC-032  | Use lighthouse for overall website performance score | Open lighthouse on your browser | Website has good performance score | ❌ Website has a slightly above average performance score (70) | Failed |

---

### 🔁 Test Cases for automation:

| Test ID | Test Case                                                 |
| ------- | --------------------------------------------------------- |
| TC-033  | Load data with slow network (simulate throttle)           |
| TC-034  | Form autosave or prevent duplicate submission             |
| TC-035  | Admin deletes a blog post                                 |
| TC-036  | Prevent invalid email format in forms                     |
| TC-037  | Role-based access (non-admin cannot access `/admin/blog`) |

