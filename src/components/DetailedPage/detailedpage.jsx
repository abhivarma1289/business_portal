/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './detailedpage.scss';
import pencil from '../../Assets/images/details-pencil-icon.svg';
import share from '../../Assets/images/details-share-icon.svg';
import download from '../../Assets/images/details-download-icon.svg';

export const Detailedpage = ({data}) => {
  return (
    <>
      <div className="details_container">
        <div className="details_container-head">
          <div className="details_container-head-edit">
            <div className="details_container-head-edit-image">
              <img src={pencil} alt="image" />
            </div>
            <div className="details_container-head-edit-content">Edit</div>
          </div>
          <div className="details_container-head-share">
            <div className="details_container-head-share-image">
              <img src={share} alt="image" />
            </div>
            <div className="details_container-head-share-content">Share</div>
          </div>
          <div className="details_container-head-download">
            <div className="details_container-head-download-image">
              <img src={download} alt="image" />
            </div>
            <div className="details_container-head-download-content">
              Download
            </div>
          </div>
        </div>
        <div className="details_container-head-border"></div>
        <div className="details_container-content">
          <div className="details_container-content-title">
            <p>title</p>
            {data.title}
          </div>
          <div className="details_container-content-label">
            <p>label</p>
            {data.label}
          </div>
          <div className="details_container-content-description">
            <p>Description</p>
            {data.overview}
          </div>
          <div className="details_container-content-release-date">
            <p>Date</p>
            {data.release_date}
          </div>
          <div className="details_container-content-director">
            <p>Directory</p>
            {data.director}
          </div>
        </div>
      </div>
    </>
  );
};
