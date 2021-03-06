import { useState } from "react";
import { Link } from "react-router-dom";

const ListAC = ({ image, alt, cname, link, info, toggleItem }) => {
  const [check, setCheck] = useState(false);

  const handleCheck = () => {
    setCheck(!check);
  };
  return (
    <>
      <li>
        <label
          className="checkone"
          style={{ position: "absolute", zIndex: "1" }}
        >
          <input
            className="checkbox-one"
            type="checkbox"
            defaultChecked={check}
            onChange={() => toggleItem(info.key)}
          />
        </label>

        <Link to={link}>
          <div
            style={{
              width: "100%",
              position: "relative",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img className={cname} src={image} alt={alt} />
          </div>
        </Link>
      </li>
    </>
  );
};

export default ListAC;
