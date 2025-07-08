## `Test Cases` – CleanCity Waste Management


### 1. Authentication

| Test ID | Test Case                      | Steps                                 | Expected Result                             | Actual Result | Status |
| ------- | ------------------------------ | ------------------------------------- | ------------------------------------------- | ------------- | ------ |
| TC-001  | Register a new user            | Fill name, email, password on /signup | Redirect to dashboard, show welcome message |               |        |
| TC-002  | Prevent duplicate registration | Register with same email              | Show "Email already exists" error           |               |        |
| TC-003  | Login with correct credentials | Fill email & password on /login       | Redirect to dashboard                       |               |        |
| TC-004  | Reject invalid login           | Use wrong credentials                 | Show "Invalid credentials" error            |               |        |
| TC-005  | Logout                         | Click logout                          | Redirect to login page                      |               |        |

---

### 2. Waste Pickup Scheduling

| Test ID | Test Case                 | Steps                                                           | Expected Result                       | Actual Result | Status |
| ------- | ------------------------- | --------------------------------------------------------------- | ------------------------------------- | ------------- | ------ |
| TC-006  | Successful pickup request | Fill all fields: name, location, phone, email, date, type, desc | Show success message                  |               |        |
| TC-007  | Validation on empty form  | Submit form without inputs                                      | Show validation errors for all fields |               |        |
| TC-008  | Invalid phone format      | Enter wrong phone number                                        | Show error for phone field            |               |        |
| TC-009  | Calendar date selection   | Select from date picker                                         | Date accepted and shown               |               |        |
| TC-010  | Select valid waste type   | Choose from dropdown                                            | Value accepted                        |               |        |

---

### 3. Dashboard & Analytics

| Test ID | Test Case           | Steps                      | Expected Result              | Actual Result | Status |
| ------- | ------------------- | -------------------------- | ---------------------------- | ------------- | ------ |
| TC-011  | View dashboard data | Login and visit /dashboard | Statistics and pickups shown |               |        |
| TC-012  | Leaderboard loads   | Check leaderboard section  | Leaderboard visible          |               |        |
| TC-013  | Charts render       | Check canvas/chart element | Chart renders with data      |               |        |

---

### 4. Blog & Awareness Content (Admin)

| Test ID | Test Case          | Steps                             | Expected Result                  | Actual Result | Status |
| ------- | ------------------ | --------------------------------- | -------------------------------- | ------------- | ------ |
| TC-014  | Post blog article  | Fill title and content and submit | Success message and post visible |               |        |
| TC-015  | Prevent empty post | Submit with blank content         | Show validation error            |               |        |

---

### 5. Community Features

| Test ID | Test Case              | Steps                 | Expected Result        | Actual Result | Status |
| ------- | ---------------------- | --------------------- | ---------------------- | ------------- | ------ |
| TC-016  | Like a community post  | Click like button     | Likes count increments |               |        |
| TC-017  | Prevent multiple likes | Click like repeatedly | Only 1 like allowed    |               |        |

---

### 6. User Settings & Feedback

| Test ID | Test Case           | Steps                     | Expected Result      | Actual Result | Status |
| ------- | ------------------- | ------------------------- | -------------------- | ------------- | ------ |
| TC-018  | Update profile name | Change name and save      | Show success message |               |        |
| TC-019  | Submit feedback     | Write and submit feedback | Show success message |               |        |
| TC-020  | Empty feedback form | Submit without typing     | Show error           |               |        |

---

### 🔁 Test Cases for automation:

| Test ID | Test Case                                                 |
| ------- | --------------------------------------------------------- |
| TC-021  | Load data with slow network (simulate throttle)           |
| TC-022  | Form autosave or prevent duplicate submission             |
| TC-023  | Admin deletes a blog post                                 |
| TC-024  | Prevent invalid email format in forms                     |
| TC-025  | Role-based access (non-admin cannot access `/admin/blog`) |

