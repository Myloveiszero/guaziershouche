import React from 'react';
import './BuyCarService.css'

function BuyCarService() {

    return (
        <div className="buycar-service" data-rtab="服务保障">
                    <div className="buycar-service-top">
                        <h3 className="buycar-title">服务保障</h3>
                        <span className="buycar-carcheck-time buycar-item-top-text">服务费不超过车价9%，欢迎联系咨询</span>
                    </div>
                    <div className="buycar-service-iconwrap">
                        <div className="buycar-service-iconitem">
                            <svg className="buycar-service-icon" aria-hidden="true">
                                <use xlinkHref="#icon-rili"></use>
                            </svg>
                            <span className="buycar-service-icontext buycar-service-active">7天无理由退车</span>
                        </div>
                        <div className="buycar-service-iconitem">
                            <svg className="buycar-service-icon" aria-hidden="true">
                                <use xlinkHref="#icon-xiuchefuwu"></use>
                            </svg>
                            <span className="buycar-service-icontext">30天全面保修</span>
                        </div>
                        <div className="buycar-service-iconitem">
                            <svg className="buycar-service-icon" aria-hidden="true">
                                <use xlinkHref="#icon-yusan"></use>
                            </svg>
                            <span className="buycar-service-icontext">1年或2万公里保障</span>
                        </div>
                    </div>
                    <div className="buycar-service-detailwrap">
                        <div className="buycar-service-detailitem">
                            <span className="buycar-service-detailitem-top"><span className="font-weight">7天无理由退车</span><span>&gt;</span></span>
                            <span className="buycar-service-detailitem-desc">当您在瓜子平台购车后，满足7天无理由
                            退车适用条件的均可在7天内申请退车</span>
                        </div>
                        <div className="buycar-service-detailitem">
                            <span className="buycar-service-detailitem-top"><span className="font-weight">30天车况保修</span><span>&gt;</span></span>
                            <span className="buycar-service-detailitem-desc">交易完成后30天内，发现任何符合30天保修条件下的车况问题，即可享受专业的保修服务</span>
                        </div>
                        <div className="buycar-service-detailitem">
                            <span className="buycar-service-detailitem-top"><span className="font-weight">售后保障（支持购买升级）</span><span>&gt;</span></span>
                            <span className="buycar-service-detailitem-desc">完成交易后可享受1年或2万公里全车2大系统售后保障，购买服务升级套餐，可将2大系统保障升级至16大系统的增值保障（具体延保保障范围请以交易合同的约定为准）
                            </span>
                            <div className="buycar-service-baoxiu">
                                <div >报修流程</div>
                                <span className="buycar-service-baoxiu-step">电话申诉&nbsp;&gt;&nbsp;费用确定&nbsp;&gt;&nbsp;维修服务</span>
                            </div>
                            <span></span>
                        </div>
                    </div>
                    <div className="buycar-carcheck-master padding">
                        <div className="buycar-carcheck-master__avatar"><img width="100%" height="100%" src={require("../../../assets/img/car1.jpg")} alt="" /></div>
                        <div className="buycar-carcheck-master-info">
                            <span className="buycar-carcheck-master__name buycar-carcheck-block">专属顾问</span>
                            <span className="buycar-carcheck-master__desc buycar-carcheck-block">为您解答疑惑</span>
                        </div>
                        <button className="buycar-carcheck-master__button">咨询问题</button>
                    </div>
                    <div className="buycar-service-question-wrap">
                        <span>车况真实吗</span>
                        <span>可否分期</span>
                        <span>牌照能过户吗</span>
                        <span>车辆怎么过户</span>
                        <span>保险怎么办</span>
                        <span>交易注意事项</span>
                    </div>
                </div>
    )
}

export default BuyCarService;