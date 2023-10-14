function time(request, response) {
    const DyDate = new Date();

    response.json({
        CreationDate: "13/10/23",
        Developers: {
            First: "Yyax"
        },
        Message: "Thanks for use HKolds <3",
        Version: "v0.0.32"
    });
}

export default time;