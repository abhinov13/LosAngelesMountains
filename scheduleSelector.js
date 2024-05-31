const updateSelectedSchedule = (callerScheduleButton, activeId) => {
    const scheduleButtons = document.querySelectorAll(".schedule-btn");
    const schedules = document.querySelectorAll(".schedule-option")
    console.log("Called")
    console.log(scheduleButtons);
    console.log(schedules);
    scheduleButtons.forEach((scheduleBtn) => {
        scheduleBtn.classList.remove('active-schedule');
    });
    schedules.forEach((schedule) => {
        schedule.classList.remove('active');
    })
    callerScheduleButton.classList.add('active-schedule');
    document.getElementById(activeId).classList.add("active");
}