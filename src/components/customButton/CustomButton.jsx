import React from 'react'

const CustomButton = React.forwardRef(({ children, className, onClick, type, disabled, ...rest }, ref) => {
    return (
      <button
        type={type}
        className={`btn ${className} button`} // Combine Bootstrap classes with custom classes
        onClick={onClick}
        {...rest}
        ref={ref}
      >
        {children}
      </button>
    );
  });

export default CustomButton