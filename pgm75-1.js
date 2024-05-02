weatherData=[
    {district:'Thrissur',weather:32},
    {district:'Kottayam',weather:29},
    {district:'Palakkad',weather:34},
    {district:'Ernakulam',weather:33},
    {district:'Thrissur',weather:29},
    {district:'Kottayam',weather:30},
    {district:'Palakkad',weather:32},
    {district:'Ernakulam',weather:31}
]
//print district with its highest temparature
//output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33

//1)create output object
wd={}
//2)access each items from the weatherData array
for(data of weatherData){ //    {district:'Thrissur',weather:32},     {district:'Kottayam',weather:29},     {district:'Palakkad',weather:34},     {district:'Ernakulam',weather:33},



    district = data.district //Thrissur kottayam Palakkad Ernakulam  Thrissur
    currTemp = data.weather // 32 29 34 33 29 30 32 31

    if(district in wd){
        oddTemp = wd[district] //32 //29 //34 //33

        if(oddTemp>currTemp){
            wd[district]=oddTemp //32 //34 //33
        }
        else{
            wd[district]=currTemp //30
        }
    }
    else{
        wd[district]=currTemp //Thrissur =32 // kottayam=29 //Palakkad =34 //Ernakulam =33
    }
}

console.log(wd);