import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { actLogout } from "../../store/user/actions";

function HeaderMenus() {
  const {menus} = useSelector((state) => state.MENU);

  const {token, currentUser} = useSelector((state) => state.USER);

  const history = useHistory();

  const dispatch = useDispatch()

  // Render Memu

  function renderMenu(menus) {
    return menus.map((item) => (
      <li key={item.id}>
        <a href="/">{item.title}</a>
        {item.childItems.length > 0 && <ul>{renderMenu(item.childItems)}</ul>}
      </li>
    ));
  }
  
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actLogout())
    history.push("/login");
  };

  return (
    <div className="tcl-col-6">
      <div className="header-nav">
        <ul className="header-nav__lists">{renderMenu(menus)}</ul>
        <ul className="header-nav__lists">
          <li className="user">
            {currentUser && (
              <Link to="/login">
                <i className="icons ion-person" /> {currentUser.name}
              </Link>
            )}
            <ul>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <a href="#" onClick={handleLogout}>
                  Logout
                </a>
              </li>
            </ul>
          </li>
          <li>
            {!currentUser && (
              <Link to="/register" >
                <i className="icons ion-person" /> Dang ky
              </Link>
            )}
          </li>
          <li>
            {!currentUser && (
              <Link to="/login" >
                <i className="icons ion-person" /> Dang nhap
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderMenus;
