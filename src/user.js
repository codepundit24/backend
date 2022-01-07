const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
    host : "localhost",
    user : "root",
    password: "cdac",
    database: "project1",
};

async function conCheck(){
    const con = mysql.createConnection(dbinfo);
    await con.connectAysnc();
    console.log("connected");
    await con.endAsync();
};

const addUser = async (user) => {
    const con = mysql.createConnection(dbinfo);
    await con.connectAysnc();

    let sql = `insert into user(applicationName, studentName, studentId ) values (?,?,?)`;
    con.queryAsync(sql , [user.applicationName, user.studentName, user.studentId ]);
    
    await con.endAsync();
}
const getUser = async (user) => {
    const con = mysql.createConnection(dbinfo);
    await con.connectAysnc();

    let sql = `select * from user`;
    const list = await con.queryAsync(sql , [] );
    
    await con.endAsync();
    return list;
}
conCheck();

module.exports= { addUser, getUser};