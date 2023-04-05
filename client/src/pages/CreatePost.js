import React, { useState } from "react";
import "./CreatePost.css";
import { supabase } from "../client";

const CreatePost = () => {
  const [post, setPost] = useState(null);
  const handleChange = (input) => {
    const newPost = {
      title: input.title,
      author: input.author,
      description: input.description,
    };
    setPost(newPost);
  };

  const createPost = async (event) => {
    event.preventDefault();
    await supabase
      .from("Post")
      .insert({
        title: post.title,
        author: post.author,
        description: post.description,
      })
      .select();
  };
  return (
    <div>
      <form>
        <label for="title">Title</label> <br />
        <input type="text" id="title" name="title" onChange={handleChange} />
        <br />
        <br />
        <label for="author">Author</label>
        <br />
        <input type="text" id="author" name="author" onChange={handleChange} />
        <br />
        <br />
        <label for="description">Description</label>
        <br />
        <textarea
          rows="5"
          cols="50"
          id="description"
          onChange={handleChange}
        ></textarea>
        <br />
        <input type="submit" value="Submit" onClick={createPost} />
      </form>
    </div>
  );
};

export default CreatePost;
