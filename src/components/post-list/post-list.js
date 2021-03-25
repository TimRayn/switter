import React from "react";

import PostListItem from "../post-list-item/post-list-item";

import "./post-list.css";

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => {

  let listItems = [];
  for (const post of posts) {
    const { id, ...postItems } = post;
    listItems.push(
      <li id={id} key={id} className="list-group-item">
        <PostListItem
          {...postItems}
          onDelete={() => onDelete(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleLiked={() => onToggleLiked(id)}
        />
      </li>);
  };

  return (
    <ul className="app-list list-group">
      {listItems}
    </ul>
  );
};

export default PostList;