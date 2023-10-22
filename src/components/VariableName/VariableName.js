import React from 'react'
import logo from '../../images/logo-icon.png'
import { useSelector } from 'react-redux';
import { getCookie } from 'components/Cookie/Cookies';


const VariableName = ({inputString, variableData}) => {
    const profileImage = useSelector((state) => state.user.profileImage);

return (
    <div>
        <div className='ml-[-200px]'>
        {/* 내가 요청한 변수 */}
            <div className='flex h-auto items-center p-[25px]'>
                <img className='w-[64px] h-[64px] ml-[360px] rounded-[10px]' src={getCookie('profileImage')} alt="Img" />
                <div className='ml-[25px]'>{inputString}</div>
            </div>

        {/* 서버에서 가지고 온 내용 */}
            <div className='bg-[#EDEDED] h-auto pl-[200px] p-[25px] '>
                <div className='flex items-center'>
                    <img className='w-[68px] h-[68px] ml-[180px]' src={logo} alt="logo" />
                    <div className='ml-[25px] '> 
                    {
                    variableData.split('\n').map((data, index)=>{ // variableData에 응답 결과 저장 및 \n 을 <br />태그로 다시 렌더링
                        return(
                            <div>
                                {data} <br />
                            </div>
                            )
                        })
                    }
                    </div>
                </div>
                </div>
            </div>
        </div>
)
}

export default VariableName