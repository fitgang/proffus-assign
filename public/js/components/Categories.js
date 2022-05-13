const Categories = props => {
  const categories = props.categories.map(({
    name,
    image
  }) => {
    return /*#__PURE__*/React.createElement("li", {
      className: "card"
    }, /*#__PURE__*/React.createElement("img", {
      src: image,
      alt: name
    }), /*#__PURE__*/React.createElement("div", null, name));
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, categories);
};

export default Categories;