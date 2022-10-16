import React from "react"
import style from "./Stats.module.scss"
import useStats from "@/utils/useStats"



const Stats = url => {
  const { stats } = useStats(url.url)
  if (!stats) return <p>Loading...</p>

  return (
    <>
      <h2 className={style.h2}>国別の感染状況</h2>
      <>
        <div className={style.container}>
          <div className={style.container2}>
            <div className={style.main}>
              <p>全感染者数</p>
              <p>{stats.confirmed.value} </p>
            </div>
            <div className={style.main}>
              <p>今日の感染者数</p>
              <p>{stats.recovered.value}</p>
            </div>
            <div className={style.main}>
              <p>死亡者数</p>
              <p>{stats.deaths.value}</p>
            </div>
          </div>
        </div>
      </>
      <h2 className={style.h3}>全国の感染状況</h2>
    </>
  );
}

export default Stats
