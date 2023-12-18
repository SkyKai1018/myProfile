const job = [
    {
        job_title: "產品工程師",
        company_name: "新代科技",
        during_time: "2020.9 ~ 2023.7",
        image: "./synteclogo.jpeg",
        job_description: [
            '成功將動平衡時間縮短50%實現機台自動化縮減動平衡時間的50%以上，減少人力需求及成本',
            '開發自動化腳本測試，節省了50%以上的測試和出差時間',
            '設計並實現機台數據可視化、監控和回放的功能，提高了機台的智慧化',
            '優化程式，將開機時間縮短30%，載入畫面時間減少50%，提高了使用者體驗',
            '實現了資料夾配置與操作畫面的同步功能，減少了開發人員的學習成本和開發時間',
            '準確估算項目開發時程，提高了項目時限內完成率，協助團隊合理規劃任務',
            '撰寫詳細的文件和圖示說明，會議前拉齊雙方認知，提高會議效率和品質',
            '通過提供詳細文件和圖示說明，實現了清晰和有目的性的溝通，減少了合作中的誤解和溝通障礙，提高了項目實施的效率和質量',
            '明確定義目標和測試步驟，減少了認知差異和責任歸屬問題',
            '參與了讀書會，提升了程式及項目開發管理能力，包括C#、Clean Code、Refactoring UI、項目管理等相關知識'
        ],
    },
    {
        job_title: '機構工程師',
        company_name: '華創車電',
        during_time: '2018.5 ~ 2018.8',
        image: "./haitec_logo.jpeg",
        job_description: [
            '設計並開發PHEV動力混合引擎中的機油泵',
            '解決現場機構組裝問題。 例如 : 機油泵裝上殼體後無法轉動',
            '分析並解決震動噪音問題。例如 : 機油泵轉子輪廓不佳，機油泵音頻過大',
            '追蹤產品開發進度，確保零件能如期交貨並合乎設計'
        ]
    },
    {
        job_title: '實習生',
        company_name: '鑫威資訊',
        image: "./simware_log.webp",
        during_time: '2016.7 ~ 2016.8',
        job_description: [
            '設置Dynaform 前處理流程及運算',
            '錄製Dynaform手冊範例的教學影片供使用者學習',
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