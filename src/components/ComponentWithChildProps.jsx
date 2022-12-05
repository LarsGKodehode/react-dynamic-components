function ComponentWithChildProps(props) {
  return (
    <div>
      <h1>Component with child props</h1>
      {props.children}
    </div>
  )
}

export default ComponentWithChildProps;