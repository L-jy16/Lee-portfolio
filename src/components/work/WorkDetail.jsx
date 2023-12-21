import React from 'react'
import { useNavigate } from 'react-router-dom'


const WorkDetail = () => {
    const navigate = useNavigate();

    const backHandle = () => {
        navigate("/")
    }
    return (
        <div className='work_wrap'>
            <div className="bg_img_wrap">
                <div className='bg_img'></div>
            </div>
            <h2>youtube</h2>
            <div className='bottom_info'>
                <div className="work_info left">
                    <h3 className='work_title'>skill</h3>
                    <div className='work_desc'>
                        <span>YOUTUBE API</span>
                        <span>REACT</span>
                        <span>SWIPER</span>
                        <span>SASS</span>
                    </div>
                </div>
                <div className="work_info center">
                    <h3 className='work_title'>skill</h3>
                    <div className='work_desc'>
                        <span>2023.11</span>
                    </div>
                    <div className="work_button" onClick={() => backHandle()}></div>
                </div>
                <div className="work_info right">
                    <h3 className='work_title'>overview</h3>
                    <div className='work_desc'>
                        <span>YOUTUBE API와 REACT를 활용하여 나만의 유튜브 사이트를 만들었습니다.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkDetail
