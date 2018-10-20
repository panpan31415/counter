import * as action_type from "./actionList";

export const updateTime = (activeSession,amount)=>{

    switch(activeSession){
        case "DAYS":{
            return{
                type:action_type.UPDATE_DAYS,
                payload:amount
            }
        }
        case "HOURS":{
            return{
                type:action_type.UPDATE_HOURS,
                payload:amount
            }
        }
        case "MINUTES":{
            return{
                type:action_type.UPDATE_MINUTES,
                payload:amount
            }
        }
        case "SECONDS":{
            return{
                type:action_type.UPDATE_SECONDS,
                payload:amount
            }
        }default:{
            return{
                type:null,
                payload:null
            }
        }
    }

};

export const setActiveSession = (session)=>{
    return {
        type:action_type.SET_ACTIVE_SESSION,
        payload:session
    }
}
