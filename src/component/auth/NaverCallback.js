// import { useEffect } from "react";
// import { API_SERVER_HOST, moveAxios } from "../../api/config"
// import useCustomLogin from "../hooks/useCustomLogin";

const NaverCallback = () => {
    // const {loginToPath} = useCustomLogin()

    // useEffect(() => {
    //     // 네이버 SDK 동적 로드
    //     const script = document.createElement("script");
    //     script.src =
    //         "https://static.nid.naver.com/js/naverLogin_implicit-1.0.3.js";
    //     script.type = "text/javascript";
    //     script.charset = "utf-8";
    //     document.body.appendChild(script);

    //     script.onload = async () => {
    //         const naver_id_login = new window.naver_id_login(
    //             "Client ID", // Client ID
    //             `${API_SERVER_HOST}/member/auth/naver` // Redirect URI
    //         );

    //         // 토큰 확인
    //         console.log("access_token:", naver_id_login.oauthParams.access_token);
    //         const token = naver_id_login?.oauthParams?.access_token;
    //         console.log(token)
    //         await moveAxios.post(
    //             `${API_SERVER_HOST}/member/auth/naver`,
    //             {},
    //             {
    //                 headers: { Authorization: `Bearer ${token}` },
    //                 withCredentials: true,
    //             }
    //         );
    //         loginToPath("/", true, true)
    //         window.location.reload()
    //     };  
    // }, []);

    return (
        <div>
            <h2>해당 기능은 정지되어 있습니다. NaverCallback.js 참고</h2>
        </div>
    );
};

export default NaverCallback