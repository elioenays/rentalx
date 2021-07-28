import { hash } from "bcrypt";
import { v4 as uuidV4 } from "uuid";

import createConnection from "../index";

async function create() {
  const connection = await createConnection("localhost");

  const id = uuidV4();
  const password = await hash("admin", 8);

  await connection.query(
    `INSERT INTO users(id,name,password,email,drive_license,"isAdmin",created_at)
    values('${id}','admin','${password}','admin@rentx.com','13665458', true,'now()')
    `
  );
}
create().then(() => console.log("User admin created"));
