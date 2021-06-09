class NetworkError extends Error {
    constructor(message) {
      super(message);
      this.name = 'NetworkError';
    }
}

// TODO: 1
const fetchingUserFromInternet = isOffline => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isOffline) {
                reject(new NetworkError('Gagal mendapatkan data dari internet'), null);
            }else {
                resolve({ name: 'John', age: 18 });
            }
        }, 500);
    })
};

// TODO: 2
const gettingUserName = async() => {
    try{
        const user = await fetchingUserFromInternet(true);
        console.log(user.name);
    } catch(rejectedReason) {
        console.log(rejectedReason.message);
    }
}
gettingUserName();