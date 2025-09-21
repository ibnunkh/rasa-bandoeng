const Button = ({ children, onClick, type, className }) => {
  return (
    <button type={type} onClick={onClick} className={className}>{children}</button>
  )
}

export default Button