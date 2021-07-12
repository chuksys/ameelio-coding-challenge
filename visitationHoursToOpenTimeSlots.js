
const visitationHours = [{ start: { day: 1, hour: 14, minute: 00 }, duration: 3600000 }, 
    { start: { day: 1, hour: 18, minute: 00 }, duration: 3600000 }, 
    { start: { day: 2, hour: 10, minute: 00 }, duration: 1800000 }];   

const scheduledCalls = [
    {start: 1613399400000, end: 1613401200000}, 
    {start: 1613412000000, end: 1613413800000}, 
    {start: 1613413800000, end: 1613415600000}
];

const visitationHoursToOpenTimeSlot = (visitationHours, scheduledCalls) => {

    const availableTimeSlots = [
        {start: 1613399400000, end: 1613401200000}, 
        {start: 1613412000000, end: 1613413800000}, 
        {start: 1613413800000, end: 1613415600000}
    ];

    for(let scheduledCall of scheduledCalls) {
        const scheduledCallIsInAvailableSlot = checkIfScheduledCallIsInAvailableTimeSlot(scheduledCall, availableTimeSlots);

        if(scheduledCallIsInAvailableSlot) {
            availableTimeSlots.pop(scheduledCall)
        }
    }


    return availableTimeSlots;
}

const checkIfScheduledCallIsInAvailableTimeSlot = (scheduledCall, availableTimeSlots) => {
    
    const filterScheduledCall = availableTimeSlots.filter(slot => slot === scheduledCall)
    
    if(filterScheduledCall.length < availableTimeSlots.length) {
        return true;
    }

    return false;
}

visitationHoursToOpenTimeSlot(visitationHours,scheduledCalls)


//Algorithm

//convert visitationHours to epoch
//assume all slots are available
//foreach scheduled call...
//check if scheduled call exists in availableslots
// if it exists, remove from available slot
//return available slots left
