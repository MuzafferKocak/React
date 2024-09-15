import React from "react";
import { useState, useEffect } from "react";

const EditModal = ({ editData }) => {
  console.log(editData);

  const [title, setTitle] = useState(editData.title);
  const [description, setDescription] = useState(editData.description);

  //? componentDidUpdate
  useEffect(() => {
    setTitle(editData.title);
    setDescription(editData.description);
  }, [editData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };
  return (
    <>
      <div
        className="modal fade"
        id="openModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Tutorial
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Enter your title"
                    value={title || ""}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="desc" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="desc"
                    placeholder="Enter your Description"
                    value={description || ""}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
                <div className="d-flex justify-content-center align-items-center gap-2">
                  <button type="submit" className="btn btn-danger ">
                    Submit
                  </button>
                  <button className="btn btn-secondary" data-bs-dismiss="modal">
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditModal;
