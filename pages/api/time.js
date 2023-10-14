function time(request, response) {
    const DyDate = new Date();

    response.json({
        date: DyDate.toTimeString()
    });
}

export default time;