const fs = require("fs")
const allData = require("./allData")

  const addPerson = (id , fname , lname , city , age  ) => {
       const allData = loadData()
        const duplicatedData = allData.filter ((ob) => {
            return ob.id === id
        })
        if (duplicatedData.length == 0) {
        allData.push ({
            id  ,
            fname  ,
            lname,
            city  ,
            age  
        })
        saveAllData(allData)
    } else {
        console.log("reoorr ")
    }
  }
  const loadData = () => {
    try {
        const dataJson = fs.readFileSync ("data.json").toString()
        return JSON.parse (dataJson)
    } catch {
            return []
    }
}
  const saveAllData = (allData) => {
      const saveAllDataJson = JSON.stringify(allData) 
      fs.writeFileSync("data.json" , saveAllDataJson)
}
 const deleteData = (id) => {
        const allData = loadData()
        const dataToKeep = allData.filter ((ob) => {
             return ob.id !== id 
        })
         saveAllData(dataToKeep)
 }
          const readData = (id) => {
          const allData = loadData()
            const itm = allData.find((ob) => {
                 return ob.id == id 
            })
            console.log(itm)
        }
    const listData = () => {
     const allData = loadData()
        allData.forEach ((ob) => {
            console.log(ob.fname , ob.lname)
        })
    }
     






module.exports = {
    addPerson,
    deleteData, 
    readData,
    listData
}




