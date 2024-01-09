const mydata = {
  name: "尹聖凱",
  status: "待業中",
  title: "Software Engineer",
  description:
    "大家好，我是尹聖凱，目前正在尋找軟體工程師的工作機會\n\n曾在新代科技擔任工程師，有三年C#開發CNC控制器人機畫面及功能模組\n目前正在學習網頁前後端開發及雲端應用部署，希望轉職成一位專業的軟體工程師\n\n此外，我也熱愛爬山和攝影。我會拍攝爬山影片並分享路線和風景，同時撰寫爬山路線文章\n\n這個部落格將持續紀錄分享我的個人簡歷作品，同時分享我的爬山旅遊影片和文章\n\n期望您的關注與支持！",
  picture: "./mypicture.png",
  links: {
    github: "https://github.com/SkyKai1018",
    youtube: "https://www.youtube.com/channel/UCucSpIgoijCkRDb_R2wHLTA",
    hackMD: "https://hackmd.io/@rgnkud",
    linkedin:
      "https://www.linkedin.com/in/%E8%81%96%E5%87%B1-%E5%B0%B9-31329213a/",
    hikingbiji: "https://hiking.biji.co/index.php?q=member&member=555537",
  },
};

function Introduction() {
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <div className="Introduction mb-3">
        <div className="row">
          <div className="Introduction-col col-md-10 offset-md-1">
            <div className="card border-0 mb-3 pt-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-8">
                    <h4 className="card-title">{mydata.name}</h4>
                    <h5 className="card-subtitle mb-3 text-muted">
                      {mydata.title}, {mydata.status}
                    </h5>
                    <p className="card-text">{mydata.description}</p>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex justify-content-center align-self-center mb-4">
                      <img
                        src={mydata.picture}
                        alt="SkyKai"
                        className="custom-image-size"
                        id="introuduction-pic"
                      />
                    </div>
                    <div className="d-flex justify-content-center">
                      <a
                        href={mydata.links.github}
                        role="button"
                        className="pe-3"
                      >
                        <img
                          src="./github-mark.png"
                          alt="github"
                          className="custom-icon [s"
                        />
                      </a>
                      <a href={mydata.links.youtube} role="button">
                        <img
                          src="./youtube-icon.png"
                          alt="yotube"
                          className="custom-icon"
                        />
                      </a>
                      <a href={mydata.links.hackMD} role="button">
                        <img src="" alt="hackMD" className="custom-icon" />
                      </a>
                      <a href={mydata.links.linkedin} role="button">
                        <img src="" alt="linkedin" className="custom-icon" />
                      </a>
                      <a href={mydata.links.hikingbiji} role="button">
                        <img src="" alt="hikingbiji" className="custom-icon" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Introduction;
