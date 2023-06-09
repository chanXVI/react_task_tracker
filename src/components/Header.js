import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = (event) => {
    console.log("Click");
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "Master Branch",
};

Header.propTypes = {
  title: PropTypes.string,
};

// // CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'green'
// }

export default Header;
