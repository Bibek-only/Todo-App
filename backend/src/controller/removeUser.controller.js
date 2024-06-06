import { User, Todo } from "../model/exprort.model.js";
import zod from "zod";

async function removeUser(req, res, next) {
  const userInfo = req.body;
    
  // zod schema for input validation
  const bodySchema = zod.object({
    userName: zod.string(),
    password: zod.string(),
  });
  const isIPValid = bodySchema.safeParse(userInfo);
  if (!isIPValid.success) {
    res.send("the input is not vlid");
    return;
  }


  // find out the user is exist in the data base or not
  const isUserExist = await User.findOne({
    $or: {userName: req.body.userName, password: req.body.password}
    })

    if(! isUserExist){
    
    res.send("no user is exist on the data base");
    return
    }

    //find the id of the user to identify the users todos
    const ownerId = isUserExist._id;
    
    // delete the todo of the owner
    await Todo.deleteMany({owner: ownerId})
    
    // delete the user
    await User.deleteOne({
        $or: {userName: req.body.userName, password: req.body.password}
    })
    
    res.send("sucessfully remove the user")
    
   
}


export { removeUser };
