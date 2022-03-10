/* Name:OpptyCloseTimerCntrl
 * Description: Fetch the close date of opportunity record based record id.
 * Created Date: 25/06/2019
 * LastModified Date: 25/06/2019
 * Created By: Arun Kumar
*/
public class OpptyCloseTimerCntrl {
    
    @AuraEnabled
    public static Date fetchOpptyCloseDate(String recId){
        Opportunity opp = [select CloseDate from Opportunity where id =: recId];
        system.debug('Close Date: ' +opp.CloseDate);
        
        return opp.CloseDate;
    }
}
