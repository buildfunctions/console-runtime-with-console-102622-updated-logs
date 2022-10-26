
const TokenButton = (props) => {
  const {
    width,
    active,
    children,
    variant = 'primary',
    Component = 'button',
    disabled = false,
    loading = false,
    style = {},
    size = 'md',
    className,
    ...rest
  } = props

  return (
    <Component
      {...rest}
    >
      {loading ? (
        <i className="m-0 flex">
          loading
        </i>
      ) : (
        children
      )}
    </Component>
  )
}

// Our Button component is built thinking of it as a button,
// but it can also be used as a link and include the anchor props
export default TokenButton