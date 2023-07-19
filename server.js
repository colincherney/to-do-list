var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "srv1006.hstgr.io",
  user: "u537574866_colin",
  password: "Crayon77",
  database: "u537574866_to_do_list",
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

connection.query(
  "INSERT INTO user (LastName, FirstName) VALUES ('Cherney', 'Colin')"
);

connection.end();
