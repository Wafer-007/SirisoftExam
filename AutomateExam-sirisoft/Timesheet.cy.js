import Timesheet from "../AutomateExam-sirisoft/POM-TimeSheet"
describe('Timesheet', () => {
    it('Verify TimeSheet page', () => {
        Timesheet.OpenTimeSheetpage();
    })
    it('Open Add Entry Modal', ()=>{
        Timesheet.OpenAddTimeEntryModal();
    })
    it('Add Time Entry', ()=>{
        Timesheet.AddTimeEntrySuccess();
    })
    it('Add Leave', ()=>{
        Timesheet.LeaveTime();
        Timesheet.AddLeavesuccess();
    })
    it('Delete User Timesheet', ()=> {
        Timesheet.DeleteUserTimeSheet();
    })
  })