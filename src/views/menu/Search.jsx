

export const Search = ({ children, isActive, handleToggleClick })=>{



  return(

    <div className={`main${isActive ? ' active' : ''}`}>
      <div className="toggle" onClick={handleToggleClick}>
        <ion-icon name={isActive ? 'return-down-forward-outline' : 'return-down-back-outline'} />
      </div>
      <div className="details">
        {children}
      </div>
    </div>

  );
};

export default Search;