function nestedarray(){
    var teks = [['ab','ac','ad'], // index [0]['ab'] = [0][0], ['ac'] = [0][1] dst
                ['bc','bd','be'], // index [1]
                ['cd','ce','cf']]// index [2]

    console.log(teks.length) // ngecek
    console.log(teks[0][2]) // outputnya ad
}

nestedarray()