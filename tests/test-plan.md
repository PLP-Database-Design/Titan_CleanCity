# CleanCity: Waste Pickup Scheduler – Initial Test Plan

## 1. Objective
To validate the core functionalities and intentional flaws of the CleanCity web application through manual and automated testing using React Testing Library. The goal is to ensure we find any bug and vulnerabilities in the system.
---

## 2. Scope of Testing

### Included:
- User registration and login
- Waste pickup request form
- Dashboard filtering (location and status)
- Admin status updates
- Feedback submission
- Accessibility and responsive design


## 3. Test Strategy

### Manual Testing:
- Form validation (empty fields, incorrect data)
- Dashboard filtering (location/status mismatches)
- Feedback functionality (request ID validation)
- Admin actions (status updates)
- Accessibility testing (screen reader compatibility, missing alt text)
- UI/UX inconsistencies (responsive issues)

### Automated Testing:
- Use **React Testing Library** to:
  - Simulate form submissions and status updates
  - Validate routing and page transitions
  - Mock and verify localStorage data persistence
  - Perform regression tests after updates

### Regression Testing:
- Run previously passing tests after new code is introduced
- Focus on Admin panel, Dashboard, and Pickup Form
- Validate persistence and UI behavior post-update
  
### Accessibility Testing:
- Use Lighthouse or screen readers to:
  - Detect missing `alt` attributes on images
  - Validate keyboard navigability
  - Check color contrast and ARIA usage

## 4. Known Bugs and Testing Focus

## 5. Tools & Environments

- **Browsers:** Chrome, Firefox
- **Devices:** Desktop and mobile
- **DevTools:** Chrome DevTools, Lighthouse
- **Accessibility:** Screen Readers (NVDA/VoiceOver)
- **Testing Framework:** React Testing Library

---
## 6. Risks

| Risk | Mitigation |
|------|------------|

---

## 7. Deliverables

- Bug report document (Week 2+)
- Test coverage report (automated)
- Updated test plan as app evolves

---

## 8. Team Responsibility

| Name | Role |
|------|------|
| Anne | Manual Testing |
| David | Automated Testing |
| Samukelisiwe | Accessibility and Regression Testing |

---

## 9. References

- Project Documentation
- Intentional Bugs List
- React Testing Library Docs
