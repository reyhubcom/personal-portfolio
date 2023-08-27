import { Post } from '@msanvarov/store';
import Link from 'next/link';
import Moment from 'react-moment';
import { Form } from 'reactstrap';

type BlogNavbarProps = {
  posts: Post[];
  categories: string[];
  tags: string[];
};

export const BlogNavbar = ({ posts, categories, tags }: BlogNavbarProps) => {
  return (
    <div className="blog-sidebar">
      <div className="blog-sidebar-inner">
        <div className="blog-sidebar-widget search-widget">
          <div className="blog-sidebar-widget-inner" data-aos="zoom-in">
            <Form className="shadow-box">
              <input type="text" placeholder="Find blog by name or category" />
              <button className="theme-btn">Find</button>
            </Form>
          </div>
        </div>
        <div
          className="blog-sidebar-widget recent-post-widget"
          data-aos="zoom-in"
        >
          <div className="blog-sidebar-widget-inner shadow-box">
            <h3>Recent Posts</h3>
            <ul>
              {posts.map((post, i) => (
                <li key={i}>
                  <Link
                    as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                    href={`/posts/[post]`}
                  >
                    {post.metadata.title}
                  </Link>
                  <p>
                    <Moment format="LLL">{post.metadata.created}</Moment>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className="blog-sidebar-widget categories-widget"
          data-aos="zoom-in"
        >
          <div className="blog-sidebar-widget-inner shadow-box">
            <h3>Categories</h3>
            <ul>
              {categories.map((category, i) => (
                <li key={i}>
                  <Link href="/blog-details" className="theme-btn">
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="blog-sidebar-widget tags-widget" data-aos="zoom-in">
          <div className="blog-sidebar-widget-inner shadow-box">
            <h3>Tags</h3>
            <ul>
              {tags.map((tag, i) => (
                <li key={i}>
                  <Link className="theme-btn" href="/blog-details">
                    {tag}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
