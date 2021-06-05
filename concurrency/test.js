class NetworkError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NetworkError';
    }
}

// TODO: 1
const fetchingUserFromInternet = (isOffline) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (isOffline) {
                reject(new NetworkError('Gagal mendapatkan data dari internet'));
            } else {
                resolve({ name: 'John', age: 18 });
            }
        }, 500);
    });
};
const handleSuccess = resolvedValue => {
    console.log(resolvedValue.name);
}
const handleFailure = rejectionReason => {
    console.log(rejectionReason);
}


// TODO: 2
const gettingUserName = () => {
    fetchingUserFromInternet(false)
        .then(handleSuccess)
        .catch(handleFailure);
};

gettingUserName();