import axios from "axios";
import jwtDecode from "jwt-decode";
import { userModel } from "../Models/userModel";

const BASE_URL = process.env.REACT_APP_BASE_URL

class UserFunctions {



    async getUserById(id: number): Promise<userModel | undefined>{
        try{ 
            const { data } = await axios.get(`${BASE_URL}/api/user/${id}`);
            
            return data;

        } catch(e) {
            // console.error(e);
            return undefined;
        } 
    }

    async getUserId() {
        let token: any = window.localStorage.getItem(`userToken`);
        
        if(!token){
            return  undefined 
        } else {
                const { sub }: any = jwtDecode<{ user: userModel}>(token);
                // const userDetails = await userFunctions.getUserById(user.sub)
                // console.log("sub: " + sub);
                return sub;
                }
                
    }
  
}
export const userFunctions = new UserFunctions();
