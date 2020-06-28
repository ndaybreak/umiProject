import React from 'react';
import { NavLink } from 'umi';
import styles from './index.less';

export default () => {
  return (
    <div className={styles.wrapper}>
      <NavLink to="/user">User</NavLink>
      {/* 当前路由为 /faq 时，附着 class selected */}
      <NavLink to="/ad" activeClassName="selected">
        ad
      </NavLink>
      {/* 当前路由为 /faq 时，附着 style */}
      <NavLink
        to="/faq"
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
      >
        FAQs
      </NavLink>
      {/* 当前路由完全匹配为 /profile 时，附着 class */}
      <NavLink exact to="/profile" activeClassName="selected">
        Profile
      </NavLink>
      {/* 当前路由为 /profile/ 时，附着 class */}
      <NavLink strict to="/profile/" activeClassName="selected">
        Profile
      </NavLink>
      {/* 当前路由为 /profile，并且 query 包含 name 时，附着 class */}
      <NavLink
        to="/profile"
        exact
        activeClassName="selected"
        isActive={(match, location) => {
          if (!match) {
            return false;
          }
          return location.search.includes("name");
        }}
      >
        Profile
      </NavLink>
    </div>
  );
}
