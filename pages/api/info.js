function info(request, response) {

    response.status(200).json({
        Request: {
            status: 200,
            Env: "local"
        },

        CreationDate: "13/10/23",

        Developers: {
            First: "Yyax"
        },

        Message: "Thanks for use HKolds <3",
        
        Version: "v0.0.34"
    });
}

export default info;