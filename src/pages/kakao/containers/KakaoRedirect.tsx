import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Rest_api_key = import.meta.env.VITE_REST_API_KEY; 
const redirect_uri = import.meta.env.VITE_REDIRECT_URI;
const encoded_redirect_uri = encodeURIComponent(redirect_uri); 
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${encoded_redirect_uri}&response_type=code`;

const getToken = async (code) => {
  const grant_type = 'authorization_code';

  try {
    const response = await axios.post(
      'https://kauth.kakao.com/oauth/token',
      new URLSearchParams({
        grant_type,
        client_id: Rest_api_key, 
        redirect_uri: redirect_uri, 
        code,
      }).toString(),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', 
        },
      }
    );

    const token = response.data.access_token;

    const getKaKaoUserData = async (token) => {
      const kakaoUser = await axios.get('https://kapi.kakao.com/v2/user/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return kakaoUser.data;
    };

    const userData = await getKaKaoUserData(token);

    const transformedUserData = {
      code: "200",
      message: "성공 입니다.",
      data: {
        id: userData.id,
        name: userData.properties.nickname || null,
        studentId: userData.studentId || null,
        isFirst: true,
        accessToken: token,
        refreshToken: response.data.refresh_token,
        profileImage: userData.properties.profile_image || null,
        createdAt: null
      },
      isSuccess: true
    };

    localStorage.setItem('transformedUserData', JSON.stringify(transformedUserData));

    return transformedUserData;
  } catch (error) {
    console.error('Error fetching token:', error.response ? error.response.data : error.message);
    throw error;  
  }
};

const KakaoRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');

    if (code) {
      getToken(code)
        .then(transformedUserData => {
          console.log('Transformed User Data:', transformedUserData);
          navigate('/register/onboarding');
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    }
  }, []);

  return (
    <div>Loading...</div> 
  );
};

export default KakaoRedirect;
