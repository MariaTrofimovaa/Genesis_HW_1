import React from "react";
import Loader from "../loader/Loader";
import shortid from "shortid";
import defaultAvatar from "../../images/avatar.png";

import styles from "./Profile.module.css";

const Profile = ({ userData, userFeed }) => {
  const { user, stats } = userData;

  return (
    <div>
      {userData && (
        <div className={styles.profileContainer} key={shortid.generate()}>
          {user.avatarThumb ? (
            <img
              key={shortid.generate()}
              width="150px"
              src={user.avatarMedium}
              alt={user.nickname}
              className={styles.avatar}
            />
          ) : (
            <img src={defaultAvatar} alt="Default avatar" />
          )}
          <div className={styles.userInfo}>
            <h2 className={styles.title}>{user.nickname}</h2>
            <p className={styles.userSignature}>
              <span className={styles.signature}>{user.signature}</span>
            </p>
            <div className={styles.detaisList}>
              <p className={styles.userDetails}>
                {" "}
                <span className={styles.detailTitle}>⬅️ followers: </span>
                <span className={styles.numbers}>{stats.followerCount}</span>
              </p>
              <p className={styles.userDetails}>
                {" "}
                <span className={styles.detailTitle}>➡️ followings: </span>
                <span className={styles.numbers}>{stats.followingCount}</span>
              </p>
              <p className={styles.userDetails}>
                <span className={styles.detailTitle}>🎥 videos: </span>
                <span className={styles.numbers}>{stats.videoCount}</span>
              </p>
              <p className={styles.userDetails}>
                <span className={styles.detailTitle}>❤️ hearts: </span>
                <span className={styles.numbers}>{stats.heart}</span>
              </p>
            </div>
          </div>
        </div>
      )}
      <h2 className={styles.feedTitle}>
        Other posts created by {user.nickname}
      </h2>
      {!userData && (
        <div className={styles.wrap} key={shortid.generate()}>
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Profile;
