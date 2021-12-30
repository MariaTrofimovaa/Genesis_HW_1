import React from "react";
import { useSelector } from "react-redux";
import { getTrendingSelector } from "../../redux/trending/trending.selectors";

import styles from "./TrendingFeedList.module.css";
import TrendingListItem from "./trendingListItem/TrendingListItem";

const TrendingFeedList = () => {
  const trendings = useSelector(getTrendingSelector);

  return (
    <>
      <ul className={styles.trendingList}>
        {trendings.map(({ id, videoUrl, authorMeta }) => (
          <TrendingListItem
            id
            key={id}
            video={videoUrl}
            text={text}
            avatar={authorMeta.avatar}
            name={authorMeta.name}
            nickName={authorMeta.nickName}
            hashTags={hashtags}
            comments={commentCount}
            likes={authorMeta.heart}
          />
        ))}
      </ul>
    </>
  );
};

export default TrendingFeedList;
