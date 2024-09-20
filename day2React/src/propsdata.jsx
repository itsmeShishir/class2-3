
const PropsDatas = (props) => {
    const {img, name, age} = props;
  return (
    <div>
    <img src={img} alt="" />
      <h1>{name}</h1>
      <h1>{age}</h1>
    </div>
  )
}

export default PropsDatas
