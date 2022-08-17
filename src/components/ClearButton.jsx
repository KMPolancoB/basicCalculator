

const ClearButton = ({clearP}) => {
  return (
    <button 

      onClick={clearP}

      className='bg-white border-10 flex-1 font-semibold text-3xl rounded-3xl items-center justify-center flex py-1 mt-2 border-b-8 border-b-stone-400'>
      
      CLEAR
      
    </button>
  );
};


export default ClearButton;