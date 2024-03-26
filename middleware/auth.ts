// when ever you want to use middle ware function you need to export express and NextFunction

import { NextFunction , Request , Response } from "express";
 
export default function auth (req:Request , res :Response , next:NextFunction){
    console.log("Middleware has hitted")
    next()
}