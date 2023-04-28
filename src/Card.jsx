import React from "react";

const Card = ({ title, image, id, info, previewLink }) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl w-40 md:w-96 py-4">
      <figure className="">
        <img
          className="w-fit h-25"
          src={image || "https://placehold.co/600x400"}
          alt={title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-ellipsis">{title.slice(0, 30)}... </h2>
        <label htmlFor={id} className="btn">
          Detail
        </label>
        <a className="btn" href={previewLink}>
          Preview
        </a>
        <input type="checkbox" id={id} className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">{info.title}</h3>
            <p className="py-4">{info.title}</p>
            <div className="modal-action">
              <label htmlFor={id} className="btn">
                Close
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
