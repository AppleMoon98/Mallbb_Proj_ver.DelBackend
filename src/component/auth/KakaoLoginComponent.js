import KakaoLogin from "react-kakao-login"
import { kakaoLoginPost } from "../../api/memberApi"
import useCustomLogin from "../hooks/useCustomLogin"

const KakaoLoginComponent = () => {
    const { loginToPath } = useCustomLogin()
    // 카카오 로그인 컴포넌트 프론트 구현
    // const kakaoClientId = 'ClientId'    // js key
    // const kakaoOnSuccess = async (data) => {
    //     console.log(data)
    //     const email = data.profile.kakao_account.email
    //     const nickname = data.profile.properties.nickname
    //     const postData = { email, nickname }
    //     await kakaoLoginPost(postData)
    //     loginToPath("/", true, true)
    //     window.location.reload()
    // }

    const kakaoOnFailure = (err) => {
        console.log(err)
    }

    return (
        // <KakaoLogin style={{ width: '198px',height:'40px' , backgroundColor: '#FEE500', border: '1px solid #d9d9d9', 
        //         borderRadius: '4px'}}  token={kakaoClientId} onSuccess={kakaoOnSuccess} onFail={kakaoOnFailure} />
        <div>카카오 로그인 임시 정지</div>
    )
}

export default KakaoLoginComponent