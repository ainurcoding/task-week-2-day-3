// 2
/**
    
    Buat program menggunakan callback function untuk melanjutkan
    dan menampilkan semua bulan menggunakan method map

 */


const getMonth = (cb) => {
    setTimeout(() => {
        let err = false;
        let month = ["January", "February", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "september", "Oktober", "November", "Desember"];


        if (!err) {
            cb(null, month);
        } else {
            cb(new Error("Sorry data Not found"), []);
        }
    }, 4000)
}

let showMonth = (error, data) => {
    let month;
    if (error) {
        console.log(error.message)
    } else {
        month = data.map((item) => {
            return item;
        });
    }
    console.log(month);
}

getMonth(showMonth)


