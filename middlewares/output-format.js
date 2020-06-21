/**
 * GNU GENERAL PUBLIC LICENSE v3.0
 *
 * @summary Pipeline to determine the format of the response to the client
 * @author Gabriel Santiago
 *
 * Created at     : 2020-06-19 22:14:26
 * Last modified  : 2020-06-19 22:43:37
 */

const { titleCase } = require('title-case');

exports.outputFormat = (req, res, next) => {
    var agent = req.header('User-Agent');
    var outputType = req.query.output || 'json';

    var data = res.locals.data;

    var newLine = '<br>';
    if (agent.startsWith('curl')) {
        newLine = '\n';
    }
    if (outputType == 'json') {
        res.status(200).json(data).end();
    } else if (outputType == 'text') {
        res.status(200).send(jsonToText(data, newLine)).end();
    } else {
        //  fallback to json
        res.status(200).json(data).end();
    }
};

function jsonToText(json, newLine) {
    var order = json.order || null;

    var tab = '  ';
    if (newLine == '<br>') {
        tab = '&nbsp;&nbsp;&nbsp;';
    }

    if (order == null) {
        return 'An error happened';
    }

    var text =
        `${tab}Feeling adventurous? This is what I found for ${
            json.restaurant || '--Unavailable--'
        }${newLine}` +
        `${tab}Yeah, I can't use that name, but you know what I mean ;)${newLine}${newLine}`;
    text += getRecursive('', newLine, tab, order);

    return text;
}

function getRecursive(text, newLine, tab, json) {
    for (item in json) {
        var val = json[item];
        // if isinstance(val, dict):

        if (val.constructor == Object) {
            text += tab + titleCase(item.replace('_', ' ')) + ':' + newLine;
            text += getRecursive('', newLine, `${tab}${tab}`, val);
        } else if (val.constructor == Array) {
            val = `${val.join(', ')}`;
            text += `${tab}\u2022 ${titleCase(
                item.replace('_', ' ')
            )}: ${val.replace('_', ' ')}${newLine}`;
        } else {
            text += `${tab}\u2022 ${titleCase(
                item.replace('_', ' ')
            )}: ${val.replace('_', ' ')}${newLine}`;
        }
    }
    return text;
}
