const job = [
    {
        job_title: "產品工程師",
        company_name: "新代科技",
        during_time: "2020.9 ~ 2023.7",
        image: "/synteclogo.jpeg",
        job_description: [
            '新產品新市場需求瞭解及規格訂定',
            '新產品開發、 維護、推展計劃擬定',
            '機電整合與人機介面設計',
            '軟體開發設計',
        ],
    },
    {
        job_title: '機構工程師',
        company_name: '華創車電',
        during_time: '2018.5 ~ 2018.8',
        image: "/haitec_logo.jpeg",
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
        image: "/simware_log.webp",
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