import React from 'react'
import googleImage from "../../Images/g2.JPG";
import fbImage from "../../Images/f2.JPG";
import lnImage from "../../Images/l2.JPG";
import tweetImage from "../../Images/t2.JPG";
 
const SocialLinks = () => {
  return (
    <div className="bottom-elements">
            <a href="https://www.google.co.in/">
              <img src={googleImage} alt="google" className="image-element" />
            </a>
            <a href="https://www.facebook.com/">
              <img src={fbImage} alt="fb" className="image-element" />
            </a>
            <a href="https://www.linkedin.com/">
              <img src={lnImage} alt="linkedIn" className="image-element" />
            </a>
            <a href="https://twitter.com/tweet?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
              <img src={tweetImage} alt="tweet" className="image-element" />
            </a>
          </div>
  )
}

export default SocialLinks