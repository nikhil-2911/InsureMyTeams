import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";

import { SearchContext } from "../context/searchContext";

// component
import Post from "./Post";
import Pagination from "./Pagination";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const searchContext = useContext(SearchContext);

  // Change Page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    if (searchContext !== "") {
      const filterPost = posts.filter((post) => {
        const words = post.title.split(" ");
        return words.find(searchContext) !== undefined;
      });
      setPosts(filterPost);
    }
  }, [searchContext]);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  // Get current posts
  const indexLastPost = currentPage * postsPerPage;
  const indexFirstPost = indexLastPost - postsPerPage;
  const currentPosts = posts.slice(indexFirstPost, indexLastPost);

  return (
    <>
      <Container className="d-flex flex-wrap">
        {currentPosts.map((post) => (
          <Post post={post} loading={loading} />
        ))}
      </Container>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </>
  );
};

export default Posts;
