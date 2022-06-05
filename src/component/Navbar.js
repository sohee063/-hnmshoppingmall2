import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = ({ setAuth, auth }) => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };

  const search = (event) => {
    if (event.key === "Enter") {
      // 입력한 검색어를 읽어와서 url을 바꿔 준다.
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  const logOut = () => {
    setAuth(false);
    navigate("/");
  };

  return (
    <div>
      <div className="login-area" onClick={goToLogin}>
        <FontAwesomeIcon icon={faUser} />
        <div onClick={logOut}>{auth === true ? "로그아웃" : "로그인"}</div>
      </div>
      <div className="nav-section">
        <Link to="/">
          <img
            width={100}
            src="https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg"
          />
        </Link>
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>

        <div className="search-area">
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="input"
            placeholder="제품검색"
            onKeyPress={(event) => search(event)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
