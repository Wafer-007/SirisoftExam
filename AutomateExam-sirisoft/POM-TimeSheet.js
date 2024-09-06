class Timesheet{
    elements ={
        GotoTimeSheetpg : () => cy.visit('Timesheet-url'),
        Username : () => cy.get('Username'),
        TimesheetHeader : () => cy.get('LocatorheaderTimesheet'),
        AddTimeEntryBtn : () => cy.get('AddTimeEntrybutton'),
        AddTimeEntryTitle : () => cy.get('AddTimeEntryTitle'),
        TimeOffDD : () => cy.get('.timeofftype'),
        TimeSheetData : ()=> cy.contains('DataRow'),
        SubmitBtn : ()=> cy.get('SubmitBtn'),
        EditBtn : ()=> cy.get('locatorEditBtn'),
        DatePicker : ()=> cy.get('Datepicker'),
        LeaveCheckbox : ()=> cy.get('#Checkbox'),
        LeaveDD : ()=> cy.get('#leaveDD'),
        StartDate : ()=> cy.get('#timePicker-StartDate'),
        FinishDate : ()=> cy.get('#timePicker-FinishDate'),
        DeleteBtn : ()=> cy.get('locatorDeleteBtn'),
        ProjectDD : ()=> cy.get('ProjectDD'),
        Task : ()=> cy.get('TaskDD'),
        Note : ()=> cy.get('.note'),
        TaskDetailBox : ()=> cy.get('TaskDetailLocator'),
        SubmitBtn : ()=> cy.get('SubmitBtnlocator'),
        DeleteTimeSheetBtn : ()=> cy.get('DeleteBtn'),
        DeleteTimeSheetmsg : ()=> cy.get('Delete TimeSheet Title'),
        ConfirmDeleteBtn : ()=> cy.get('ConfirmBtn')
    }
    OpenTimeSheetpage(){
      this.elements.GotoTimeSheetpg(),
      expect(Username).to.equal('Tester Test'),
      expect(TimesheetHeader).to.equal('TimeSheet')
    }
    OpenAddTimeEntryModal()
    {
      this.elements.AddTimeEntryBtn().click(),
      expect(AddTimeEntryTitle).to.equal('Add Time Entry')
    }
    AddTimeEntrySuccess(){
        this.elements.DatePicker().find('input').then( day => {
        cy.wrap(day).find('current-month').as('ActiveDay')
        cy.get('@ActiveDay').find('button').contains('05').click()}),
        this.elements.StartDate().type('09:00').should('have.value', '09:00'),
        this.elements.FinishDate().type('12:00').should('have.value', '12:00'),
        this.elements.ProjectDD().select('2').should('have.value','2'),
        this.elements.Task().select('1').should('have.value','1'),
        this.elements.TaskDetailBox().type('Testทดสอบ1234!@#'),
        expect(TaskDetailBox).to.contain('Testทดสอบ1234!@#'),
        this.elements.SubmitBtn().click(),
        expect(TimeSheetData).should('exist')
    }
    LeaveTime(){
        this.elements.LeaveCheckbox().check(),
        expect(LeaveDD).to.be.visible
    }
    AddLeavesuccess(){
        this.elements.DatePicker().find('input').then( day => {
        cy.wrap(day).find('current-month').as('ActiveDay')
        cy.get('@ActiveDay').find('button').contains('05').click()}),
        this.elements.LeaveDD().select('1').should('have.value','1'),
        this.elements.TimeOffDD().select('2').should('have.value','2'),
        this.elements.Note().type('Testทดสอบ1234!@#'),
        expect(Note).to.contain('Testทดสอบ1234!@#'),
        this.elements.SubmitBtn().click(),
        expect(TimeSheetData).should('exist')
    }
    DeleteUserTimeSheet()
    {
        this.elements.DeleteTimeSheetBtn().click(),
        expect(DeleteTimeSheetmsg).to.equal('Delete TimeSheet')
        this.elements.ConfirmDeleteBtn().click()
        expect(TimeSheetData).not.to.exist
    }
}
    export default Timesheet();