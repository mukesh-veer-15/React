import React, { useState } from 'react';
import BlogForm from './components/BlogForm';
import BlogList from './components/BlogList';
import BlogNav from './components/BlogNav';
import Posts from './components/Posts';

interface Blog {
  title: string;
  content: string;
  image?: string;
}

const App: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const handleAddBlog = (newBlog: { title: string; content: string; image: File | null }) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const image = newBlog.image ? reader.result as string : undefined;
      setBlogs([...blogs, { ...newBlog, image }]);
    };
    if (newBlog.image) {
      reader.readAsDataURL(newBlog.image);
    } 
  };

  return (
    <div className="App">
     
      <BlogNav />
      <Posts />
      <BlogList blogs={blogs} />
      <BlogForm onAddBlog={handleAddBlog} />
    </div>
  );
};

export default App;
