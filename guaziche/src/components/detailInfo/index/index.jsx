import React from 'react';
import Header from '../../buycars/header/Header'
import ImgShow from '../imgShow/ImgShow'
import CarBaseInfor from '../carBaseInfor/CarBaseInfor'
import BlankBox from '../../../common/kongBaiHe/BlankBox'
import ChuXiao from '../chuXiao/ChuXiao'
import DangAn from '../dangAn/DangAn'
import ShouHou from '../shouHou/ShouHou'
import GouCheFuWu from '../gouCheFuWu/GouCheFuWu'
import XuanCheZhiNan from '../xuanGouZhiNan/XuanGouZhiNan'
import CheKuangJianCe from '../cheKuangJianCe/CheKuangJianChe'
import BuyCarService from '../buyCarService/BuyCarService'
import './index.css'

function DetailInformation() {
    return (
        <section className="detail-page">
            <Header />
            <div className="main-layout">
                <ImgShow />
                <CarBaseInfor />
                <BlankBox />
                <ChuXiao />
                <BlankBox />
                <DangAn />
                <BlankBox />
                <ShouHou />
                <BlankBox />
                <GouCheFuWu />
                <BlankBox />
                <XuanCheZhiNan />
                <BlankBox />
                <CheKuangJianCe />
                <BlankBox />
                <BuyCarService />
            </div>
        </section>
    )
}

export default DetailInformation;
