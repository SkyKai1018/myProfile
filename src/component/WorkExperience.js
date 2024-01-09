const job = [
  {
    job_title: "產品工程師",
    company_name: "新代科技",
    during_time: "2020.9 ~ 2023.7",
    image: "./synteclogo.jpeg",
    job_description: [
      "[工作內容]",
      "產品開發 : 開發/維護PC based控制器圖形對話式軟體(C#)，包含人機介面、元件及可共用模組功能",
      "產品探索 : 了解使用者需求，分析與搜集市場情報設計出軟體、操作規格書，解決使用者需求",
      "機台整合 : 整合機台外部量測設備，通過業務邏輯分析，達到機台完全自動化",
      "項目管理 : 採用敏捷式開發，任務共同評分，每次衝刺計畫時確認衝刺目標，使用trello進行管理追蹤",
      "跨單位合作 : 組織研發、應用、第三方廠商，透過明確目標與圖示說明，拉齊雙方認知，提高會議效率和品質",
      "功能測試 : 功能測試計畫與執行，包含撰寫自動化腳本、分析測試結果、產出測試報告等",
      "主動分享 : 公司內部分享團隊內近期開發的功能與遇到的問題，組內會議中分享提升工作效率的工具(notion、chatgpt)",
      "學習成長 : 提升程式及項目開發管理能力，包括C#、Clean Code、Refactoring UI、項目管理等相關知識",
      "   ",
      "[項目成就]",
      "研發批次處理流程，自動化搬運壓縮檔案重複操作，節省90%時間。(batch)",
      "優化程式，縮短開機時間30%、加載時間50%，改善用戶體驗。(C#)",
      "開發自動化測試腳本，節省超過50%的測試和出差時間。(macro 腳本)",
      "獨立開發大型專案，整合研發、使用者、教授及第三方廠商開發出自動動平衡功能，並成功在TIMTOS 展出 (軟體開發、整合角色)",
      "開發可擴充的操作方式，降低研發及操作人員後續學習成本和開發時間",
      "主導大型專案的開發時程，協助將任務拆分成獨立任務，加速團隊開發",
    ],
  },
  {
    job_title: "機構工程師",
    company_name: "華創車電",
    during_time: "2018.5 ~ 2018.8",
    image: "./haitec_logo.jpeg",
    job_description: [
      "設計並開發PHEV動力混合引擎中的機油泵",
      "解決現場機構組裝問題。 例如 : 機油泵裝上殼體後無法轉動",
      "分析並解決震動噪音問題。例如 : 機油泵轉子輪廓不佳，機油泵音頻過大",
      "追蹤產品開發進度，確保零件能如期交貨並合乎設計",
    ],
  },
  {
    job_title: "實習生",
    company_name: "鑫威資訊",
    image: "./simware_log.webp",
    during_time: "2016.7 ~ 2016.8",
    job_description: [
      "設置Dynaform 前處理流程及運算",
      "錄製Dynaform手冊範例的教學影片供使用者學習",
    ],
  },
];

function WorkExperience() {
  return (
    <div className="WorkExperience mb-3">
      <div className="row">
        <div className="WorkExperience-col col-md-10 offset-md-1 px-4 py-4">
          <h2 className="mb-3">工作經驗</h2>
          <div className="row">
            {job.map((job, index) => (
              <div className="col-md-12">
                <div className="card border-1 mb-3 workexperience-listcard shadow">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-1">
                        <img
                          src={job.image}
                          alt="SkyKai"
                          className="card-img-top custom-image-size border border-2"
                        />
                      </div>
                      <div className="col-md-10 px-4">
                        <h5 className="card-title ">{job.job_title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted px-1">
                          {job.company_name}
                        </h6>
                        <h6 className="card-subtitle mb-2 text-muted px-1">
                          {job.during_time}
                        </h6>
                        <p className="card-text">
                          <ul>
                            {job.job_description.map((des, index) => {
                              // 检查描述是否以空格或 "[" 开头
                              if (des.startsWith(" ") || des.startsWith("[")) {
                                return (
                                  <p key={index}>
                                    <strong>{des}</strong>
                                  </p>
                                );
                              } else {
                                return <li key={index}>{des}</li>;
                              }
                            })}
                          </ul>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
