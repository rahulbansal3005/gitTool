// import React, { useState, useEffect } from 'react';
// import InfiniteScroll from 'react-infinite-scroll-component'

// const url = 'https://api.github.com/users/rahulbansal3005/repos';

// second argument

// const UseEffectFetchData = () => {
//   const [users, setUsers] = useState([]);

//   const getRepos = async () => {
//     const response = await fetch(url);
//     const repos = await response.json();
//     setUsers(repos);
//     // console.log(users);
//   };

//   useEffect(() => {
//     getRepos();
//   }, []);
//   return (
//     <>
//       <h3>github repos</h3>
//       {/* <InfiniteScroll
//           dataLength={this.state.items.length}
//           next={this.fetchMoreData}
//           hasMore={true}
//           loader={<h4>Loading...</h4>}
//         > */}

//       <ul className='users'>
//         {users.map((repo) => {
//           const { id, name, html_url,created_at } = repo;
//           return (
//             <li key={id}>
//               {/* <img src={avatar_url} alt={name} /> */}
//               <div>
//                 <h4>{name}</h4>
//                 <a href={html_url}>Repository</a>
//                 <p>0{created_at}</p>
//               </div>
//             </li>
//           );
//         })}
//       </ul>
//         {/* </InfiniteScroll> */}
//     </>
//   );
// };

// export default UseEffectFetchData;

import React, { Component } from "react";
// import PropTypes from "prop-types";
import InifiniteScroll from "@alexcambose/react-infinite-scroll";

export class News extends Component {

  state = {
    items: [],
    // skip: 0,
    // perLoad: 10,
    // hasMore: true,
  };

  loadMore = (skip, perLoad) =>
    fetch(
      `https://api.github.com/users/rahulbansal3005/repos?page=${skip}&per_page=${perLoad}`
    ).then((res) => res.json());

  render() {
    const { items } = this.state;
    return (
      <InifiniteScroll
        auto={{
          loadMore: this.loadMore,
          perLoad: 5,
          onLoadMore: (newItems) =>
            this.setState({ items: [...items, ...newItems] }),
        }}
      >
        {
          <ul className="users">
            {items.map((repo) => {
              const { id, name, html_url, created_at } = repo;
              return (
                <li key={id}>
                  <div>
                    <h4>{name}</h4>
                    <a href={html_url}>Repository</a>
                    <p>0{created_at}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        }
      </InifiniteScroll>
    );
  }
}

export default News;
