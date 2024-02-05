const USER_NUMBER = '010';
const USER_BIRTH = '123';

export const singIn =  (number, birth)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(number === USER_NUMBER && birth === USER_BIRTH){
                resolve(number);
            }else{
                reject('이메일 혹은 비밀번호가 올바르지 않습니다.');
            }
        }, 1000);
    });
};