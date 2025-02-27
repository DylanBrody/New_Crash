import React from "react";
// import { useCrashContext } from "../Main/context";
// import { useEffect, useState } from "react";
import AllData from "./all-data";
import MyBets from "./my-bets";
import TopHistory from "./top-history";
import Context, { BettedUserType, UserType } from "../../context";


export default function BetsUsers() {
  const { previousHand, bettedUsers, scrollRef } = React.useContext(Context)
  // const [state, , , getMyBets] = useCrashContext();

  const [headerType, setHeaderType] = React.useState("my");
  const [allData, setAllData] = React.useState<UserType[] | BettedUserType[]>([]);
  const [pre, setPre] = React.useState(false);

  const header = [
    // { type: "all", value: "All Bets" },
    { type: "my", value: "My Bets", onClick: "myBet" },
    // { type: "top", value: "Top" }
  ]

  const getData = (e) => {
    // if (e === "myBet")
      // getMyBets();
  }

  React.useEffect(() => {
    if (pre) {
      setAllData(previousHand);
    } else {
      if (!!bettedUsers.length) setAllData(bettedUsers);
    }
  }, [pre, bettedUsers, previousHand])

  return (
    <div className="info-board">
      <div className="bets-block">
        <div className="bet-block-nav">
          <div style={{ height: "24px" }}>
            <div className="navigation-switcher">
              {header.map((item, index) => (
                <button key={index} className={`tab ${headerType === item.type ? "click" : ""}`} onClick={() => { setHeaderType(item.type); item.onClick && getData(item.onClick) }}>{item.value}</button>
              ))}
            </div>
          </div>
          <div className="historyClose" onClick={()=>{scrollRef.current.scrollTop = 0}}>&#10005;</div>
        </div>
        <div className="data-list">
          {headerType === "all" ?
            <AllData setPre={setPre} pre={pre} allData={allData} /> : headerType === "my" ?
              <MyBets /> :
              <TopHistory />
          }
        </div>
      </div>


    </div>
  );
}
