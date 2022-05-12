/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./ProjectItems.css";
import Title from "../UI/Title";
import { projects } from "./projectsInfo";

const ProjectItems = (props) => {
  const pageNumber = Math.ceil(projects.length / 3);
  const pageNumList = Array.from({ length: pageNumber }, (v, i) => i + 1);
  const [currPage, setCurrPage] = useState(1);
  const [currShowedProjects, setCurrShowedProjects] = useState(
    projects.slice(0, 3)
  );

  const changeCurrProjects = (pageNum) => {
    setCurrPage(pageNum);
    const start = (pageNum - 1) * 3;
    const end = pageNum * 3;
    setCurrShowedProjects(projects.slice(start, end));
  };

  return (
    <div className="items__container">
      {currShowedProjects.map((proj, i) => (
        <div key={proj.name} className="item__container">
          <div
            style={{ backgroundImage: `url(${proj.pic})` }}
            className="item__image"
          />
          <div className="item__info">
            <a className="item_name">{proj.name}</a>
            <p>{proj.description}</p>
            <h3>Tech Stack: {proj.tech}</h3>
            <div>
              <Title text="Code" link={proj.code} />
              <Title text="Website" link={proj.link} />
            </div>
          </div>
        </div>
      ))}
      <div className="items__page">
        {pageNumList.map((pageNum, i) => (
          <button
            key={`page_btn_${i}`}
            className="items__page--btn"
            style={{
              border: currPage === pageNum && "1px solid #897da5",
              transform: currPage === pageNum && "scale(1.3)",
            }}
            onClick={() => changeCurrProjects(pageNum)}
          >
            {pageNum}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectItems;
