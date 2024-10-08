const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach((element)=>{
 console.log(element)
})



const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]


for(i=0;i<myCoding.length;i++){
    console.log(myCoding[i].languageFileName)
}
myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )