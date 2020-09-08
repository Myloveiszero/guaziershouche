import React from 'react'
import './CheKuangJianCe.css'

function CheKuangJianCe() {

    return (
        <div className="buycar-carcheck" data-rtab="车况检测">
                    <div className="buycar-carcheck-top">
                        <h3 className="buycar-title">车况检测</h3>
                        <span className="buycar-carcheck-time buycar-item-top-text">2019.08.13 11:28:22 完成深度复检</span>
                    </div>
                    <div className="buycar-carcheck-master">
                        <div className="buycar-carcheck-master__avatar"><img width="100%" height="100%" src={require("../../../assets/img/car1.jpg")} alt="" /></div>
                        <div className="buycar-carcheck-master-info">
                            <span className="buycar-carcheck-master__name buycar-carcheck-block">丁师傅</span>
                            <span className="buycar-carcheck-master__desc buycar-carcheck-block">已完成595辆车的检测工作</span>
                        </div>
                        <button className="buycar-carcheck-master__button">咨询车况</button>
                    </div>
                    <div className="buycar-carcheck-checkresult">
                        <div className="buycar-carcheck-checkresult-text">经检测，该车排除火烧、泡水、
                        调表情况；关键事故部件中未发现变形异常项；无钣金痕迹；无焊接、切割动作。发动机
                        舱内部无拆卸痕迹；核心部件无更换记录；无漏油痕迹。该车覆盖件前保险杠、后保险杠有划痕破损；
                        少量更换，不影响行车安全。车辆外观有轻微划痕刮蹭；详细结果请查看检测报告。</div>
                        <div className="buycar-carcheck-checkresult-link">解密瓜子复检环节，了解检车详情&nbsp;&gt;</div>
                    </div>
                    <div className="buycar-carcheck-detail">
                        <span className="buycar-carcheck-detail-tab">259项检测</span>
                        <span className="buycar-carcheck-detail-tab">27项瑕疵</span>
                    </div>
                    <div className="buycar-carcheck-check-wrap">
                        <span className="buycar-carcheck-check-top">拒收严重结构性损伤车、火烧车、水浸车</span>
                        <span className="buycar-carcheck-check-shigupaicha"><span>事故排查（64项）</span><span className="youxiu">优秀</span></span>
                        <div className="buycar-carcheck-check-items">
                            <span className="buycar-carcheck-check-item"><span>底盘检测（48项）</span><span className="lianghao">良好</span></span>
                            <span className="buycar-carcheck-check-item"><span>轻微碰撞检测（22项）</span><span className="yiban">一般</span></span>
                            <span className="buycar-carcheck-check-item"><span>易损耗部件（26项）</span><span className="lianghao">良好</span></span>
                            <span className="buycar-carcheck-check-item"><span>常用功能检测（95项）</span><span className="lianghao">良好</span></span>
                            <span className="buycar-carcheck-check-item"><span>启动检测（20项）</span><span className="lianghao">良好</span></span>
                            <span className="buycar-carcheck-check-item"><span>外观内饰检测（22项）</span><span className="youxiu">优秀</span></span>
                        </div>
                    </div>
                    <div className="buycar-carcheck-problem-wrap">
                        <div className="buycar-carcheck-problem-pic"><img width="100%" height="100%" src={require("../../../assets/img/car1.jpg")} alt="" /></div>
                        <div className="buycar-carcheck-problem-text">
                            <h3 className="buycar-carcheck-problem-name buycar-title">后防撞梁</h3>
                            <span className="buycar-carcheck-problem-desc">该部件有轻微（小面积）钣金，不影响车辆正常使用，没有安全隐患</span>
                        </div>
                    </div>
                    <span className="buycar-carcheck-report-link">完整检测报告&nbsp;&gt;</span>
                </div>
    )
}

export default CheKuangJianCe;