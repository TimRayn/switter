import React, { Component } from "react";

import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-app-form";
import IdGenerator from "../../utils/idGenerator";

import "./app.css";

const idGenerator = new IdGenerator();

export default class App extends Component {

  state = {
    data: [
      {
        label: "Going to learn React",
        important: true,
        like: false,
        id: "sdfgsdghbdfh"
      },
      {
        label: "Its awesome!",
        important: false,
        like: true,
        id: "wsdgsza"
      },
      {
        label: "Kill me pls...",
        important: false,
        like: false,
        id: "wsdg"
      },
      {
        label: "Nope, Im just fine",
        important: true,
        like: false,
        id: "sgfdh"
      }
    ],
    term: "",
    filter: "all"
  };

  deleteItem = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((post) => post.id === id);

      const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
      return {
        data: newArr
      };
    });
  };

  addItem = (body) => {
    const newItem = {
      label: body,
      important: false,
      id: idGenerator.generateId()
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return { data: newArr };
    });
  };

  togglePostParameter = (id, parameter) => {
    this.setState(({ data }) => {
      const index = data.findIndex((post) => post.id === id);
      const oldPost = data[index];
      let newPost = {};
      switch (parameter) {
        case "like":
          newPost = { ...oldPost, like: !oldPost.like };
          break;
        case "important":
          newPost = { ...oldPost, important: !oldPost.important };
          break;
        default:
          break;
      }
      const newArr = [...data.slice(0, index), newPost, ...data.slice(index + 1)];
      return { data: newArr };
    });
  };

  onToggleImportant = (id) => {
    this.togglePostParameter(id, "important");
  };

  onToggleLiked = (id) => {
    this.togglePostParameter(id, "like");
  };

  searchPost = (items, term) => {
    //if (term.length === 0) return items;

    return items.filter((item) => {
      return item.label.toLowerCase().includes(term.toLowerCase());
    });
  };

  filterPost = (items, filter) => {
    if (filter !== 'all') return items.filter(item => item[filter]);
    return items;
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { data, term, filter } = this.state;
    const liked = data.filter((post) => post.like).length;
    const allPosts = data.length;

    const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

    return (
      <div className="app">
        <AppHeader
          liked={liked}
          allPosts={allPosts} />
        <div className="search-panel d-flex">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <PostStatusFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect} />
        </div>
        <PostList
          posts={visiblePosts}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked} />
        <PostAddForm onAdd={this.addItem} />
      </div>
    );
  };
};