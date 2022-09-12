// 3
/*
    Buatlah 2 program bebas dengan menggunakan promise seperti soal nomor 1
*/

// 3a : program mencari nama
const searchName = (key) => {
    return new Promise((resolve, reject) => {
        const name = [
            "Abigail", "Alexandra", "Alison",
            "Amanda", "Angela", "Bella",
            "Carol", "Caroline", "Carolyn",
            "Deirdre", "Diana", "Elizabeth",
            "Ella", "Faith", "Olivia", "Penelope"
        ];

        let outputName = [];

        // push nama yang mengandung unsur keyword
        name.forEach((value) => {
            if (value.toLowerCase().search(key.toLowerCase()) !== -1) {
                outputName.push(value)
            }
        });


        if (outputName.length !== 0) {
            resolve(outputName);
        } else {
            reject(new Error("tidak ada data yang ditemukan"))
        }
    }, 3000);
};

searchName("an").then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err.message);
})

// 3b : cek palindrom


/** NOTES */
// resolve dan reject bisa digunakan lebih di satu kondisi dalam satu fungsi
const cekPalindrom = (teks) => {
    let result;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof teks !== "string") {
                return reject(new Error("bukan string"));
            }

            let splitTeks = teks.split("");

            if (splitTeks.length <= 1) {
                return reject(new Error("mohon untuk menginput huruf lebih dari satu"));
            } else {
                for (let i = 0; i < Math.floor(splitTeks.length / 2); i++) {
                    if (splitTeks[i] !== splitTeks[splitTeks.length - (i + 1)]) {
                        result = false;
                    } else {
                        result = true;
                    }
                }

            }

            if (result) {
                resolve(new String("palindrom"));
            } else {
                reject(new Error("no palindrom"))
            }
        }, 2000)

    })
}

cekPalindrom(12).then((result) => {
    console.log(result.valueOf());
}).catch((err) => {
    console.log(err.message);
})