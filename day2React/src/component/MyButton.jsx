
const MyButton = (props) => {
  return (
    <>
      <button className={props.owncss ? `${props.owncss}`:"bg-red-500 text-white px-4 py-2"}>Clicke me</button>
    </>
  )
}

export default MyButton
