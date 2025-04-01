const Button = ({ textOnly, onClick, children }) => {
    const className = textOnly ? 'text-button' : 'button';
  
    return (
      <button className={className} onClick={onClick}>
        {children}
      </button>
    )
  }
export default Button