# IT2805 Assignment 3: Forms and Responsiveness

### Passing marks: 65%

## Task 1: Form (60%)

You are required to create a complete HTML5 form for an imaginary website. The form will be used to collect user data for a specific purpose (e.g., registration, contact, survey, booking). The form should include the following:

#### Form Title
  - Include a suitable heading for your form (e.g., "User Registration", "Contact Us", etc.).

  - [x] **Text Input**: User’s first name and last name (required fields).
  - [x] **Email Input**: User’s email address (with HTML5 email validation).
  - [x] **Password Input**: User’s password (with a minimum character requirement of 8).
  - [x] **Phone Number Input**: A phone number (with a pattern to allow phone number formats like (123) 456-7890).
  - [x] **Date Input**: User’s birthdate (must be at least 18 years old).
  - [x] **Dropdown List (Select Element)**: A list of countries.
  - [x] **Radio Buttons**: Choose a gender (male, female, other).
  - [x] **Checkboxes**: Select interests (e.g., Sports, Reading, Traveling, etc.).
  - [x] **Textarea**: A field for users to write additional comments (optional).
  - [x] **Range Slider**: For selecting satisfaction levels (from 1 to 10).
  - [x] **File Upload**: Allow the user to upload a profile picture.

- **Submit and Reset Buttons**:
  - [x] Add a “Submit” button to submit the form.
  - [x] Add a “Reset” button to clear the form data.

- **HTML5 Validation**
  - Ensure that appropriate fields (name, email, password, phone number) are marked as required using the `required` attribute.
  - [x] add kommentar nederst for *
  - [x] gjør stjerne rød

- **Input Validation**:
  - Use HTML5 input attributes and pattern to enforce correct formatting for email and phone number inputs.
  - Add `minlength` and `maxlength` attributes where necessary (e.g., password length).
    - [x] add max length
  - [x] Use the `min` and `max` attributes to ensure that the birthdate makes the user at least 18 years old.
  - [x] For checkboxes and radio buttons ensure at least one option is selected.

- **Form Styling**:
  - Apply basic CSS styles to make your form look visually appealing. Consider layout, spacing, font sizes, colors, and alignment.
  - Ensure the form is responsive and looks good on various screen sizes (desktop, tablet, and mobile).

#### Task 2: Responsiveness (40%)

There is an `template.html` file. It shows the basic layout of a webpage. Consider this as a template for a webpage for selling kitchens. Add images and text for Features and their descriptions (you can use online resources). Once you are done with making the basic HTML and CSS work, the real task begins:

- **Media Queries**:
  - [x] Add the media queries to ensure that the website adjusts properly for smaller (than desktop) screen sizes. Pick five small screen sizes and make sure the website is properly adjusted.
  - [x] Ensure the image scales properly.
  - [x] Use Flexbox to manage the layout of the feature items in the `.features` section and ensure they stack vertically on smaller screens.

## Submission

Create two HTML files, use embedded CSS:

- `form.html`
- `responsive.html`

Zip them with all the images that you used for Task 2 and submit on Blackboard.
$$