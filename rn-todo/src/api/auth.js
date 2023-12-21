const USER_EMAIL = 'rlgus3351@naver.com';
const USER_PASSWORD = '123';

export const singIn =  (email, password)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(eamil === USER_EMAIL && password === USER_PASSWORD){
                resolve(email);
            }else{
                reject('이메일 혹은 비밀번호가 올바르지 않습니다.');
            }
        }, 1000);
    });
};