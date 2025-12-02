# Contact Form using React + useForm Hook


##  Project Description
This project demonstrates how to build a **Contact Form** in React using the `useForm` hook from the `react-hook-form` library. The goal is to simplify form state management, validation, and submission handling.


The form contains three fields:
- **Name** (required)
- **Email** (required, must be valid)
- **Message** (required)


The UI is styled using simple responsive CSS (Tailwind classes).


---


## Features
- Form validation (required fields + email format)
- Error messages for invalid inputs
- Submission handling using `handleSubmit`
- Auto-reset on successful submit
- Responsive and clean UI


---


##  Technologies Used
- React
- TypeScript
- react-hook-form
- TailwindCSS


---


##  How to Run the Project
1. Clone the repository:
```
git clone <repo-url>
```
2. Install dependencies:
```
npm install
```
3. Start the development server:
```
npm run dev
```
4. Open in browser:
```
http://localhost:5173
```


##  File Structure
```
src/
├── components/
│ └── ContactForm.tsx
└── App.tsx
```


##  Validation Logic
- Name → cannot be empty
- Email → must match email regex
- Message → cannot be empty


Handled using the `register()` method from `useForm`.



##  Contact
For any questions, feel free to reach out.
*/
