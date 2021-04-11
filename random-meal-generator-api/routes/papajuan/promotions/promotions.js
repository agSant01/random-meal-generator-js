/**
 * GNU GENERAL PUBLIC LICENSE v3.0
 *
 * @author Gabriel Santiago
 *
 * Created at     : 2020-06-30 23:18:37
 * Last modified  : 2020-07-01 00:09:34
 */
var https = require('https');

exports.getPromotions = async (callback) => {
    await https
        .get('https://www.papajohns.pr/service/promotions/1/1', (res) => {
            const { statusCode } = res;

            let error;
            if (statusCode !== 200) {
                callback.failure(
                    'Request Failed.\n' + `Status Code: ${statusCode}`
                );
                return;
            }

            if (error) {
                console.error(error.message);
                callback.failure(e.message);
                // Consume response data to free up memory
                res.resume();
                return;
            }

            res.setEncoding('utf8');
            let rawData = '';
            res.on('data', (chunk) => {
                rawData += chunk;
            });
            res.on('end', () => {
                try {
                    const parsedData = JSON.parse(rawData);
                    var finalData = [];
                    for (let element of parsedData.response) {
                        var item = {
                            name: element.name,
                            description: element.introduction,
                            price: element.price,
                            image: `https://www.papajohns.pr${element.imageCard}`,
                            url: `https://www.papajohns.pr/process/${element.url}/1`,
                            is_visible: element.isVisible,
                        };
                        finalData.push(item);
                    }
                    callback.success(finalData);
                } catch (e) {
                    console.error(e.message);
                    callback.failure(e.message);
                }
            });
        })
        .on('error', (e) => {
            console.error(`Got error: ${e.message}`);
            callback.failure(e.message);
        });
};
