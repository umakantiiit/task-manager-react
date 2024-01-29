function TodoItem({ todoName, todoDate, onDeleteClick }) {
  
  function click(){
    alert("your task is completed")
    btn.style.backgroundColor='green';
    btn.style.color='white'
  }
    return (
      <div className="container">
        <div className="row kg-row">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-danger kg-button"
              onClick={() => onDeleteClick(todoName)}
            >
              Delete
            </button>
            <button id="btn" onClick={click}> MARK TASK AS COMPLETED</button>
          </div>
        </div>
      </div>
    );
  }
export default TodoItem;