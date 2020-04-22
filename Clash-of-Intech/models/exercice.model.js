class Exercice {
    static toSqlTable(){
        return `CREATE TABLE ${Exercice.tableName}(
            idExercice INT PRIMARY KEY NOT NULL,
            idTp INT,
            title VARCHAR(100),
            lang VARCHAR(100),
            instruction VARCHAR(255),
            tests VARCHAR(255),
            solution VARCHAR(255),
            difficulty INT,
            score INT,
            creation_date DATE,
            FOREIGN KEY(idTp) REFERENCES tps(idTp)
        );
        ` 
    }
}


/**@type {String}  */
Exercice.tableName = 'exercices'

module.exports = Exercice