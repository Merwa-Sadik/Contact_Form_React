import { useForm } from 'react-hook-form';
import styles from './ContactForm.module.css';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      reset();
    } catch (error) {
      console.error('Submission failed:', error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formCard}>
        <div className={styles.header}>
          <h2 className={styles.title}>Get In Touch</h2>
          <p className={styles.subtitle}>We'd love to hear from you</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.fieldGroup}>
            <label htmlFor="name" className={styles.label}>Full Name</label>
            <input
              id="name"
              type="text"
              className={styles.input}
              placeholder="Enter your full name"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && (
              <p className={styles.error}>
                <span>⚠️</span>{errors.name.message}
              </p>
            )}
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="email" className={styles.label}>Email Address</label>
            <input
              id="email"
              type="email"
              className={styles.input}
              placeholder="Enter your email address"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Invalid email format',
                },
              })}
            />
            {errors.email && (
              <p className={styles.error}>
                <span>⚠️</span>{errors.email.message}
              </p>
            )}
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="message" className={styles.label}>Message</label>
            <textarea
              id="message"
              className={styles.textarea}
              placeholder="Tell us what's on your mind..."
              {...register('message', { required: 'Message is required' })}
            ></textarea>
            {errors.message && (
              <p className={styles.error}>
                <span>⚠️</span>{errors.message.message}
              </p>
            )}
          </div>

          <button type="submit" disabled={isSubmitting} className={styles.button}>
            {isSubmitting ? (
              <>
                <svg className={styles.spinner} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}