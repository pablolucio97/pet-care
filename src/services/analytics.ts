import { analytics } from "./firebase";

const analyticsEvents = (event: any, params: any) => {
    analytics.logEvent(event, params)
}
 
export {analyticsEvents}