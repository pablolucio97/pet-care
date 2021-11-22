import { analytics } from "./firebase";

const analyticsEvents = (event, params) => {
    analytics.logEvent(event, params)
}
 
export {analyticsEvents}