const Button = (props) => {

    const esOperator = (valueOperator) => {
      return (

        isNaN(valueOperator) && (valueOperator != '.') && (valueOperator != '=')
        
      );
    };
    
  return (

    <button

      onClick={() => props.handleClick(props.children)}
      
      className={`items-center justify-center flex-1 font-semibold text-5xl p-1 flex m-1 w-20 rounded-2xl border-4 border-black bg-blue-400 hover:bg-blue-500 ${esOperator(props.children) ? 'bg-green-400 hover:bg-green-500' : ''}`.trimEnd()}>
      
      {props.children}

    </button>

  );
};

export default Button;