// 1
/**
    Buatlah sambungan program menggunakan then catch dan juga
    try catch untuk mengecek hari kerja dari kode Asynchronous
    dibawah dan jelaskan penggunaan then catch dan try catch
    dengan memberikan komentar di bawahnya:
 */

const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ["senin", "selasa", "rabu", "kamis", "jum'at"];
            let cek = dataDay.find((item) => {
                return item === day.toLowerCase()
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error("hari ini bukan hari kerja"))
            }
        }, 3000)
    });
}

// then catch
cekHariKerja("Rabu").then((result) => {
    console.log(result);
})
    .catch((err) => {
        console.log(err.message);
    })

// try catch 

async function hasilCek(day) {
    try {
        const f1 = await cekHariKerja(day);
        console.log(f1);
    } catch (err) {
        console.log(err.message);
    }

}

hasilCek("minggu");

