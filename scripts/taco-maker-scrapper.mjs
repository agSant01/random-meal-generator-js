import {
    existsSync,
    mkdirSync,
    readdirSync,
    readFileSync,
    writeFileSync,
} from 'fs';
import fetch from 'node-fetch';
import { DOMParser } from 'xmldom';
import xpath from 'xpath';

const WORK_DIR = 'taco-maker-data';
const BASE_URL = 'https://www.tacomaker.com/menu';

async function getMainMenuData() {
    const response = await fetch('https://www.tacomaker.com/menu/');
    const body = await response.text();
    console.log(body);

    // Save the text to a file named 'output.txt'
    writeFileSync(`${WORK_DIR}/mainMenu.html`, body, 'utf8');
}

async function downloadSubMenuHtml(subMenu) {
    const response = await fetch(`https://www.tacomaker.com/menu/${subMenu}`);
    const body = await response.text();
    // Save the text to a file named 'output.txt'
    writeFileSync(`${WORK_DIR}/subMenus/${subMenu}.html`, body, 'utf8', {});
}

async function parseMainMenuHtml() {
    const xmlData = readFileSync(`${WORK_DIR}/mainMenu.html`, 'utf8');

    const doc = new DOMParser().parseFromString(xmlData);

    const xpathExpression = "//div[contains(@class, 'menu')]//a";
    const nodes = xpath.select(xpathExpression, doc);

    for (const node of nodes) {
        await downloadSubMenuHtml(node.getAttribute('href').trim());
        Array.from(node.childNodes).forEach((child) => {
            if (child.nodeName === 'h2') {
                console.log('H2 Content:', child.textContent.trim());
            } else if (child.nodeName === 'img') {
                console.log('Image src:', child.getAttribute('src'));
            }
        });
    }
}

async function parseHtmlSubMenus() {
    const allMenu = [];
    for (const file of readdirSync(`${WORK_DIR}/subMenus`)) {
        console.log('Processing SubMenu:' + file);
        const subMenuItems = {};
        const html = readFileSync(`${WORK_DIR}/subMenus/${file}`, 'utf-8');
        const doc = new DOMParser().parseFromString(html);

        const xpathExpression = "//div[contains(@class, 'categories')]//a";
        const nodes = xpath.select(xpathExpression, doc);

        const title = xpath.select('//title', doc);
        subMenuItems['subMenu'] = title[0].textContent.split(' | ')[2];
        subMenuItems['url'] = `${BASE_URL}/${file}`;
        subMenuItems['items'] = [];

        for (const node of nodes) {
            var subMenuItem = {};
            subMenuItem['name'] = node.getAttribute('data-label').trim();
            subMenuItem['info'] = node.getAttribute('data-info').trim();

            const resolvedUrl = new URL(
                node.getAttribute('data-img').trim(),
                BASE_URL
            );
            subMenuItem['img'] = resolvedUrl.href;

            Array.from(node.childNodes).forEach((child) => {
                if (child.nodeName === 'h2') {
                    console.log('Titulo', child.textContent.trim());
                } else if (child.nodeName === 'img') {
                    console.log('Image src:', child.getAttribute('src'));
                }
            });
            subMenuItems.items.push(subMenuItem);
        }

        allMenu.push(subMenuItems);
    }

    writeFileSync(
        `${WORK_DIR}/allMenu.json`,
        JSON.stringify(allMenu, null, 4),
        'utf8'
    );
}

if (!existsSync(`${WORK_DIR}/subMenus`)) {
    mkdirSync(`${WORK_DIR}/subMenus`, { recursive: true }); // Create the directory recursively
}

await getMainMenuData();
await parseMainMenuHtml();
await parseHtmlSubMenus();
