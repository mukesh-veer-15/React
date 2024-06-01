import React, { useState } from 'react';
import styles from './BlogForm.module.css';

interface BlogFormProps {
  onAddBlog: (blog: { title: string; content: string; image: File | null }) => void;
}

const BlogForm: React.FC<BlogFormProps> = ({ onAddBlog }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddBlog({ title, content, image });
    setTitle('');
    setContent('');
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div className={styles.formGroup}>
        <label className={styles.label}>Title:</label>
        <input type="text" value={title} onChange={handleTitleChange} className={styles.input} />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Content:</label>
        <textarea value={content} onChange={handleContentChange} className={styles.textarea} />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Image:</label>
        <input type="file" accept="image/*" onChange={handleImageChange} className={styles.input} />
      </div>
      <button type="submit" className={styles.button}>Submit</button>
    </form>
  );
};

export default BlogForm;
