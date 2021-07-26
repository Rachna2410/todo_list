import React, { useState, useEffect } from 'react'

const EditDocument = props => {

  const [document, setDocument] = useState(props.currentDocument)
  useEffect(
    () => {
      setDocument(props.currentDocument)
    },
    [ props ]
  )

  const handleInputChange = event => {
		const { name, value } = event.target

		setDocument({ ...document, [name]: value })
  }
  
  return (
    <form onSubmit={event => {
      event.preventDefault();
      if (!document.task) return

      props.updateDocument(document.id, document)
    }}>
      <input type="text" name="task" placeholder="Enter Title" value={document.task} onChange={handleInputChange} />
      <button  className="btn btn-primary">Edit Document</button>
      <button onClick={() => props.setEditing(false)} className="btn btn-info">
        Cancel
      </button>
    </form>
  )
}

export default EditDocument;