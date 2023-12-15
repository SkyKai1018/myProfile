const job = [
    {
        job_title: "產品工程師",
        company_name: "新代科技",
        during_time: "2020.9 ~ 2023.7",
        image: "./synteclogo.jpeg",
        job_description: [
            '自動動平衡功能：成功將動平衡時間縮短50%以上，實現了機台的自動化，消除了人力需求，節省了大量成本',
            '智慧修砂輪功能：與研發團隊和客戶緊密合作，規劃並實現了使用者操作體驗，實現了數據可視化、監控和回放功能，提高了機台的智慧化，解決了老師傅稀缺問題',
            '軸件圖形化功能：將傳統需要手動編寫程式功能，透過圖形對話式編程，達成CAD/CAM 快速轉換，讓任何人可以直觀的快速上手，開發過程中將大項目進行拆分多個子項目，並定義個項目的輸入及輸出需求，加速項目開時間發達50%以上',
            '縮短開機及載入時間：通過優化程式，成功將開機時間縮短了30%，載入畫面時間減少了50%，提高了使用者體驗',
            '自動化腳本測試：編寫自動化腳本簡化了測試流程，使機台能夠遠程運行和收集數據，節省了50%以上的測試和出差時間',
            '客製化功能開發：開發了資料夾配置與操作畫面同步功能，大幅減少了開發人員的學習成本和開發時間',
            '項目時程預估：準確估算項目開發時程，協助團隊合理規劃任務，提高了項目按時完成率',
            '通過提供詳細文件和圖示說明，實現了清晰和有目的性的溝通，減少了合作中的誤解和溝通障礙，提高了項目實施的效率和質量',
            '與其他公司的合作中，明確定義了目標和測試步驟，減少了認知差異和責任歸屬問題',
            '與其他部門參與C# 深入淺出、CleanCode、Refactoring UI、項目管理之美讀書會，提升程式及項目開發管理能力'
        ],
    },
    {
        job_title: '機構工程師',
        company_name: '華創車電',
        during_time: '2018.5 ~ 2018.8',
        image: "./haitec_logo.jpeg",
        job_description: [
            '旋轉壓縮於金屬粉末成形之有限元素分析',
            '組裝現場問題解決。 Ex : 機油泵裝上殼體後無法轉動',
            '跨部門合作，解決NVH震動噪音問題。Ex : 機油泵轉子輪廓不佳，機油泵音頻過大',
            '追蹤產品開發進度，確保零件能如期交貨並合乎設計'
        ]
    },
    {
        job_title: '實習生',
        company_name: '鑫威資訊',
        image: "./simware_log.webp",
        during_time: '2016.7 ~ 2016.8',
        job_description: [
            '協助Dynaform 前處理流程設置及運算',
            '將Dynaform手冊範例錄製成教學影片供使用者學習',
        ]
    }
]

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
                                        <div className='row'>
                                            <div className='col-md-1'>
                                                <img src={job.image} alt="SkyKai" className="card-img-top custom-image-size border border-2" />
                                            </div>
                                            <div className='col-md-8 px-4'>
                                                <h5 className="card-title ">{job.job_title}</h5>
                                                <h6 className="card-subtitle mb-2 text-muted px-1">{job.company_name}</h6>
                                                <h6 className="card-subtitle mb-2 text-muted px-1">{job.during_time}</h6>
                                                <p className="card-text">
                                                    <ul>
                                                        {job.job_description.map((des, index) => (
                                                            <li key={index}>{des}</li>
                                                        ))}
                                                    </ul>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div >
            </div>
        </div >
    )
}

export default WorkExperience;