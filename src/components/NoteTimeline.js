export default function NoteTimeline(props) {
    
    const displayNotes = (props) =>{
        const {comments} = props;

    
    
    if (comments.length > 0 ) {
        return(
            comments.map((comment, index) =>{
                console.log(comment);
                return(
                    <div className='note' key={comment._id}>
                        {/* <h3 className="note__title">{comment._title}</h3> */}
                        {/* <p className="note__body">{comment.body}</p>
                        <span className="note__fadeout"></span> */}
                        {/* <td>{comment.body}</td> */}
                        <table className="comments table">
                    <thead>
                        <tr>
                            <th>comment</th>
                            
                        </tr>
                    </thead>
                    <tbody className="prodbody">
                        {comment.body}
                    </tbody>
                    </table>
                    </div>
                )
            })
        )
    } else {
        return (<h3>No Comments Yet</h3>)
    }

}    
return(
    <>
        {displayNotes(props)}
    </>
)
    }