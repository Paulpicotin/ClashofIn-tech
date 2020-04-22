class Tp {
    static toSqlTable(){
        return `CREATE TABLE ${Tp.tableName}(
            idTp INT PRIMARY KEY NOT NULL,
            tp VARCHAR(100),
            idModule INT,
            FOREIGN KEY(idModule) REFERENCES modules(idModule)
        );
        ` 
    }
}


/**@type {String}  */
Tp.tableName = 'tps'

module.exports = Tp