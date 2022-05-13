const Categories = (props) => {
  
  const categories = props.categories.map(({name, image}) => {
    return <li>
      <img src={image} alt={name} />
      <div>{name}</div>
    </li>
  });

  return <>{categories}</>
}

export default Categories