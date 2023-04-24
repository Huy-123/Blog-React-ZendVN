import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function HeaderMenus() {
  const menus = useSelector((state) => state.MENU.menus);

  // Render Memu

  function renderMenu(menus) {
    return menus.map((item) => (
      <li key = {item.id}>
        <a href="/">{item.title}</a>
        {item.childItems.length > 0 && <ul>{renderMenu(item.childItems)}</ul>}
      </li>
    ));
  }

  return (
    <div className="tcl-col-6">
      {/* Nav */}
      {/* <div className="header-nav">
        <ul className="header-nav__lists">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Our Team</a>
            <ul>
              <li>
                <a href="/">Our Team 1</a>
              </li>
              <li>
                <a href="/">Our Team 2</a>
              </li>
              <li>
                <a href="/">Our Team 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/">Contact</a>
            <ul>
              <li>
                <a href="/">Contact 1</a>
              </li>
              <li>
                <a href="/">Contact 2</a>
              </li>
              <li>
                <a href="/">Contact 3</a>
                <ul>
                  <li>
                    <a href="/">Contact 11</a>
                  </li>
                  <li>
                    <a href="/">Contact 12</a>
                  </li>
                  <li>
                    <a href="/">Contact 13</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="header-nav__lists">
          <li className="user">
            <Link to="/login">
              <i className="icons ion-person" /> Tài khoản
            </Link>
          </li>
        </ul>
      </div> */}
      <div className="header-nav">
        <ul className="header-nav__lists">{renderMenu(menus)}</ul>
        <ul className="header-nav__lists">
          <li className="user">
            <Link to="/login">
              <i className="icons ion-person" /> Tài khoản
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderMenus;
