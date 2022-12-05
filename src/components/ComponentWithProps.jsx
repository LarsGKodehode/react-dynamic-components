/**
 * Here we are destructuring both inside the parameter fields
 */
 function ComponentWithProps({
    someArray,
    title,
    whateverYouWant
  }) {
  // const {someArray, title, whateverYouWant} = props

  return (
    <div>
      <h1>{title}</h1>
      <p>{whateverYouWant}</p>
    </div>
  )
}

export default ComponentWithProps;