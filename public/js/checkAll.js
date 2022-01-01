function checkAll() {
    if (!checkDate(form.currentDate.value)) {
        return false;
    } else if (!checkFromTime(form.fromTime.value)) {
        return false;
    } else if (!checkUntilTime(form.untilTime.value)) {
        return false;
    } else if (!checkInvited(form.invited.value)) {
        return false;
    }
    return true;
}
