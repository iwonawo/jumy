import React from 'react'

//Styles
import './ProfileCard.scss'

function ProfileCard(props) {
  return (
    <div className="ProfileCard">
      <div className="artist flex flex--sb">
        <div className="flex">
          <div className="avatar">
            <div className="img-wrapper">
              <img
                src={process.env.PUBLIC_URL + '/images/artist.png'}
                alt="avatar"
              />
            </div>
            <img
              src={process.env.PUBLIC_URL + '/images/VerifiedIcon.svg'}
              alt="checked"
              className="checked"
            />
          </div>
          <div className="name">
            <p>Jumaker</p>
            <span className="text-light">@Jumaker</span>
          </div>
        </div>
        <p className="about about--profilecard">
          Jumaker is a contemporary digital Artist with a unique signature and
          very authentic genr...
        </p>
      </div>
      <div className="art flex flex--sb">
        <div className="art-img-wrapper">
          <img
            src={process.env.PUBLIC_URL + '/images/jumy-art-1.png'}
            alt="art"
          />
        </div>
        <div className="art-img-wrapper">
          <img
            src={process.env.PUBLIC_URL + '/images/jumy-big.png'}
            alt="art"
          />
        </div>
        <div className="art-img-wrapper">
          <img
            src={process.env.PUBLIC_URL + '/images/jumy-art-3.png'}
            alt="art"
          />
        </div>
        <div className="art-img-wrapper">
          <img
            src={process.env.PUBLIC_URL + '/images/jumy-art-4.png'}
            alt="art"
          />
        </div>
      </div>
      <div className="contact flex flex--sb">
        <div className="flex">
          <div className="social flex">
            <img
              src={process.env.PUBLIC_URL + '/images/InstaIcon.svg'}
              alt="instagram"
            />
            <span>@Jumaker</span>
          </div>
          <div className="social flex">
            <img
              src={process.env.PUBLIC_URL + '/images/TwitterIcon.svg'}
              alt="twitter"
            />
            <span>@Jumaker</span>
          </div>
        </div>
        <div className="flex">
          <div className="btn">
            <span className="btn-circle"></span>
            <img
              src={process.env.PUBLIC_URL + '/images/plusIcon.svg'}
              alt="plus"
              className="btn-icon"
            />
            <button href="/#" className="button">
              Follow
            </button>
          </div>
          <span className="arrow">
            <img
              src={process.env.PUBLIC_URL + '/images/arrowIconGray.svg'}
              alt="arrow"
            />
          </span>
        </div>
      </div>
      <hr className="line" />
    </div>
  )
}

export default ProfileCard
