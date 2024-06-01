import React from 'react';
import { Col, Container } from 'react-bootstrap';

interface Blog {
  title: string;
  content: string;
  image?: string;
}

interface BlogListProps {
  blogs: Blog[];
}

const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
  return (
    <Container>
      {blogs.map((blog, index) => (
        <Col md={8} key={index} className="blog-post border-box mb-4">
          {blog.image && <img src={blog.image} alt={blog.title} width={855}
                height={255} />}
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
          <button className="btn btn-primary">Read More</button>
          <p></p>
          <p></p>
        </Col>
      ))}
    </Container>
  );
};

export default BlogList;
