const parseApple = () => {
        new Promise((resolve, reject) => {
            console.log(1);
            const cb = function () {
                console.log(2);
                try {
                    resolve(JSON.parse("s"));
                } catch (err) {
                    console.log("very bad error: ");
                }
            };
            setTimeout(cb, 0);
        });
    console.log(3);
};

parseApple();
