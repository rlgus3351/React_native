const USER_EMAIL ='r';
const USER_PASSWORD ='123';

export const singIn = (email, password) =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            if(email === USER_EMAIL  && password === USER_PASSWORD){
                resolve({email,password});
            }else{
                reject('이메일 혹은 비밀번호가 올바르지 않습니다.');
            }
        }, 1000);
    });
}