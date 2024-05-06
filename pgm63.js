//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid_data = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]

]
//1. district having Highest +ve case 
console.log(`district having Highest +ve case `);
highest = covid_data.reduce((case1,case2) => case1[2]>case2[2]?case1:case2)
console.log(highest[1]);

console.log(`--------------------------------------------------------`);



//2. district having Highest 1st dose vaccine
console.log(`district having Highest 1st dose vaccine`);
highestvaccine = covid_data.reduce((case1,case2)=>case1[5]>case2[5]?case1:case2)
console.log(highestvaccine[1]);

console.log(`----------------------------------------------------------`);


//3. district having lowest death rate
console.log(`district having lowest death rate`);
lowestdeath=covid_data.reduce((case1,case2)=>case1[3]<case2[3]?case1:case2)
console.log(lowestdeath[1]);

console.log(`----------------------------------------------------------`);


//4. sort data with +ve case in descending order
console.log(`sort data with +ve case in descending order`);
covid_data.sort((a,b)=>b[2]-a[2]).forEach(item=>console.log(item));

console.log(`----------------------------------------------------------`);



//5. is district with +ve cases > 15000
console.log(`is district with +ve cases > 15000`);
positivecases=covid_data.some(cases=>cases[2]>15000)
console.log(positivecases?`yes`:`no`);

console.log(`----------------------------------------------------------`);


//6. sort data with 1st dose vaccine ascending order
console.log(`sort data with 1st dose vaccine ascending order`);
covid_data.sort((a,b)=>a[5]-b[5]).forEach(item=>console.log(item));

console.log(`----------------------------------------------------------`);


//7. Print Thrissur details
console.log(`Print Thrissur details`);
tr=covid_data.find(cases=>cases[1]=='Thrissur')
console.log(tr);

console.log(`----------------------------------------------------------`);


//8. Print total number of positive cases
console.log(`Print total number of positive cases`);
TotalPc=covid_data.map(pc=>pc[2]).reduce((pvc1,pvc2)=>pvc1+pvc2)
console.log(TotalPc);
console.log(`----------------------------------------------------------`);





//9. Print total number of curred cases
console.log(`Print total number of curred cases`);
tcuc=covid_data.map(cc=>cc[4]).reduce((cuc1,cuc2)=>cuc1+cuc2)
console.log(tcuc);
console.log(`----------------------------------------------------------`);





//10. Print curred cases in Idukki
console.log(`Print curred cases in Idukki`);
idukki=covid_data.find(dis=>dis[1]=='Idukki')
console.log(idukki[4]);
console.log(`----------------------------------------------------------`);


