// Tugas 17 Javascript

// Ubahlah kalimat berikut menjadi lower case dan upper case :
// Saya beLajar bahaSa peMrograman deNgan khUsuk. (ubah ke lower case dan upper case)
// Allen SedAng MemAncinG IkaN di SuNgai, DIA MEndapat IkAN GaBuS 3 Ekor dan LanGsuNg Dijual. (ubah ke lower case dan upper case)

// Tentukan Kode ASCII enam index dari awal dari kalimat berikut :
// Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

function tugas17(){
    var uclc1 = "Saya beLajar bahaSa peMrograman deNgan khUsuk.";
    var uclc2 = "Allen SedAng MemAncinG IkaN di SuNgai, DIA MEndapat IkAN GaBuS 3 Ekor dan LanGsuNg Dijual."
    var kata = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

    var asci = kata.substr(0,6)
    console.log(uclc1.toUpperCase())
    console.log(uclc1.toLowerCase())

    console.log(uclc2.toUpperCase())
    console.log(uclc2.toLowerCase())

    console.log(asci.charCodeAt(0),'-',asci.charCodeAt(1),'-',asci.charCodeAt(2),'-',asci.charCodeAt(3),'-',asci.charCodeAt(4),'-',asci.charCodeAt(5))
}

tugas17()