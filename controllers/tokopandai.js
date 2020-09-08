const _ = require('lodash');
const { has } = require('lodash');
// 1:24:51 
const tokopandai = (app) =>{
    let _products = [];
    let level = '';
    
    // soal nomor 1
    app.get('/api/soal1/:id',  (req, res) =>{
        let id = req.params.id;
        const midPoint = Math.floor((id * 2-1)/2);
        for (let row = 0; row < id; row++) {          
            for (col = 0; col < (id * 2-1); col++){
                if(midPoint - row <= col && midPoint + row >= col){
                    if( col % 2 === 0 ){
                        level += "O"; 
                    }else{
                        level += "X";
                    }
                }else{
                    level += "";
                }
            }
            console.log(level)
        }       
        res.json({
            "info" : level
        })
    })

    app.get('/api/soal2/', async (req, res) =>{

        let daftar = req.body.daftar;
        //console.log(test);
        //let daftar = [['andry', 'aaa', 'bbb', 'ccc', 'ddd'], 4];
        //let daftar = [['andry', 'aaa', 'bbb', 'ccc', 'ddd', 'eee'], 2];
        let siswa = daftar[0];
        let bangku = daftar[1];
        let hasil = [];
        let tmpArray =[];
        let tmp = 0;

        for(let i = 0; i < siswa.length; i++){
            tmpArray.push(siswa[i]);
            if(tmpArray.length === bangku){
                hasil.push(tmpArray);
                tmpArray = [];
            }
            if(i === siswa.length - 1 && tmpArray.length != 0 ){
                for(let j = tmpArray.length ; j < bangku; j++){
                    tmpArray.push(null);
                }
                hasil.push(tmpArray);
            }
        }
        res.send(hasil);
    })


    app.get('/api/soal3/', (req, res) =>{

        let kata  = req.body.kata;
        let kataKecil  = kata.toLowerCase();
        let karatkter = '@#$%^&*';
        let hasil = '';
        for(i = 0; i < kata.length; i++){
            if(kataKecil[i] === 'a' || kataKecil[i] === 'i' || kataKecil[i] === 'u' || kataKecil[i] === 'e' || kataKecil[i] === 'o'){
                hasil += karatkter.charAt(Math.floor(Math.random() * karatkter.length))
            }else{
                hasil+= kata[i]
            }
        }
        res.json({
            "soal" : hasil
        })
    })

    app.get('/api/soal4/', (req, res) =>{

        let soal = 'javascript';
        let hasil = '';
        let tmphasil = '';

        for(let i = soal.length -1 ; i > -1 ; i--){
            // if( soal[i] === 2 || soal[i] === 4 || soal[i] === 6 || soal[i] === 8 ){
            //     hasil = hasil + soal[1]
            // }else{
                hasil =  soal[i] + hasil ;
            //}
           
            console.log(i +" " + hasil);
        }
        res.json({
            "hasil" : "sukses"
        });
    })

    app.get('/api/soal5/', (req, res) =>{
        const rute  =['A', 'B', 'C', 'D','E', 'F'] ;
        let hasil =[];
        let kasus = req.body.list;
        let nama ='';
        let start ='';
        let finish='';
        let jarak = 0;
        for(let i = 0; i < kasus.length ; i++){
            nama = kasus[i][0];
            start = kasus[i][1];
            finish = kasus[i][2];
            jarak = (rute.indexOf(finish.toUpperCase()) - rute.indexOf(start.toUpperCase()))
            bayar = 2000 * jarak;
            if(bayar < 0){
                bayar = Math.abs(bayar);
            }
            hasil.push({
                "Penumpang " : nama,
                "Naikdari" : start,
                "Tujuan" : finish,
                "bayar" : bayar
            })    
        }
        res.send(hasil)
    })

    app.get('/api/soal6/', (req, res) =>{
        const soalx  = 
        [
            [
                [4, 5, 6],
                [9, 1, 2, 10],
                [9, 4, 3]
            ],
            [
                [4, 14, 31],
                [9, 10, 18, 12, 20],
                [1, 4, 90]
            ],
            [
                [2, 5, 10],
                [3, 4, 5],
                [2, 4, 5, 10]
            ]
        ];

        const soal = 
        [
            [
                [20, 10],
                [15],
                [1, 1]
            ],
            [
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                [2],
                [9, 11]
            ],
            [
                [3, 5, 1],
                [1, 5, 3],
                [5]
            ],
            [
                [2]
            ]
        ];
        let hasil = 0;

        for(let i = 0; i < soal.length ; i++){
            for(let j = 0; j < soal[i].length; j++){
                for(let k = 0; k < soal[i][j].length; k++){
                    hasil = hasil + soal[i][j][k];
                }
            }
        }
        console.log(hasil);
        res.json({
            "hasil " : hasil
        })
    })


}


module.exports = tokopandai
